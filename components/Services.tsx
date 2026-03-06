"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Monitor,
  Palette,
  Rocket,
  Smartphone,
} from "lucide-react";

const SERVICES = [
  {
    title: "Mobile App Development",
    description:
      "Native-quality cross-platform apps using Flutter.",
    details: `
We build high-performance mobile applications using Flutter that run seamlessly on Android, iOS, and Web from a single codebase.

Our mobile solutions include:

• Scalable clean architecture
• Firebase / Supabase integration
• REST & GraphQL API integrations
• Real-time chat and notifications
• Payment gateway integrations
• Production ready CI/CD deployment

We focus on performance, maintainability, and beautiful UI/UX.
`,
    icon: Smartphone,
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/20",
    border: "group-hover:border-blue-500/30",
    shadow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Web Application Development",
    description:
      "Modern, responsive, and scalable web solutions.",
    details: `
We create high-performance modern web applications using the latest technologies.

Our web solutions include:

• Next.js & React applications
• Enterprise dashboards
• SaaS platforms
• Landing pages that convert
• SEO optimized architecture
• Fast global deployment

Every project focuses on performance, scalability, and long-term maintainability.
`,
    icon: Monitor,
    color: "group-hover:text-purple-500",
    bg: "group-hover:bg-purple-500/20",
    border: "group-hover:border-purple-500/30",
    shadow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Intelligent chatbots and workflow automation.",
    details: `
We design AI powered systems that automate business workflows and improve user experiences.

Our AI services include:

• AI chatbots
• AI assistants
• GPT integrations
• Automation workflows
• Smart recommendation engines
• Business analytics AI tools

These systems help companies reduce manual work and scale operations faster.
`,
    icon: BrainCircuit,
    color: "group-hover:text-teal-500",
    bg: "group-hover:bg-teal-500/20",
    border: "group-hover:border-teal-500/30",
    shadow: "group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure cloud deployment and server management.",
    details: `
We manage cloud infrastructure and deployments that keep your applications secure and fast.

Our cloud services include:

• AWS architecture
• CI/CD pipelines
• Docker & containerization
• Cloud monitoring
• Auto scaling systems
• Security hardening

Your systems stay reliable, scalable, and secure.
`,
    icon: Cloud,
    color: "group-hover:text-orange-500",
    bg: "group-hover:bg-orange-500/20",
    border: "group-hover:border-orange-500/30",
    shadow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric design that captivates.",
    details: `
We create intuitive, beautiful, and highly usable digital interfaces.

Our design process includes:

• UX research
• Wireframing
• High fidelity UI design
• Interaction design
• Design systems
• Usability testing

Great design increases user engagement and product adoption.
`,
    icon: Palette,
    color: "group-hover:text-pink-500",
    bg: "group-hover:bg-pink-500/20",
    border: "group-hover:border-pink-500/30",
    shadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
  },
  {
    title: "MVP Development",
    description:
      "Rapid prototyping for startups.",
    details: `
We help startups launch their product ideas quickly with a scalable MVP.

Our MVP services include:

• Product strategy
• Rapid development
• Scalable architecture
• Startup friendly pricing
• Investor ready demo builds

Launch faster, validate your idea, and grow with confidence.
`,
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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <section id="services" className="py-24 relative bg-surface/30">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-accent font-bold tracking-[1.2px] text-caption uppercase mb-3">
            Our Expertise
          </p>

          <h2 className="mb-6">Comprehensive IT Solutions</h2>

          <p className="text-body-large">
            We deliver end-to-end digital services, moving from concept to deployment with precision and speed.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              <div
                className={cn(
                  "h-full p-8 rounded-3xl glass transition-all duration-300 flex flex-col gap-6 border border-white/5",
                  service.bg.replace("group-hover:", "hover:"),
                  service.border.replace("group-hover:", "hover:")
                )}
              >
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

                <h4 className="text-xl group-hover:text-white transition-colors">
                  {service.title}
                </h4>

                <p className="text-white/60 flex-grow">
                  {service.description}
                </p>

                {/* Learn More */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-2 mt-4 font-semibold text-white/50 group-hover:text-white/90 transition-colors"
                >
                  <span className={cn("text-sm", service.color)}>
                    Learn More
                  </span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl w-full glass rounded-3xl p-10 border border-white/10 relative"
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 text-white/50 hover:text-white text-xl"
                >
                  ✕
                </button>

                <div className="mb-6">
                  <selectedService.icon className="w-12 h-12 text-accent" />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-white/70 mb-6">
                  {selectedService.description}
                </p>

                <p className="text-white/60 whitespace-pre-line leading-relaxed">
                  {selectedService.details}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}