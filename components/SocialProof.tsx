"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    return (
        <section className="py-20 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <div className="text-5xl font-black text-accent uppercase tracking-tighter">Real-Time</div>
                        <p className="text-lg font-bold opacity-80 uppercase tracking-widest">Bid Collaboration</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                    >
                        <div className="text-5xl font-black text-accent uppercase tracking-tighter">SECURE</div>
                        <p className="text-lg font-bold opacity-80 uppercase tracking-widest">Document Management</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                    >
                        <div className="text-5xl font-black text-accent uppercase tracking-tighter">DIRECT</div>
                        <p className="text-lg font-bold opacity-80 uppercase tracking-widest">Contractor Messaging</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
