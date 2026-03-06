"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function CityHubsDetails() {
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
                className="fixed top-4 left-4 md:top-8 md:left-8 z-50"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group text-sm md:text-base"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </Link>
            </motion.div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32"
            >
                <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        CityHubs
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-purple-400 font-semibold mb-6">
                        City Information & Local Business Community Platform
                    </p>
                    <div className="h-1 w-24 md:w-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Description</h2>
                    <div className="space-y-4 md:space-y-6 text-white/80 leading-relaxed text-base md:text-lg">
                        <p>
                            CityHubs is a London-based web platform designed to connect city residents, visitors, and local businesses through a centralized digital hub. The platform provides users with information about cities, upcoming events, and local activities while also offering businesses a space to promote their services and interact with the community.
                        </p>
                        <p>
                            The website allows businesses to create profiles, publish posts, and form groups where users can engage with content related to their city. By combining city information, events, and business listings in one platform, CityHubs helps strengthen local community engagement and improves the visibility of businesses across different cities.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white border-b border-purple-500/30 pb-4">
                        Case Study
                    </h2>

                    <div className="mb-8 md:mb-12">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-red-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-sm">⚠</span>
                            Problem
                        </h3>
                        <div className="pl-11 space-y-3 md:space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
                            <p>
                                Local businesses and community activities are often scattered across multiple platforms, making it difficult for users to discover events, services, or businesses within a city. Small businesses also struggle to gain visibility without expensive marketing channels.
                            </p>
                            <p>
                                A unified platform was needed where city information, local events, and business promotions could be easily accessed by residents and visitors.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 md:mb-12">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-400 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-sm">✓</span>
                            Solution
                        </h3>
                        <div className="pl-11 space-y-3 md:space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
                            <p>
                                CityHubs was developed as a digital community platform that centralizes city-related information and provides businesses with tools to showcase their services. The system allows businesses to create profiles, share posts, and interact with users through groups, while visitors can explore city information, discover events, and browse local business listings.
                            </p>
                            <p>
                                This structure encourages community interaction while also helping businesses reach a wider audience within their cities.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {[
                            "City information and event listings",
                            "Business profile creation and management",
                            "Business listing across multiple cities",
                            "Post sharing for businesses and community updates",
                            "Group creation and community interaction",
                            "Public browsing of businesses and city content"
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-white/90 text-sm md:text-base">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {["Flutter", "Web Technologies", "Backend Integration"].map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg font-semibold text-white hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 text-sm md:text-base"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-12 md:mt-20 pt-12 border-t border-purple-500/20">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                        <motion.a
                            href="https://github.com/InfoBluera"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base text-center"
                        >
                            View Live Project
                        </motion.a>
                        <motion.a
                            href="https://wa.me/918129948257"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 md:px-8 md:py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 text-sm md:text-base text-center"
                        >
                            Contact Us
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
