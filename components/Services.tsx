"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Cloud,
    Monitor,
    Palette,
    Rocket,
    Smartphone
} from "lucide-react";

const SERVICES = [
    {
        title: "Mobile App Development",
        description: "Native-quality cross-platform apps using Flutter. We build for Android, iOS, and Web with a single codebase, ensuring high performance and rapid delivery.",
        icon: Smartphone,
        color: "group-hover:text-blue-500",
        bg: "group-hover:bg-blue-500/20",
        border: "group-hover:border-blue-500/30",
        shadow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    },
    {
        title: "Web Application Development",
        description: "Modern, responsive, and scalable web solutions. From complex enterprise dashboards to stunning landing pages, we deliver web experiences that convert.",
        icon: Monitor,
        color: "group-hover:text-purple-500",
        bg: "group-hover:bg-purple-500/20",
        border: "group-hover:border-purple-500/30",
        shadow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    },
    {
        title: "AI & Automation Solutions",
        description: "Intelligent chatbots and workflow automation. Leverage the power of AI to optimize your business processes and enhance user engagement.",
        icon: BrainCircuit,
        color: "group-hover:text-teal-500",
        bg: "group-hover:bg-teal-500/20",
        border: "group-hover:border-teal-500/30",
        shadow: "group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]",
    },
    {
        title: "Cloud & Infrastructure",
        description: "Secure cloud deployment and server management on AWS. We ensure your applications are always online, fast, and protected against threats.",
        icon: Cloud,
        color: "group-hover:text-orange-500",
        bg: "group-hover:bg-orange-500/20",
        border: "group-hover:border-orange-500/30",
        shadow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    },
    {
        title: "UI/UX Design",
        description: "User-centric design that captivates. We blend aesthetics with usability to create intuitive interfaces that users love to interact with.",
        icon: Palette,
        color: "group-hover:text-pink-500",
        bg: "group-hover:bg-pink-500/20",
        border: "group-hover:border-pink-500/30",
        shadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    },
    {
        title: "MVP Development",
        description: "Rapid prototyping and MVP development for startups. Launch your idea fast with a solid, scalable foundation.",
        icon: Rocket,
        color: "group-hover:text-red-500",
        bg: "group-hover:bg-red-500/20",
        border: "group-hover:border-red-500/30",
        shadow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-surface/30">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-accent font-bold tracking-[1.2px] text-caption uppercase mb-3"
                    >
                        Our Expertise
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="mb-6"
                    >
                        Comprehensive IT Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-body-large"
                    >
                        We deliver end-to-end digital services, moving from concept to deployment with precision and speed.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            whileHover={{ y: -12 }}
                            className="group relative h-full"
                        >
                            <div
                                className={cn(
                                    "h-full p-8 rounded-3xl glass transition-all duration-300 flex flex-col items-start gap-6 border border-white/5",
                                    service.bg.replace("group-hover:", "hover:"),
                                    service.border.replace("group-hover:", "hover:")
                                )}
                            >

                                {/* Icon Container */}
                                <div
                                    className={cn(
                                        "p-4 rounded-2xl bg-white/5 transition-all duration-300",
                                        service.bg,
                                        service.shadow
                                    )}
                                >
                                    <service.icon
                                        className={cn(
                                            "w-8 h-8 text-white/70 transition-colors duration-300",
                                            service.color
                                        )}
                                    />
                                </div>

                                {/* Content */}
                                <h4 className="text-xl group-hover:text-white transition-colors">{service.title}</h4>
                                <p className="text-body flex-grow text-white/60">{service.description}</p>

                                {/* Footer Action */}
                                <div className="flex items-center gap-2 mt-4 font-semibold text-white/50 group-hover:text-white/90 transition-colors">
                                    <span className={cn("text-sm", service.color)}>Learn More</span>
                                    <motion.span
                                        className={service.color}
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        →
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
