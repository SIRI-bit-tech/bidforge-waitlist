"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqCategories = [
    {
        name: "Platform Basics",
        items: [
            {
                question: "What is BidForge and how does it work?",
                answer: "BidForge is a real-time bidding management platform that bridges the gap between General Contractors and Subcontractors. GCs post projects and RFPs; Subs view documents and submit bids instantly. The platform handles the tracking, versioning, and comparison in one centralized dashboard."
            },
            {
                question: "Who can use BidForge?",
                answer: "BidForge is designed specifically for General Contractors who need to manage multi-trade bids and Subcontractors who need to find, track, and submit bids efficiently. It's built for trades ranging from HVAC and electrical to framing and concrete."
            },
            {
                question: "How is it different from email or phone bidding?",
                answer: "Email bidding is fragmented and prone to missing documents or lost updates. BidForge centralizes everything, providing instant notifications, automated bid leveling, and a single version-controlled source for all blueprints and specs."
            }
        ]
    },
    {
        name: "Getting Started",
        items: [
            {
                question: "How do I sign up and get started?",
                answer: "Simply join our waitlist today by entering your email and role. When we launch, you'll receive an exclusive invite link to create your account and automatically claim your 60-day Pro trial."
            },
            {
                question: "What's included in the free vs Pro plans?",
                answer: "Our Free plan allows for basic bid submission and viewing. The Pro plan includes advanced analytics, side-by-side bid comparison, unlimited document storage, and priority access to our verified subcontractor network."
            },
            {
                question: "How does the 60-day Pro trial work for waitlist users?",
                answer: "All waitlist users are automatically granted a 60-day Pro trial. Your trial clock only starts once you register your account after our official launch, giving you full access to every premium feature."
            }
        ]
    },
    {
        name: "Core Features",
        items: [
            {
                question: "How does real-time bid tracking work?",
                answer: "The moment a Subcontractor views or updates a bid, the GC is notified. No more 'did you get my email?' follow-ups. You see the status of every trade and every invitation in real-time."
            },
            {
                question: "Can I communicate directly with subcontractors on the platform?",
                answer: "Yes. BidForge includes a built-in real-time chat system allowing GCs and Subcontractors to discuss RFI's, scope clarifications, and project details instantly without leaving the platform."
            },
            {
                question: "How do I manage project documents?",
                answer: "Upload blueprints, spec books, and RFPs directly to your project folders. Our version control ensures that all invited subs are bidding on the most recent addenda and document sets."
            },
            {
                question: "How does the verified subcontractor network work?",
                answer: "We maintain a database of vetted subcontractors, pre-qualified based on licenses, insurance, and past performance history, making it easier for GCs to build reliable project teams."
            },
            {
                question: "How do bid comparison tools help me?",
                answer: "Our automated tools level bids side-by-side, highlighting variances in scope and pricing breakdown. This allows you to choose the best value for your project, not just the lowest price tag."
            },
            {
                question: "How do deadline reminders work?",
                answer: "Set your RFP submission deadline and BidForge handles the rest—sending automated reminders and countdowns to invited subs to ensure you get your numbers before the clock runs out."
            },
            {
                question: "How does the contract awarding process work?",
                answer: "Once you've selected a bid, you can award the contract with a single click. Both parties receive instant digital confirmation and a summary of the final bid terms to move straight into the contract phase."
            }
        ]
    },
    {
        name: "Technical Questions",
        items: [
            {
                question: "What file types can I upload?",
                answer: "We support all industry-standard formats including high-res PDFs, DWG (for viewing), XLS for pricing sheets, and various image formats for site photos."
            },
            {
                question: "How secure is my project data?",
                answer: "Security is our top priority. Your data is encrypted at rest and in transit. We use enterprise-grade security protocols to ensure your proprietary pricing and project details remain confidential."
            },
            {
                question: "Does it work on mobile devices?",
                answer: "Yes. BidForge is fully responsive. Whether you're in the office or on a job site, you can check bid status, view documents, and award contracts from any phone or tablet."
            },
            {
                question: "How do real-time notifications work?",
                answer: "You can customize your notification settings to receive updates via email, SMS, or in-app push notifications whenever there's movement on your projects."
            }
        ]
    },
    {
        name: "Billing & Plans",
        items: [
            {
                question: "What's the difference between Free and Pro plans?",
                answer: "Free is perfect for single-trade bidding and small projects. Pro is designed for high-volume GCs and growing Subs who need advanced comparison tools, team collaboration, and deeper analytics."
            },
            {
                question: "How do founders get permanent Pro access?",
                answer: "A limited number of early adopters who provide significant feedback during our beta phase will be invited to our 'Founding Member' program, which includes permanent grandfathered Pro features."
            },
            {
                question: "What happens after my trial ends?",
                answer: "At the end of your 60-day trial, you can choose to subscribe to a Pro plan or revert to the Free version. Your existing project data will remain safe and accessible regardless of your choice."
            },
            {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes. You can change your plan at any time through your account settings. Upgrades take effect immediately, while downgrades apply at the end of your current billing cycle."
            }
        ]
    },
    {
        name: "Support",
        items: [
            {
                question: "How do I get help if I have issues?",
                answer: "We offer 24/7 email support and a dedicated help center. Pro members also have access to priority chat support for urgent project needs."
            },
            {
                question: "Will there be training available?",
                answer: "Yes. Upon launch, we will provide live onboarding webinars and a library of video tutorials tailored specifically for estimators and project managers."
            },
            {
                question: "Can I invite team members?",
                answer: "Yes. At launch, Pro accounts will be able to add unlimited team members and assign specific roles to manage project access levels."
            }
        ]
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFaq = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section id="faq" className="py-24 bg-neutral-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-dark mb-4">Frequently Asked Questions</h2>
                    <p className="text-neutral-dark/60">Everything you need to know about the future of bidding.</p>
                </div>

                <div className="space-y-12">
                    {faqCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-xl font-bold text-primary mb-6 ml-1 uppercase tracking-wider">{category.name}</h3>
                            <div className="space-y-4">
                                {category.items.map((faq, faqIndex) => {
                                    const id = `${catIndex}-${faqIndex}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div key={id} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <button
                                                onClick={() => toggleFaq(id)}
                                                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-neutral-dark group"
                                            >
                                                <span className="pr-4">{faq.question}</span>
                                                <ChevronDown className={`transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180 text-primary' : 'group-hover:text-primary'}`} size={20} />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="px-6 pb-5 text-neutral-dark/70 leading-relaxed border-t border-gray-50 pt-4 mt-1">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
