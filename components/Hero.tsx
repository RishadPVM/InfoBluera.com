"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// Dynamically import the entire 3D canvas with SSR disabled
const ThreeCanvas = dynamic(() => import("./3d/ThreeCanvas"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <Code2 className="w-16 h-16 text-primary/50 animate-pulse" />
        </div>
    ),
});

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Background Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#020617] pt-20"
        >
            {/* 1. Technical Grid & Glows Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"
                    style={{ x: mouseX, y: mouseY }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

                {/* Radial Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            </div>

            {/* 2. Hero Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Content */}
                <motion.div
                    style={{ y: y1, opacity }}
                    className="flex flex-col items-start text-left pt-10 lg:pt-0"
                >
                    {/* Tech Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[3px] text-white/60 uppercase">
                            Enterprise Tech Solutions
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="mb-8 leading-[1] tracking-tighter text-6xl md:text-8xl font-black">
                            Engineering <br />
                            <span className="text-gradient">Digital Core</span>
                        </h1>

                        <p className="mb-12 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-medium">
                            We architect high-performance software systems and cloud ecosystems that dominate the competitive global IT landscape.
                        </p>
                    </motion.div>

                    {/* Tech Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-8 md:gap-12 items-start"
                    >
                        {[
                            { label: "Cloud Regions", value: "24+" },
                            { label: "Security", value: "E2EE" },
                            { label: "Performance", value: "10ms" },
                            { label: "Uptime", value: "99.99%" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-start border-l border-white/10 pl-4">
                                <span className="text-2xl font-black text-white leading-none mb-1 ">{stat.value}</span>
                                <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column: 3D Logo */}
                <motion.div
                    className="h-[400px] lg:h-[600px] relative w-full flex items-center justify-center pointer-events-none lg:pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                >
                    <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-3xl rounded-full" />
                    <div className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <ThreeCanvas />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[9px] uppercase tracking-[6px] text-white/20 font-bold">Initiate Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-white/20" />
                </motion.div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        </section>
    );
}
