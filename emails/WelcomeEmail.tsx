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
    Link,
    Row,
    Column,
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
            <Preview>You're in! Welcome to the BidForge Waitlist 🎉</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Brand Header */}
                    <Section style={header}>
                        <Img
                            src="https://bidforgewaitlist.netlify.app/logo.jpeg"
                            alt="BidForge"
                            width="50"
                            height="50"
                            style={logo}
                        />
                        <Heading style={brandText}>
                            Bid<span style={{ color: "#FF8C42" }}>Forge</span>
                        </Heading>
                    </Section>

                    {/* Hero Section */}
                    <Section style={hero}>
                        <Heading style={h1}>Welcome to the waitlist, future builder!</Heading>
                        <Text style={heroText}>
                            Constructing the perfect bidding platform takes time. We're glad you're here to help us build it.
                        </Text>
                    </Section>

                    {/* Position Card */}
                    <Section style={card}>
                        <Text style={cardLabel}>YOUR WAITLIST POSITION</Text>
                        <Heading style={cardValue}>#{position}</Heading>
                        <Text style={cardSubtext}>We're growing fast! Thank you for your early support.</Text>
                    </Section>

                    {/* The Offer */}
                    <Section style={offerSection}>
                        <Row>
                            <Column align="center" style={offerBadge}>
                                <Text style={offerBadgeText}>EXCLUSIVE PRE-LAUNCH OFFER</Text>
                            </Column>
                        </Row>
                        <Heading style={offerTitle}>60-Day Pro Trial</Heading>
                        <Text style={offerDescription}>
                            As a thank you for joining early, your account will be pre-loaded with a <strong>60-day trial of BidForge Pro</strong> (a $198 value) the moment we go live.
                        </Text>
                    </Section>

                    <Hr style={divider} />

                    {/* What's Next */}
                    <Section style={stepsSection}>
                        <Heading style={h2}>What happens now?</Heading>

                        <Section style={stepRow}>
                            <Row>
                                <Column style={stepNumberContainer}>
                                    <Text style={stepNumber}>01</Text>
                                </Column>
                                <Column>
                                    <Text style={stepTitle}>Validation</Text>
                                    <Text style={stepContent}>
                                        We are currently fine-tuning the platform with our pre-beta group. You'll receive updates as we move closer to launch.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section style={stepRow}>
                            <Row>
                                <Column style={stepNumberContainer}>
                                    <Text style={stepNumber}>02</Text>
                                </Column>
                                <Column>
                                    <Text style={stepTitle}>First Invite</Text>
                                    <Text style={stepContent}>
                                        Invitations will be sent out in batches based on waitlist position. Watch your inbox for your unique access code.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section style={stepRow}>
                            <Row>
                                <Column style={stepNumberContainer}>
                                    <Text style={stepNumber}>03</Text>
                                </Column>
                                <Column>
                                    <Text style={stepTitle}>Get Bidding</Text>
                                    <Text style={stepContent}>
                                        Log in, set up your profile, and start managing your bids without the spreadsheet headache.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>
                    </Section>

                    {/* Footer Info */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Sent to <span style={footerEmphasis}>{email}</span> because you signed up as a <span style={footerEmphasis}>{role}</span> on the BidForge website.
                        </Text>
                        <Hr style={footerDivider} />
                        <Text style={copyright}>
                            © {new Date().getFullYear()} BidForge Inc. All rights reserved.<br />
                            Modern construction bidding for General & Subcontractors.
                        </Text>
                        <Section style={footerLinks}>
                            <Link href="https://bidforgewaitlist.netlify.app" style={footerLink}>Website</Link>
                            <span style={footerDot}> • </span>
                            <Link href="mailto:bidforge@hotmail.com" style={footerLink}>Support</Link>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default WelcomeEmail;

// --- STYLES ---

const main = {
    backgroundColor: "#f9fafb",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    padding: "40px 0",
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "24px",
    margin: "0 auto",
    maxWidth: "600px",
    overflow: "hidden",
};

const header = {
    padding: "40px 20px 20px",
    textAlign: "center" as const,
};

const logo = {
    borderRadius: "12px",
    margin: "0 auto",
    display: "block",
};

const brandText = {
    fontSize: "24px",
    fontWeight: "800",
    color: "#111827",
    margin: "12px 0 0",
    letterSpacing: "-0.5px",
};

const hero = {
    padding: "0 40px 40px",
    textAlign: "center" as const,
};

const h1 = {
    color: "#111827",
    fontSize: "32px",
    fontWeight: "900",
    lineHeight: "1.2",
    margin: "20px 0 10px",
};

const heroText = {
    color: "#4b5563",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "0",
};

const card = {
    backgroundColor: "#fdf8f6",
    border: "2px dashed #ffedd5",
    borderRadius: "24px",
    margin: "0 40px 40px",
    padding: "32px",
    textAlign: "center" as const,
};

const cardLabel = {
    color: "#9a3412",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "0.1em",
    margin: "0 0 8px",
};

const cardValue = {
    color: "#FF8C42",
    fontSize: "56px",
    fontWeight: "900",
    margin: "0",
    lineHeight: "1",
};

const cardSubtext = {
    color: "#9a3412",
    fontSize: "13px",
    margin: "12px 0 0",
    opacity: "0.8",
};

const offerSection = {
    padding: "0 40px 40px",
    textAlign: "center" as const,
};

const offerBadge = {
    backgroundColor: "#008080",
    borderRadius: "99px",
    padding: "4px 16px",
    display: "inline-block",
};

const offerBadgeText = {
    color: "#ffffff",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "0.05em",
    margin: "0",
};

const offerTitle = {
    color: "#111827",
    fontSize: "22px",
    fontWeight: "800",
    margin: "16px 0 8px",
};

const offerDescription = {
    color: "#4b5563",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0",
};

const divider = {
    borderColor: "#f3f4f6",
    margin: "0 40px 40px",
};

const stepsSection = {
    padding: "0 40px 40px",
};

const h2 = {
    color: "#111827",
    fontSize: "20px",
    fontWeight: "800",
    margin: "0 0 24px",
};

const stepRow = {
    marginBottom: "24px",
};

const stepNumberContainer = {
    width: "48px",
    verticalAlign: "top",
};

const stepNumber = {
    color: "#e5e7eb",
    fontSize: "24px",
    fontWeight: "900",
    margin: "0",
    lineHeight: "1.2",
};

const stepTitle = {
    color: "#111827",
    fontSize: "16px",
    fontWeight: "700",
    margin: "0 0 4px",
};

const stepContent = {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "0",
};

const footer = {
    backgroundColor: "#f9fafb",
    padding: "40px",
    textAlign: "center" as const,
};

const footerText = {
    color: "#6b7280",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0 0 24px",
};

const footerEmphasis = {
    color: "#111827",
    fontWeight: "600",
};

const footerDivider = {
    borderColor: "#e5e7eb",
    margin: "0 0 24px",
};

const copyright = {
    color: "#9ca3af",
    fontSize: "12px",
    lineHeight: "1.5",
    margin: "0 0 16px",
};

const footerLinks = {
    textAlign: "center" as const,
};

const footerLink = {
    color: "#008080",
    fontSize: "12px",
    fontWeight: "600",
    textDecoration: "none",
};

const footerDot = {
    color: "#d1d5db",
    fontSize: "12px",
    margin: "0 8px",
};
