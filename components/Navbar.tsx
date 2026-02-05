"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                            <Image
                                src="/logo.jpeg"
                                alt="BidForge Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-neutral-dark tracking-tight">
                            Bid<span className="text-primary">Forge</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
                        <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
                        <Link href="#join" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-neutral-dark transition-all">
                            Join Waitlist
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
