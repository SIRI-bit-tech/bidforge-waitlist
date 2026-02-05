"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide">
                        COMING SOON
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-dark mb-6 leading-tight">
                        Power Your Bidding with <span className="text-primary italic">Real-Time</span> Intelligence
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-dark/70 mb-10 max-w-2xl mx-auto">
                        The all-in-one platform for General Contractors and Subcontractors to connect, bid, and award projects without the spreadsheet headache.
                    </p>
                    <div className="flex justify-center mb-8">
                        <div className="bg-success/10 text-success px-6 py-3 rounded-2xl font-bold border border-success/20 animate-pulse">
                            🎁 Waitlist Exclusive: 60-Day Pro Trial Included
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    id="join"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl relative z-10 border border-gray-100"
                >
                    <WaitlistForm />
                </motion.div>
            </div>
        </section>
    );
}
