"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
        }
    }
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function Expertise() {
    return (
        <section id="expertise" className="py-24 relative bg-background overflow-hidden">
            {/* Background Glows for Premium Vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Header Section */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-accent font-bold tracking-[1.2px] text-caption uppercase mb-3 flex items-center justify-center gap-2"
                >
                    <Sparkles className="w-4 h-4" />
                    Featured Work
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                    className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
                >
                    Our Expertise
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="text-body-large mb-12 max-w-2xl mx-auto text-white/70"
                >
                    Comprehensive IT Solutions designed to accelerate growth and empower your digital transformation.
                </motion.p>

                {/* SEO Optimized Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="glass p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative mb-12 text-left group hover:border-white/10 transition-colors duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-white/80 leading-relaxed text-lg relative z-10">
                        As a leading <strong className="text-white font-semibold">Software Development Company</strong>, we specialize in delivering end-to-end digital solutions. Our deep technical capabilities span <strong className="text-white font-semibold">Custom Web Development</strong>, robust <strong className="text-white font-semibold">Node.js Development</strong>, and comprehensive <strong className="text-white font-semibold">Full Stack Development</strong> that scale with your business. We engineer high-performance mobile experiences through innovative <strong className="text-white font-semibold">Mobile App Development</strong> and <strong className="text-white font-semibold">Flutter Development</strong>, ensuring seamless functionality across all platforms. Backed by highly secure <strong className="text-white font-semibold">Cloud Hosting (AWS)</strong>, bespoke <strong className="text-white font-semibold">UI/UX Design</strong>, and conversion-driven <strong className="text-white font-semibold">E-commerce Solutions</strong>, we build <strong className="text-white font-semibold">SEO Optimized Websites</strong> that establish industry dominance. Partner with us for complete <strong className="text-white font-semibold">IT Consulting Services</strong> that transform complex challenges into lasting competitive advantages.
                    </p>
                </motion.div>

                {/* Feature Highlight Badges */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4"
                >
                    {[
                        "Custom Web Development",
                        "Flutter App Development",
                        "Full Stack Solutions",
                        "Cloud Hosting (AWS)",
                        "UI/UX Design",
                        "IT Consulting Services"
                    ].map((badge) => (
                        <motion.div
                            key={badge}
                            variants={badgeVariants}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium text-white/90 shadow-lg"
                        >
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            {badge}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
