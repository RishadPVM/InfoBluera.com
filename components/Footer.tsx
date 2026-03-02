"use client";

import { GradientButton } from "@/components/ui/Buttons";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SOCIAL_LINKS = [
    { icon: FaLinkedin, href: "https://linkedin.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaGithub, href: "https://github.com" },
];

export default function Footer() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsLoading(true);

        try {
            // Create form data matching Google Forms structure
            const data = new URLSearchParams();
            data.append("entry.2129506232", formData.name);
            data.append("entry.1366067459", formData.email);
            data.append("entry.2139908626", formData.message);

            await fetch(
                "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDX1jbHc21dhRyY6zLpIwhfqaMUACd89RiQSYyPARlYk1bAw/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: data.toString(),
                }
            );

            // no-cors always returns an opaque response, assuming success.
            setFormData({ name: "", email: "", message: "" });
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);

        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <footer id="contact" className="py-24 bg-surface relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                <Code2 className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-4xl text-text-primary m-0">InfoBluera</h2>
                        </div>

                        <p className="text-body-large mb-12 max-w-md">
                            Empowering businesses with cutting-edge digital solutions. We build scalable, high-performance applications tailored to your needs.
                        </p>

                        <div className="space-y-6">
                            <a href="#" className="group flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-colors">
                                <MapPin className="w-6 h-6 text-primary-light" />
                                <div>
                                    <h4 className="text-caption font-bold uppercase tracking-wider mb-1">Headquarters</h4>
                                    <p className="text-white font-medium">Kerala, India</p>
                                </div>
                            </a>

                            <a href="mailto:codelinehelpdesk@gmail.com" className="group flex items-center gap-6 p-4 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                                <Mail className="w-6 h-6 text-text-secondary group-hover:text-primary-light transition-colors" />
                                <div>
                                    <h4 className="text-caption font-bold uppercase tracking-wider mb-1">Email Us</h4>
                                    <p className="text-white font-medium">codelinehelpdesk@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919847865571" className="group flex items-center gap-6 p-4 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                                <Phone className="w-6 h-6 text-text-secondary group-hover:text-primary-light transition-colors" />
                                <div>
                                    <h4 className="text-caption font-bold uppercase tracking-wider mb-1">Call Us</h4>
                                    <p className="text-white font-medium">+91 98478 65571</p>
                                </div>
                            </a>

                            <a href="https://wa.me/918129948257" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-4 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                                <FaWhatsapp className="w-6 h-6 text-text-secondary group-hover:text-primary-light transition-colors" />
                                <div>
                                    <h4 className="text-caption font-bold uppercase tracking-wider mb-1">WhatsApp</h4>
                                    <p className="text-white font-medium">+91 81299 48257</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-dark rounded-[2rem] p-8 md:p-12 border border-white/5 h-full relative">

                            {showSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 z-20 glass-dark rounded-[2rem] flex flex-col items-center justify-center p-8 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-success" />
                                    </div>
                                    <h3 className="text-3xl mb-4">Enquiry Sent!</h3>
                                    <p className="text-body-large text-text-secondary mb-8">
                                        Thank you for reaching out. We will get back to you shortly.
                                    </p>
                                    <GradientButton onClick={() => setShowSuccess(false)} className="w-full">
                                        Close
                                    </GradientButton>
                                </motion.div>
                            ) : null}

                            <h3 className="text-3xl mb-2">Ready to Start?</h3>
                            <p className="text-body text-text-tertiary mb-10">
                                Send us a message and we&apos;ll get back to you shortly.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-black/20 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />

                                <input
                                    type="text"
                                    required
                                    placeholder="Email / Phone"
                                    className="w-full bg-black/20 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />

                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project"
                                    className="w-full bg-black/20 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />

                                <GradientButton
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full mt-4 disabled:opacity-50"
                                >
                                    {isLoading ? "Sending..." : "Send Enquiry"}
                                </GradientButton>
                            </form>
                        </div>
                    </motion.div>

                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-caption">
                        © {new Date().getFullYear()} InfoBluera. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {SOCIAL_LINKS.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary-light transition-colors text-text-secondary"
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
