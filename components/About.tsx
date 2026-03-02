"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, ShieldCheck } from "lucide-react";

const CORE_VALUES = [
    {
        icon: Rocket,
        title: "High Performance",
        subtitle: "Optimized for speed and efficiency.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        subtitle: "Bank-grade security standards.",
    },
    {
        icon: Layers,
        title: "Scalable Architecture",
        subtitle: "Built to grow with your business.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-[1.2px] text-caption uppercase mb-2"
                    >
                        Who We Are
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        About Us
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-stretch">

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 glass-dark rounded-3xl p-8 md:p-12 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl md:text-3xl mb-6 text-white font-bold">Empowering Businesses with Next-Gen Technology</h3>
                        <p className="text-body-large mb-6 text-white/80 leading-relaxed">
                            As a leading <strong className="text-white font-semibold">Software Development Company</strong>, we specialize in building premium <strong className="text-white font-semibold">Digital Solutions for Businesses</strong>. We deliver robust <strong className="text-white font-semibold">Full Stack Development</strong> that aligns with your strategic goals and accelerates growth.
                        </p>
                        <p className="text-body text-white/70 leading-relaxed">
                            Our team excels in <strong className="text-white font-semibold">Custom Web Development</strong>—leveraging modern <strong className="text-white font-semibold">Next.js Development</strong> for lightning-fast frontends and powerful <strong className="text-white font-semibold">Node.js Backend Development</strong> for scalable architectures. Whether you need seamless <strong className="text-white font-semibold">Mobile App Development</strong> or secure infrastructure powered by <strong className="text-white font-semibold">Cloud Hosting (AWS)</strong>, we transform complex ideas into reliable, user-friendly digital products.
                        </p>
                    </motion.div>

                    {/* Core Values */}
                    <div className="lg:col-span-2 flex flex-col justify-center gap-4">
                        {CORE_VALUES.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors"
                                style={{ backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary-light">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-text-primary mb-1">{value.title}</h4>
                                    <p className="text-caption text-[13px]">{value.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
