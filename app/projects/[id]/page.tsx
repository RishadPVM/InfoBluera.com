"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { PROJECTS } from "@/lib/projects";

export default function ProjectPage() {
    const params = useParams();
    const projectId = parseInt(params.id as string);
    const project = PROJECTS.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#040718] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link href="/#portfolio" className="text-blue-400 hover:text-blue-300">
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#040718] text-white">
            {/* Back Button */}
            <div className="sticky top-0 z-40 bg-[#040718]/80 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link href="/#portfolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group">
                        <motion.span
                            animate={{ x: [0, -4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </motion.span>
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040718]" />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <div>
                        <p className="text-sm font-bold tracking-wider uppercase mb-2" style={{ color: project.color }}>
                            {project.category}
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg text-white/60">Project Year: {project.year}</p>
                    </div>
                </motion.div>

                {/* Quick Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl"
                >
                    <p className="text-white/80 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* Long Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Project Overview</h2>
                    <div className="text-white/80 whitespace-pre-line leading-relaxed">
                        {project.longDescription}
                    </div>
                </motion.div>

                {/* Challenges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Challenges</h2>
                    <div className="grid gap-3">
                        {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                                <span className="text-red-400 font-bold flex-shrink-0">•</span>
                                <p className="text-white/80">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Results */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Results & Impact</h2>
                    <div className="grid gap-3">
                        {project.results.map((result, idx) => (
                            <div key={idx} className="flex gap-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30">
                                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                                <p className="text-white/80">{result}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg font-medium text-white"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 pt-8 border-t border-slate-700/50"
                >
                    <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    >
                        <ExternalLink className="w-5 h-5" />
                        View Project
                    </motion.a>
                    <Link
                        href="/#portfolio"
                        className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
                    >
                        Back to Portfolio
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
