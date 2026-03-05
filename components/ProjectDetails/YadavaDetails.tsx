"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function YadavaDetails() {
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
                    className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
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
                    <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        Yadava
                    </h1>
                    <p className="text-2xl md:text-3xl text-orange-400 font-semibold mb-6">
                        Milk Delivery & Distribution Management Mobile Application
                    </p>
                    <div className="h-1 w-40 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-white">Description</h2>
                    <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                        <p>
                            Yadava is a mobile application developed to support milk distribution and delivery operations for a dairy business. The application helps streamline daily delivery activities by managing stock updates, billing, and shop information through a simple mobile interface.
                        </p>
                        <p>
                            Built using Flutter for a smooth and responsive mobile experience and powered by Firebase for real-time data management, the system enables delivery teams to efficiently track milk distribution, update stock records, and manage billing processes. The platform improves operational efficiency and reduces manual tracking errors in dairy supply management.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-12 text-white border-b border-orange-500/30 pb-4">
                        Case Study
                    </h2>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-sm">⚠</span>
                            Problem
                        </h3>
                        <div className="pl-11 space-y-4 text-white/80 leading-relaxed text-lg">
                            <p>
                                Milk distribution businesses often rely on manual records for tracking deliveries, managing stock, and generating bills. This approach can lead to inaccurate data, delays in updates, and difficulty in monitoring daily operations.
                            </p>
                            <p>
                                A digital solution was required to simplify the delivery workflow and provide better visibility into stock levels and distribution activities.
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
                                The Yadava mobile application was developed to digitize milk delivery operations and improve the management of distribution processes. The system allows delivery teams to update stock, manage billing, and monitor shop locations directly from the mobile application.
                            </p>
                            <p>
                                With Firebase handling real-time database synchronization and notifications, the application ensures that operational data is updated instantly and accessible whenever needed.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Milk delivery management",
                            "Stock update and tracking",
                            "Billing and price calculation",
                            "Shop location management",
                            "Real-time database updates",
                            "Notification support for operational alerts"
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 hover:border-amber-500/40 transition-all duration-300"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center flex-shrink-0">
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
                        {["Flutter", "Dart", "Firebase"].map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-lg font-semibold text-white hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-20 pt-12 border-t border-orange-500/20">
                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                        >
                            View Live Project
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
