import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { render } from "@react-email/render";
import WelcomeEmail from "@/emails/WelcomeEmail";
import { z } from "zod";

const waitlistSchema = z.object({
    email: z.string().email("Invalid email address"),
    role: z.enum(["General Contractor", "Subcontractor"]),
    company: z.string().optional(),
});

export async function GET() {
    try {
        const { count, error } = await supabase
            .from("waitlist")
            .select("*", { count: "exact", head: true });

        if (error) {
            console.error("Supabase error (GET):", error);
            return NextResponse.json({ count: 0 });
        }

        return NextResponse.json({ count: count || 0 });
    } catch (error) {
        console.error("GET /api/waitlist error:", error);
        return NextResponse.json({ count: 0, error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validated = waitlistSchema.parse(body);

        // 1. Check if email already exists
        const { data: existing, error: searchError } = await supabase
            .from("waitlist")
            .select("id")
            .eq("email", validated.email.toLowerCase())
            .single();

        if (searchError && searchError.code !== "PGRST116") {
            console.error("Supabase search error:", searchError);
        }

        if (existing) {
            return NextResponse.json(
                { error: "This email is already on the waitlist!" },
                { status: 400 }
            );
        }

        // 2. Insert into Supabase
        const { error: insertError } = await supabase
            .from("waitlist")
            .insert([
                {
                    email: validated.email.toLowerCase(),
                    role: validated.role,
                    company: validated.company || null,
                },
            ]);

        if (insertError) {
            console.error("Supabase insert error:", insertError);
            throw new Error("Failed to save to database");
        }

        // 3. Get new total count / position
        const { count: totalCount } = await supabase
            .from("waitlist")
            .select("*", { count: "exact", head: true });

        const position = totalCount || 0;

        // 4. Send Emails via Brevo
        if (process.env.BREVO_API_KEY && process.env.EMAIL_USER) {
            try {
                // Render the welcome email HTML
                const emailHtml = await render(
                    WelcomeEmail({
                        email: validated.email,
                        role: validated.role,
                        position,
                    })
                );

                // Send welcome email to user
                await fetch("https://api.brevo.com/v3/smtp/email", {
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "api-key": process.env.BREVO_API_KEY,
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        sender: {
                            name: "BidForge",
                            email: process.env.EMAIL_USER,
                        },
                        to: [
                            {
                                email: validated.email,
                                name: validated.email.split("@")[0],
                            },
                        ],
                        subject: "Welcome to BidForge - Your 60-Day Pro Trial Awaits! 🎉",
                        htmlContent: emailHtml,
                    }),
                });

                // Send admin notification
                const adminNotification = `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #2563eb; margin-bottom: 20px;">🎉 New Waitlist Signup!</h2>
                        <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                            <p style="margin: 8px 0;"><strong>Email:</strong> ${validated.email}</p>
                            <p style="margin: 8px 0;"><strong>Role:</strong> ${validated.role}</p>
                            <p style="margin: 8px 0;"><strong>Company:</strong> ${validated.company || 'Not provided'}</p>
                            <p style="margin: 8px 0;"><strong>Position:</strong> #${position}</p>
                            <p style="margin: 8px 0;"><strong>Total signups:</strong> ${totalCount}</p>
                        </div>
                        <p style="color: #6b7280; font-size: 14px;">
                            View all signups in your <a href="https://supabase.com/dashboard" style="color: #2563eb;">Supabase Dashboard</a>
                        </p>
                    </div>
                `;

                await fetch("https://api.brevo.com/v3/smtp/email", {
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "api-key": process.env.BREVO_API_KEY,
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        sender: {
                            name: "BidForge Waitlist",
                            email: process.env.EMAIL_USER,
                        },
                        to: [
                            {
                                email: process.env.EMAIL_USER,
                                name: "BidForge Admin",
                            },
                        ],
                        subject: `New Waitlist Signup: ${validated.email}`,
                        htmlContent: adminNotification,
                    }),
                });

                console.log("✅ Emails sent successfully via Brevo");
            } catch (emailError) {
                console.error("Failed to send emails via Brevo:", emailError);
                // Don't fail the whole request if email fails
            }
        } else {
            console.warn("Skipping email: BREVO_API_KEY or EMAIL_USER not set");
        }

        return NextResponse.json({
            success: true,
            position,
            total: totalCount,
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
        }
        console.error("POST /api/waitlist error:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}
