"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function NiskaDetails() {
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
            {/* Back Button */}
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

            {/* Background Animated Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-6xl mx-auto px-6 py-32"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Niska
                    </h1>
                    <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">
                        Delivery & Inventory Management Mobile Application
                    </p>
                    <div className="h-1 w-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </motion.div>

                {/* Description Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-white">Description</h2>
                    <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                        <p>
                            Niska is a mobile application developed to simplify delivery operations and inventory management for retail brands. The platform enables efficient handling of stock updates, billing processes, and shop location management through a single mobile interface.
                        </p>
                        <p>
                            Built using Flutter for a seamless cross-platform experience and Firebase for real-time data storage and notifications, the application allows businesses to track stock movements, calculate product pricing, and manage delivery-related information efficiently.
                        </p>
                        <p>
                            The system also supports an admin dashboard that provides centralized monitoring of inventory updates, shop details, and operational activities.
                        </p>
                    </div>
                </motion.div>

                {/* Case Study Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-12 text-white border-b border-blue-500/30 pb-4">
                        Case Study
                    </h2>

                    {/* Problem Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-sm">⚠</span>
                            Problem
                        </h3>
                        <div className="pl-11 space-y-4 text-white/80 leading-relaxed text-lg">
                            <p>
                                Retail distribution teams often face difficulties managing stock updates, billing, and shop information using manual or disconnected systems. This leads to delays in operations, inaccurate stock records, and limited visibility of delivery activities.
                            </p>
                            <p>
                                A centralized digital solution was required to simplify stock tracking, billing, and shop management while improving communication between field staff and administrators.
                            </p>
                        </div>
                    </div>

                    {/* Solution Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-sm">✓</span>
                            Solution
                        </h3>
                        <div className="pl-11 space-y-4 text-white/80 leading-relaxed text-lg">
                            <p>
                                Niska was developed as a mobile-based system to digitize and streamline delivery support operations. The application integrates inventory management, billing, and shop location tracking into a single platform, allowing teams to manage daily operations more efficiently.
                            </p>
                            <p>
                                Using Firebase for real-time database management and notifications ensures that updates are instantly synchronized across the system, enabling faster and more reliable business processes.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Key Features Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Automated price calculation and billing system",
                            "Real-time stock update management",
                            "Shop location tracking",
                            "Push notifications for operational updates",
                            "Admin dashboard for monitoring activities",
                            "Cloud-based data management"
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-white/90">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white">Technologies Used</h2>
                    <div className="flex flex-wrap gap-4">
                        {[
                            "Flutter",
                            "Dart",
                            "Firebase Firestore",
                            "Firebase Cloud Messaging"
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg font-semibold text-white hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div variants={itemVariants} className="mt-20 pt-12 border-t border-blue-500/20">
                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                        >
                            View Live Project
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
