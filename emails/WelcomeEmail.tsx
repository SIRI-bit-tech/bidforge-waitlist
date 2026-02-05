import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
    Img,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    email: string;
    role: string;
    position: number;
}

export const WelcomeEmail = ({ email, role, position }: WelcomeEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Welcome to BidForge - Your 60-Day Pro Trial Awaits!</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with Logo */}
                    <Section style={headerSection}>
                        <Img
                            src="https://your-domain.netlify.app/logo.jpeg"
                            alt="BidForge Logo"
                            width="60"
                            height="60"
                            style={logo}
                        />
                        <Heading style={h1}>
                            Bid<span style={{ color: "#FF8C42" }}>Forge</span>
                        </Heading>
                        <Text style={tagline}>Real-Time Construction Bid Management</Text>
                    </Section>

                    <Section style={contentSection}>
                        <Heading style={h2}>Welcome to the Future of Bidding! 🎉</Heading>
                        <Text style={text}>
                            Thank you for joining the BidForge waitlist. You've secured your spot as an early adopter of the platform that's transforming how General Contractors and Subcontractors collaborate on construction projects.
                        </Text>

                        {/* Waitlist Position Box */}
                        <Section style={statsBox}>
                            <Text style={statsLabel}>Your Waitlist Position</Text>
                            <Text style={statsNumber}>#{position}</Text>
                            <Text style={statsSubtext}>You're ahead of the curve!</Text>
                        </Section>

                        {/* Pro Trial Highlight */}
                        <Section style={proTrialBox}>
                            <Text style={proTrialIcon}>🎁</Text>
                            <Heading style={proTrialHeading}>60-Day Pro Trial Included</Heading>
                            <Text style={proTrialText}>
                                As a waitlist member, you'll receive <strong>full access to all Pro features</strong> for 60 days when we launch—completely free.
                            </Text>
                        </Section>

                        <Heading style={h3}>What Happens Next?</Heading>
                        <Section style={stepList}>
                            <Section style={stepItem}>
                                <Text style={stepNumber}>1</Text>
                                <Section style={stepContent}>
                                    <Text style={stepTitle}>Stay Updated</Text>
                                    <Text style={stepDescription}>
                                        We'll send you exclusive updates on our development progress and sneak peeks of upcoming features.
                                    </Text>
                                </Section>
                            </Section>

                            <Section style={stepItem}>
                                <Text style={stepNumber}>2</Text>
                                <Section style={stepContent}>
                                    <Text style={stepTitle}>Early Access Invitation</Text>
                                    <Text style={stepDescription}>
                                        You'll be among the first to receive an invite when our beta launches. Your 60-day Pro trial starts the moment you sign up.
                                    </Text>
                                </Section>
                            </Section>

                            <Section style={stepItem}>
                                <Text style={stepNumber}>3</Text>
                                <Section style={stepContent}>
                                    <Text style={stepTitle}>Shape the Platform</Text>
                                    <Text style={stepDescription}>
                                        Your feedback matters. Reply to this email anytime to share your biggest bidding challenges—we're building this for you.
                                    </Text>
                                </Section>
                            </Section>
                        </Section>

                        <Hr style={hr} />

                        {/* Footer */}
                        <Text style={footer}>
                            This email was sent to <strong>{email}</strong> as a <strong>{role}</strong>.
                        </Text>
                        <Text style={footerCompany}>
                            BidForge | Built for the Construction Industry
                        </Text>
                        <Text style={footerLinks}>
                            Questions? Reply to this email or visit our{" "}
                            <a href="https://your-domain.netlify.app" style={link}>
                                website
                            </a>
                        </Text>
                    </Section>
                </Container>

                {/* Trust Badge */}
                <Section style={trustBadge}>
                    <Text style={trustText}>
                        🔒 Your data is secure and will never be shared with third parties.
                    </Text>
                </Section>
            </Body>
        </Html>
    );
};

export default WelcomeEmail;

// Styles
const main = {
    backgroundColor: "#f3f4f6",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "40px auto",
    borderRadius: "12px",
    overflow: "hidden",
    maxWidth: "600px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
};

const headerSection = {
    backgroundColor: "#2F4F4F",
    padding: "40px 32px",
    textAlign: "center" as const,
};

const logo = {
    borderRadius: "8px",
    margin: "0 auto 16px",
};

const h1 = {
    color: "#ffffff",
    fontSize: "32px",
    fontWeight: "800",
    margin: "0",
    letterSpacing: "-0.5px",
};

const tagline = {
    color: "#E5E7EB",
    fontSize: "14px",
    margin: "8px 0 0 0",
    fontWeight: "500",
};

const contentSection = {
    padding: "48px 40px",
};

const h2 = {
    color: "#1F2937",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "16px",
    lineHeight: "1.3",
};

const h3 = {
    color: "#374151",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "40px",
    marginBottom: "24px",
};

const text = {
    color: "#4B5563",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "0 0 24px 0",
};

const statsBox = {
    backgroundColor: "#F9FAFB",
    borderRadius: "12px",
    padding: "32px",
    textAlign: "center" as const,
    margin: "32px 0",
    border: "2px solid #E5E7EB",
};

const statsLabel = {
    color: "#6B7280",
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    margin: "0 0 12px 0",
};

const statsNumber = {
    color: "#FF8C42",
    fontSize: "48px",
    fontWeight: "900",
    margin: "0",
    lineHeight: "1",
};

const statsSubtext = {
    color: "#9CA3AF",
    fontSize: "14px",
    margin: "12px 0 0 0",
};

const proTrialBox = {
    backgroundColor: "#FEF3C7",
    border: "2px solid #FCD34D",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center" as const,
    margin: "32px 0",
};

const proTrialIcon = {
    fontSize: "40px",
    margin: "0 0 12px 0",
};

const proTrialHeading = {
    color: "#92400E",
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 12px 0",
};

const proTrialText = {
    color: "#78350F",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0",
};

const stepList = {
    margin: "24px 0",
};

const stepItem = {
    display: "flex",
    marginBottom: "24px",
    alignItems: "flex-start",
};

const stepNumber = {
    backgroundColor: "#FF8C42",
    color: "#ffffff",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    flexShrink: "0",
    marginRight: "16px",
};

const stepContent = {
    flex: "1",
};

const stepTitle = {
    color: "#1F2937",
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 8px 0",
};

const stepDescription = {
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0",
};

const hr = {
    borderColor: "#E5E7EB",
    margin: "40px 0 32px 0",
};

const footer = {
    color: "#6B7280",
    fontSize: "14px",
    textAlign: "center" as const,
    lineHeight: "22px",
    margin: "0 0 8px 0",
};

const footerCompany = {
    color: "#9CA3AF",
    fontSize: "13px",
    textAlign: "center" as const,
    margin: "0 0 16px 0",
    fontWeight: "600",
};

const footerLinks = {
    color: "#9CA3AF",
    fontSize: "12px",
    textAlign: "center" as const,
    lineHeight: "20px",
    margin: "0",
};

const link = {
    color: "#FF8C42",
    textDecoration: "none",
    fontWeight: "600",
};

const trustBadge = {
    textAlign: "center" as const,
    margin: "24px auto 40px",
    maxWidth: "600px",
};

const trustText = {
    color: "#9CA3AF",
    fontSize: "12px",
    margin: "0",
};
