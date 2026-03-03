"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Energy Beam */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] md:w-[160%] lg:w-[140%] h-[500px] md:h-[650px] pointer-events-none z-0">
        <Image
          src="/blue-energy.png"
          alt="Energy Beam"
          fill
          priority
          className="object-cover mix-blend-screen"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white tracking-tight leading-[1.05]"
        >
          Engineering the Digital Core <br className="hidden md:block" />
          of Tomorrow.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 md:mt-8 text-base md:text-lg text-white/40 max-w-3xl leading-relaxed"
        >
          We architect high-performance software systems and cloud ecosystems that power the world&apos;s most competitive digital enterprises.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 md:mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Contact us
          </a>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 md:mt-24 w-full max-w-4xl">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 text-center">
            {[
              { label: "High-Performance", value: "10ms" },
              { label: "Military-Grade", value: "E2EE" },
              { label: "Full-Scaling", value: "24/7" },
              { label: "Global Reach", value: "Tier-4" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}