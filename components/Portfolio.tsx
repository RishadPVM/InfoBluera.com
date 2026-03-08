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
                {/* <motion.div
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
                            Our Standard of Excellence
                        </span>
                    </h2>
                    <p className="text-md text-white/60 max-w-2xl mx-auto">
                        Experience our transformative digital solutions crafted for growth
                    </p>
                </motion.div> */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 lg:mb-24 text-center max-w-4xl mx-auto px-4"
                >

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-widest">
                            Portfolio
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                            Our Standard of Excellence
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                        Experience our transformative digital solutions crafted to drive growth,
                        innovation, and measurable success for modern businesses.
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
                        className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 scrollbar-hide px-4 sm:px-0"
                    >
                        {PROJECTS.map((project, idx) => (
                            <Link key={project.title} href={project.link} className="relative z-0 hover:z-50 flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-auto snap-center">
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -20,
                                        scale: 1.05,
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group cursor-pointer h-full relative"
                                >
                                    {/* Main Card */}
                                    <div className="relative h-full min-h-[450px] sm:min-h-[500px] rounded-3xl overflow-hidden glass transition-all duration-500 flex flex-col group-hover:bg-white/[0.03]"
                                        style={{
                                            borderColor: hoveredIndex === idx ? `${project.color}40` : undefined,
                                            boxShadow: hoveredIndex === idx ? `0 20px 40px -10px ${project.color}20` : undefined,
                                        }}
                                    >
                                        {/* Top Image Section */}
                                        <div className="relative h-48 sm:h-56 w-full overflow-hidden transition-all duration-500">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                                            />
                                            {/* Overlay Gradient for Text Legibility */}
                                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

                                            {/* Live Indicator */}
                                            <div className="absolute top-4 right-4">
                                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                    </span>
                                                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Live</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex flex-col items-center text-center p-6 gap-3 sm:gap-4 flex-grow">
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300">
                                                    {project.title}
                                                </h4>
                                                <p className="text-[10px] sm:text-xs font-black tracking-[0.1em] uppercase"
                                                    style={{ color: project.color }}>
                                                    {project.category}
                                                </p>
                                            </div>

                                            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                                                Experience our transformative digital solution crafted for {project.title}&apos;s success.
                                            </p>

                                            {/* Action Button */}
                                            <div className="mt-auto pt-4">
                                                <motion.div
                                                    className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-primary/20 border border-primary/30 text-white transition-all duration-300 hover:bg-primary"
                                                    style={{
                                                        backgroundColor: hoveredIndex === idx ? `${project.color}30` : undefined,
                                                        borderColor: hoveredIndex === idx ? `${project.color}40` : undefined,
                                                    }}
                                                >
                                                    Learn more
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Project Accent Highlight */}
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 opacity-60 group-hover:opacity-100"
                                            style={{ backgroundColor: project.color }}
                                        />
                                    </div>

                                    {/* Hover Glow Effect (Behind Card) */}
                                    {hoveredIndex === idx && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute -inset-4 blur-2xl rounded-3xl pointer-events-none -z-10"
                                            style={{
                                                background: `radial-gradient(circle at center, ${project.color}15, transparent 70%)`,
                                            }}
                                        />
                                    )}
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
