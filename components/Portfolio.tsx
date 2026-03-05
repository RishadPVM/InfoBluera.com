"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
    {
        title: "Niska",
        category: "Delivery & Inventory Management",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
        color: "#FACC15",
        gradient: "from-yellow-500/30 to-orange-500/30",
        link: "/niska",
        badge: "Live",
    },
    {
        title: "Perfect Tradelinks",
        category: "Hardware Loyalty Rewards App",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        color: "#10B981",
        gradient: "from-green-500/30 to-emerald-500/30",
        link: "/perfect-tradelinks",
        badge: "Live",
    },
    {
        title: "Yadava",
        category: "Milk Delivery Management",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
        color: "#F59E0B",
        gradient: "from-orange-500/30 to-red-500/30",
        link: "/yadava",
        badge: "Live",
    },
    {
        title: "Hira Ayurvedic",
        category: "Ayurvedic Hospital Website",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        color: "#06B6D4",
        gradient: "from-cyan-500/30 to-blue-500/30",
        link: "/hira-ayurvedic",
        badge: "Live",
    },
    {
        title: "CityHubs",
        category: "City Community Platform",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        color: "#A855F7",
        gradient: "from-purple-500/30 to-pink-500/30",
        link: "/cityhubs",
        badge: "Live",
    },
];

export default function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="portfolio" className="py-24 overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary-light/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-accent uppercase tracking-widest">Portfolio</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                            Projects That
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent">
                            Made Impact
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Experience our transformative digital solutions crafted for growth
                    </p>
                </motion.div>

                {/* Featured Case Study Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 relative group cursor-pointer"
                >
                    <Link href="/case-study">
                        <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Case Study"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/50 w-fit">
                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        <span className="text-xs font-bold text-accent">CASE STUDY</span>
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
                                        Enterprise Dashboard
                                    </h3>
                                    <p className="text-white/80 mb-6 max-w-2xl hidden sm:block">
                                        Transforming legacy systems into modern, efficient solutions
                                    </p>
                                    <div className="flex items-center gap-3 text-white font-semibold group/link">
                                        Read Full Case Study
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover/link:bg-accent group-hover/link:translate-x-1 transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Projects Grid */}
                <div className="mb-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
                    >
                        {PROJECTS.map((project, idx) => (
                            <Link key={project.title} href={project.link}>
                                <motion.div
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group cursor-pointer h-full relative"
                                >
                                    {/* Main Card */}
                                    <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 transition-all duration-500"
                                        style={{
                                            borderColor: hoveredIndex === idx ? `${project.color}40` : undefined,
                                            backgroundColor: hoveredIndex === idx ? `${project.color}08` : undefined,
                                        }}
                                    >
                                        {/* Image Section */}
                                        <div className="relative h-1/2 overflow-hidden bg-gradient-to-br from-black/30 to-black/50">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-125 transition-transform duration-700"
                                            />
                                            
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-500" />

                                            {/* Badge */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                className="absolute top-3 right-3"
                                            >
                                                <div className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/40 text-white backdrop-blur-md">
                                                    {project.badge}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="relative h-1/2 p-6 flex flex-col justify-between">
                                            <div>
                                                <motion.p
                                                    initial={{ opacity: 0.6 }}
                                                    whileHover={{ opacity: 1 }}
                                                    className="text-xs font-black tracking-widest uppercase mb-3 transition-colors duration-300"
                                                    style={{ color: project.color }}
                                                >
                                                    {project.category.substring(0, 20)}...
                                                </motion.p>
                                                <motion.h4
                                                    initial={{ opacity: 0.9 }}
                                                    whileHover={{ opacity: 1 }}
                                                    className="text-xl sm:text-2xl font-black text-white leading-tight mb-2 transition-all duration-300"
                                                >
                                                    {project.title}
                                                </motion.h4>
                                            </div>

                                            {/* Bottom Action */}
                                            <motion.div
                                                initial={{ opacity: 0.5 }}
                                                whileHover={{ opacity: 1 }}
                                                className="flex items-center justify-between group/btn"
                                            >
                                                <span className="text-xs font-semibold text-white/60 group-hover/btn:text-white transition-colors">
                                                    Explore
                                                </span>
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 45 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                                                    style={{
                                                        borderColor: project.color,
                                                        backgroundColor: `${project.color}15`,
                                                    }}
                                                >
                                                    <ArrowUpRight className="w-4 h-4" style={{ color: project.color }} />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredIndex === idx ? 0.5 : 0 }}
                                            className="absolute -inset-0.5 blur-xl rounded-2xl pointer-events-none -z-10"
                                            style={{
                                                background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center py-12"
                >
                    <p className="text-white/70 mb-6">Want to see more?</p>
                    <Link href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-primary-light text-black font-bold hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group">
                        Get In Touch
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
