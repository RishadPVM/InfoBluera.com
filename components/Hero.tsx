"use client";

import { GlassButton, GradientButton } from "@/components/ui/Buttons";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the entire 3D canvas with SSR disabled
// This is REQUIRED because @react-three/fiber uses WebGL APIs unavailable on the server
const ThreeCanvas = dynamic(() => import("./3d/ThreeCanvas"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <Code2 className="w-16 h-16 text-primary/50 animate-pulse" />
        </div>
    ),
});

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
        >
            {/* Background Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

                <div className="flex flex-col items-start text-left pt-10 lg:pt-0">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(37,99,235,0.1)] mb-8"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Code2 className="w-4 h-4 text-accent" />
                        </motion.div>
                        <span className="text-xs md:text-sm font-bold tracking-widest text-primary-light uppercase">
                            Premium IT Solutions
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mb-6 font-sans text-5xl md:text-6xl lg:text-7xl"
                    >
                        Building the <br />
                        <span className="text-gradient">Digital Future</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mb-12 text-body-large md:text-xl max-w-xl"
                    >
                        We craft high-performance websites, mobile apps, and enterprise software that drives growth. Trusted by industry leaders.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <GradientButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                            Start Your Project
                        </GradientButton>
                        <GlassButton onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
                            View Portfolio
                        </GlassButton>
                    </motion.div>

                </div>

                {/* 3D Canvas Area */}
                <motion.div
                    className="h-[400px] lg:h-[600px] relative w-full flex items-center justify-center pointer-events-none lg:pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    {/* Ambient Glow */}
                    <motion.div
                        className="absolute w-[250px] h-[250px] bg-primary/20 rounded-full blur-[60px]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />

                    <div className="w-full h-full relative z-10">
                        <ThreeCanvas />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
