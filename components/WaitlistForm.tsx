"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [count, setCount] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        try {
            const res = await fetch("/api/waitlist");
            const data = await res.json();
            setCount(data.count);
        } catch (err) {
            console.error("Failed to fetch count", err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !role) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, role, company }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setPosition(data.position);
                setCount(data.total);
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection.");
        }
    };

    const getWaitlistText = () => {
        if (count === null || count === 0) return "Secure your 60-day free Pro trial today";
        return `Join ${count}+ professionals and secure your 60-day free Pro trial`;
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
            >
                <div className="flex justify-center mb-4">
                    <CheckCircle2 className="text-success" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">You're on the list!</h3>
                <p className="text-neutral-dark/70 mb-4">
                    We've sent a confirmation email to <span className="font-semibold">{email}</span>.
                </p>
                <div className="bg-success/10 text-success font-bold py-3 px-6 rounded-xl inline-block">
                    Your position: #{position || count}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <p className="text-primary font-bold">{getWaitlistText()}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-left">
                        <label className="block text-sm font-bold text-neutral-dark mb-1.5 ml-1">Email Address *</label>
                        <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div className="text-left">
                        <label className="block text-sm font-bold text-neutral-dark mb-1.5 ml-1">I am a... *</label>
                        <select
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white"
                        >
                            <option value="">Select your role</option>
                            <option value="General Contractor">General Contractor</option>
                            <option value="Subcontractor">Subcontractor</option>
                        </select>
                    </div>
                </div>
                <div className="text-left">
                    <label className="block text-sm font-bold text-neutral-dark mb-1.5 ml-1">Company Name (Optional)</label>
                    <input
                        type="text"
                        placeholder="Build It Right Inc."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 disabled:opacity-70 group"
                >
                    {status === "loading" ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            Join Waitlist + Get Free Trial
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <AnimatePresence>
                    {status === "error" && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-error text-sm font-bold mt-2"
                        >
                            {errorMessage}
                        </motion.p>
                    )}
                </AnimatePresence>

            </form>
        </div>
    );
}
