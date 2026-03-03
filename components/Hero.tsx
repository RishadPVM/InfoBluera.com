"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Background Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Parallax transforms for content depth
    const textX = useTransform(mouseX, [-40, 40], [-8, 8]);
    const textY = useTransform(mouseY, [-40, 40], [-8, 8]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 80);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 80);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-10"
        >
            {/* 1. Technical Grid & Horizon Glow - Match Mockup Exactly */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Massive Horizon Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60" />
                <div className="absolute -bottom-[25vh] left-1/2 -translate-x-1/2 w-[140vw] h-[60vh] rounded-[100%] bg-primary/30 blur-[120px]" />
            </div>



            {/* 2. Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-12 w-full text-center flex flex-col items-center">
                <motion.div
                    style={{ y: y1, opacity, x: textX }}
                    className="flex flex-col items-center"
                >
                    {/* Tech Badge - Match Mockup styling */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-16"
                    >
                        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                            Next-Gen IT Infrastructure
                        </span>
                    </motion.div>

                    {/* Headline - Branded Split with Flame Effect */}
                    <motion.h1
                        style={{ y: textY }}
                        className="text-7xl md:text-[120px] font-black mb-10 flex items-center justify-center tracking-tight"
                    >
                        <span className="text-white">Info</span>
                        <span
                            className="text-flame ml-2"
                            data-text="Bluera"
                        >
                            Bluera
                        </span>
                    </motion.h1>

                    {/* Subheadline - Premium Bold Match Mockup */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-5xl tracking-tight leading-[1.1]"
                    >
                        Engineering the Digital Core <br className="hidden md:block" /> of Tomorrow.
                    </motion.h2>

                    {/* Secondary Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-base md:text-lg text-white/40 max-w-3xl mb-16 leading-relaxed"
                    >
                        We architect high-performance software systems and cloud ecosystems that power
                        the world&apos;s most competitive digital enterprises.
                    </motion.p>

                    {/* Centered Tech Stats - Match Mockup Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="w-full max-w-4xl px-8 py-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-wrap items-center justify-between gap-8 md:gap-4"
                    >
                        {[
                            { label: "High-Performance", value: "10ms" },
                            { label: "Military-Grade", value: "E2EE" },
                            { label: "Full-Scaling", value: "24/7" },
                            { label: "Global Reach", value: "Tier-4" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center flex-1 min-w-[120px]">
                                <span className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tighter">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Mockup Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-10 flex items-center gap-3 z-30"
            >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <ChevronDown className="w-5 h-5 text-white/20" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Initiate</span>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-30" />
        </section>
    );
}
