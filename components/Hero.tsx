"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[100dvh] w-full flex flex-col items-center justify-start overflow-hidden bg-[#020617] pt-24 md:pt-32"
        >
            {/* 1. Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* 2. Main Heading (Not Stacked) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mb-12 md:mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-[85px] font-bold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto"
                >
                    Engineering the Digital Core <br className="hidden md:block" /> of Tomorrow.
                </motion.h1>
            </div>

            {/* 3. Stacked Section: Image + Overlaid Content */}
            <div className="relative w-full flex flex-col items-center justify-center">
                {/* Full-Width Energy Image Layer */}
                <div className="absolute inset-0 w-full h-[600px] md:h-[800px] -translate-y-1/4 pointer-events-none z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/blue-energy.png"
                            alt="Blue Energy"
                            fill
                            className="object-contain md:object-cover mix-blend-screen scale-110 md:scale-125"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Overlaid Content Layer */}
                <div className="relative z-10 w-full flex flex-col items-center text-center px-6">
                    {/* Subheading (Stacked) */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-xl text-white/40 max-w-3xl mb-12 leading-relaxed"
                    >
                        We architect high-performance software systems and cloud ecosystems that power the world&apos;s most competitive digital enterprises.
                    </motion.p>

                    {/* Contact Button (Stacked) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-24 md:mb-32"
                    >
                        <a
                            href="#contact"
                            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            Contact us
                        </a>
                    </motion.div>

                    {/* Stats Row (Stacked) */}
                    <div className="w-full max-w-5xl mx-auto mt-12 md:mt-20">
                        <div className="flex flex-wrap items-center justify-center md:justify-between gap-12 md:gap-4">
                            {[
                                { label: "High-Performance", value: "10ms" },
                                { label: "Military-Grade", value: "E2EE" },
                                { label: "Full-Scaling", value: "24/7" },
                                { label: "Global Reach", value: "Tier-4" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                                    className="flex flex-col items-center min-w-[140px]"
                                >
                                    <span className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tighter">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
