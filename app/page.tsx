import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <SocialProof />

            {/* Dynamic Counter Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="bg-neutral-light p-12 rounded-[3rem] border border-gray-100 shadow-sm">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark mb-6">
                            Ready to <span className="text-primary italic">Transform</span> Your Bidding?
                        </h2>
                        <p className="text-lg text-neutral-dark/60 mb-10 max-w-xl mx-auto leading-relaxed">
                            Don't let manual bidding hold your business back. Join the waitlist today and secure your <strong>60-day free Pro trial</strong> when we launch.
                        </p>
                        <Link
                            href="#join"
                            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 hover:scale-105 transition-all shadow-xl shadow-accent/20 group"
                        >
                            Get Early Access + Free Trial
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <FAQ />
            <Footer />
        </main>
    );
}
