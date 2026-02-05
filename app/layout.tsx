import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BidForge Waitlist - Construction Bid Management | Join Early Access",
    description: "Stop wasting 40+ hours on bid tracking. Join the waitlist for BidForge - real-time construction bid management for contractors and subcontractors.",
    keywords: ["construction bid management", "contractor software", "subcontractor bidding", "bid tracking"],
    openGraph: {
        title: "BidForge Waitlist - Construction Bid Management",
        description: "Real-time construction bid management for contractors and subcontractors.",
        type: "website",
        url: "https://bidforge.com",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "BidForge Waitlist",
        description: "Real-time construction bid management.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            { rel: "shortcut icon", url: "/favicon.ico" },
            { rel: "manifest", url: "/manifest.json" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased text-neutral-dark bg-neutral-light">
                {children}
            </body>
        </html>
    );
}
