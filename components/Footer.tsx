"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-3">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                                <Image
                                    src="/logo.jpeg"
                                    alt="BidForge Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                Bid<span className="text-primary">Forge</span>
                            </span>
                        </Link>
                        <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
                            The next generation of construction bid management. Building the tools to help you work faster, bid smarter, and grow your construction business with modern technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-white/60 hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#join" className="text-white/60 hover:text-white transition-colors">Join Waitlist</Link></li>
                            <li><Link href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm">
                        © {currentYear} BidForge. All rights reserved. Built for the construction industry.
                    </p>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <Mail size={16} />
                        <a href="mailto:bidforge@hotmail.com" className="hover:text-white transition-colors">bidforge@hotmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
