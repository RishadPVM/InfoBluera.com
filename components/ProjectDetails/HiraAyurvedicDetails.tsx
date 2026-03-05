"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function HiraAyurvedicDetails() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#040718] to-[#0a0f2e] text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-8 left-8 z-50"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </Link>
            </motion.div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-6xl mx-auto px-6 py-32"
            >
                <motion.div variants={itemVariants} className="mb-16">
                    <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                        Hira Ayurvedic Hospital
                    </h1>
                    <p className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-6">
                        Informational Website for Ayurvedic Hospital Services
                    </p>
                    <div className="h-1 w-40 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-white">Description</h2>
                    <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                        <p>
                            Hira Ayurvedic Hospital is a website developed to provide patients and visitors with essential information about the hospital, its treatments, and available services. The platform acts as a digital presence for the hospital, allowing users to easily explore details about doctors, consultation timings, treatment services, and the hospital location.
                        </p>
                        <p>
                            The website is built using Flutter to deliver a modern, responsive interface that works smoothly across devices. All information is managed locally within the application, making the website lightweight and efficient while ensuring quick access to important hospital details.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-12 text-white border-b border-emerald-500/30 pb-4">
                        Case Study
                    </h2>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-sm">⚠</span>
                            Problem
                        </h3>
                        <div className="pl-11 space-y-4 text-white/80 leading-relaxed text-lg">
                            <p>
                                Many small and medium healthcare providers lack a proper online platform to present their services and provide essential information to patients. Without a website, patients often struggle to find details such as doctor availability, treatment services, and hospital location.
                            </p>
                            <p>
                                A simple and accessible digital platform was needed to improve visibility and make hospital information easily available to the public.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-sm">✓</span>
                            Solution
                        </h3>
                        <div className="pl-11 space-y-4 text-white/80 leading-relaxed text-lg">
                            <p>
                                The Hira Ayurvedic Hospital website was developed as an informational platform where users can quickly access details about the hospital, its services, and doctor schedules. The system organizes key information into a clean and user-friendly interface, making navigation easy for visitors.
                            </p>
                            <p>
                                By using Flutter with locally stored data, the website provides a fast and reliable browsing experience without requiring a backend database.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Hospital information and introduction",
                            "Detailed service listings",
                            "Doctor profiles and consultation timings",
                            "Hospital location and contact details",
                            "Clean and responsive user interface",
                            "Fast performance using locally managed data"
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 hover:border-teal-500/40 transition-all duration-300"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-white/90">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white">Technologies Used</h2>
                    <div className="flex flex-wrap gap-4">
                        {["Flutter", "Dart", "Local Data Management"].map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-lg font-semibold text-white hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-20 pt-12 border-t border-emerald-500/20">
                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                        >
                            View Live Project
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
