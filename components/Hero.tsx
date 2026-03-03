"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-20"
        >
            {/* 1. Background Grid & Glows */}
            <div className="absolute inset-0 z-10 pointer-events-none text-white">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* 2. Content Container */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
                <motion.div style={{ y: y1, opacity }}>
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-5xl"
                    >
                        Engineering the Digital Core <br /> of Tomorrow.
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-lg text-white/40 max-w-3xl mb-12 leading-relaxed mx-auto"
                    >
                        We architect high-performance software systems and cloud ecosystems that power the world&apos;s most competitive digital enterprises.
                    </motion.p>

                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-16 md:mb-24"
                    >
                        <a
                            href="#contact"
                            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            Contact us
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* 3. Main Attraction: Blue Energy Image (Full Width) */}
            <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center z-20 -mt-10 md:-mt-20">
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
                        className="object-contain md:object-cover mix-blend-screen scale-110"
                        priority
                    />
                </motion.div>
            </div>

            {/* 4. Stats Row (Simplified) */}
            <div className="relative z-30 w-full max-w-5xl mx-auto px-6 mt-12 md:mt-24 mb-16 md:mb-20">
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-12 md:gap-4">
                    {[
                        { label: "High-Performance", value: "10ms" },
                        { label: "Military-Grade", value: "E2EE" },
                        { label: "Full-Scaling", value: "24/7" },
                        { label: "Global Reach", value: "Tier-4" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
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
        </section>
    );
}
