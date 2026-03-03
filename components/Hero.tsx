"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen w-full overflow-hidden bg-[#040718]" //bg-[#020617]
        >
            {/* Grid */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-start pt-66 text-center px-6">



                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-5xl lg:text-[60px] font-extrabold text-white leading-[1.05] max-w-5xl"
        
                >
                    Engineering the Digital Core <br className="hidden md:block" />
                    of Tomorrow.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-base md:text-lg text-white/40 max-w-3xl"
                >
                    We architect high-performance software systems and cloud ecosystems that power the world's most competitive digital enterprises.
                </motion.p>
            </div>

            {/* Beam Image — Natural Ratio Controlled */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 pointer-events-none z-0">
                <Image
                    src="/blue-energy.png"
                    alt="Energy Beam"
                    width={2200}
                    height={980}
                    priority
                    className="mix-blend-screen max-w-none"
                />
            </div>

            {/* Button Centered in Beam Core */}
            <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-10">
                <a
                    href="#contact"
                    className="px-10 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                >
                    Contact us
                </a>
            </div>

            {/* Stats */}
            <div className="absolute bottom-16 w-full flex justify-center gap-16 text-center z-10">
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
                        className="flex flex-col items-center"
                    >
                        <span className="text-2xl md:text-3xl font-bold text-white">
                            {stat.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}