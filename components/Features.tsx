"use client";

import { motion } from "framer-motion";
import { Zap, FileText, Users, BarChart3, Clock, Award } from "lucide-react";

const features = [
    {
        title: "Real-Time Bid Updates",
        description: "Instant notifications when subcontractors submit, view, or update bids. Stay ahead of project changes as they happen.",
        icon: <Zap className="text-accent" size={28} />,
    },
    {
        title: "Document Management",
        description: "Centralized, secure storage for all RFPs, blueprints, and specs. Ensure your team always has the latest set.",
        icon: <FileText className="text-accent" size={28} />,
    },
    {
        title: "Verified Sub-Network",
        description: "Access a vetted network of qualified trades ready to bid. Find the right partners for every scope of work.",
        icon: <Users className="text-accent" size={28} />,
    },
    {
        title: "Bid Comparison Tools",
        description: "Side-by-side analytics and automated bid leveling. Make data-driven decisions with precision.",
        icon: <BarChart3 className="text-accent" size={28} />,
    },
    {
        title: "Deadline Tracking",
        description: "Automated reminders and real-time countdowns for every RFP. Never let a submission date slip by.",
        icon: <Clock className="text-accent" size={28} />,
    },
    {
        title: "Contract Awards",
        description: "Streamlined awarding process with instant digital notifications. Move from bid to contract in record time.",
        icon: <Award className="text-accent" size={28} />,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark mb-4">
                        Everything you need to <span className="text-primary">Bid Faster</span>
                    </h2>
                    <p className="text-neutral-dark/60 max-w-2xl mx-auto">
                        We've built BidForge from the ground up to solve the most painful parts of construction bid management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group"
                        >
                            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-dark mb-3">{feature.title}</h3>
                            <p className="text-neutral-dark/60 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
