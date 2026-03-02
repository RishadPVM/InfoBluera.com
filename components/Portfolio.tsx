"use client";

import { GlassButton } from "@/components/ui/Buttons";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Niska",
        category: "E-Commerce Platform",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
        color: "#FACC15",
    },
    {
        title: "CityHub",
        category: "Smart City Dashboard",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
        color: "#3B82F6",
    },
    {
        title: "Skill App",
        category: "EdTech Mobile App",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        color: "#10B981",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-bold tracking-[1.2px] text-caption uppercase mb-3 flex items-center gap-2 justify-center md:justify-start"
                        >
                            <Star className="w-4 h-4" />
                            Featured Work
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Our Standard of Excellence
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <GlassButton className="px-6 py-3 py-3 px-6 pb-3 pt-3">View All Projects</GlassButton>
                    </motion.div>
                </div>

                {/* Featured Project Card (Standard Excellence Card equivalent) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden mb-16 group"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                        alt="Standard of Excellence"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Showcase Project</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Enterprise Dashboard Redesign
                        </h3>
                        <p className="text-white/80 text-body mb-8 max-w-2xl hidden sm:block">
                            A comprehensive overhaul of a legacy enterprise system, focusing on data visualization, user efficiency, and modern aesthetic principles.
                        </p>

                        <button className="flex items-center gap-3 text-white font-semibold group/btn hover:text-primary-light transition-colors">
                            Read Case Study
                            <span className="p-2 bg-white/20 rounded-full group-hover/btn:bg-primary/40 group-hover/btn:translate-x-1 transition-all">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Horizontal Project Slider */}
                <div className="flex overflow-x-auto pb-12 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer"
                        >
                            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(to top, ${project.color}40, transparent)` }}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold tracking-wider mb-2" style={{ color: project.color }}>
                                        {project.category.toUpperCase()}
                                    </p>
                                    <h4 className="text-2xl group-hover:text-white transition-colors">
                                        {project.title}
                                    </h4>
                                </div>
                                <div
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-black transition-all duration-300"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Hide Scrollbar CSS injection */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
        </section>
    );
}
