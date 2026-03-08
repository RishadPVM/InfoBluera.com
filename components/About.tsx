"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, ShieldCheck } from "lucide-react";
import Image from "next/image";

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
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-bold tracking-[1.2px] text-caption uppercase mb-2"
          >
            Who We Are
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            About Us
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-stretch">

          {/* LEFT MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl flex items-center lg:col-span-3
  hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: "#050B23" }}
          >

            {/* Top Right Glow */}
            <Image
              src="/lellipse.png"
              alt="glow"
              width={400}
              height={400}
              className="absolute -top-20 -right-20 opacity-100 "
            />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl mb-6 text-white font-bold">
                Empowering Businesses with Next-Gen Technology
              </h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                As a leading Software Development Company, we specialize in
                building premium Digital Solutions for Businesses.
              </p>

              <p className="text-white/90 leading-relaxed">
                We deliver robust Full Stack Development that aligns with your
                strategic goals and accelerates growth. Our team excels in
                Custom Web Development leveraging modern Next.js Development
                for lightning-fast frontends and powerful Node.js Backend
                Development for scalable architectures.
              </p>
            </div>

          </motion.div>


          {/* RIGHT VALUE CARDS */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-4">

            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.15,
                }}
                className="relative overflow-hidden glass rounded-2xl p-6 flex items-center gap-4 
                hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: "#050B23" }}
              >

                {/* ICON */}
                <div className="p-3 rounded-xl bg-primary/10 text-primary-light">
                  <value.icon className="w-6 h-6" />
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-1">
                    {value.title}
                  </h4>
                  <p className="text-[13px] text-caption">
                    {value.subtitle}
                  </p>
                </div>

                {/* DECORATIVE SHAPE INSIDE CARD */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none opacity-100">
                  <Image
                    src="/ellipse.png"
                    alt="decorative shape"
                    fill
                    className="object-contain"
                  />
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}