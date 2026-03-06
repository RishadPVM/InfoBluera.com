"use client";

import {
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

/* ---------------- container animation ---------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ---------------- Magnetic Badge ---------------- */

function MagneticBadge({ text }: { text: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPos({
      x: x * 0.2,
      y: y * 0.2,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      variants={badgeVariants}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative flex items-center gap-2 px-4 md:px-5 py-2 rounded-full glass border border-white/10 text-xs md:text-sm font-medium text-white/90 shadow-lg cursor-default overflow-hidden group"
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl" />

      <CheckCircle2 className="w-4 h-4 text-accent relative z-10" />
      <span className="relative z-10">{text}</span>
    </motion.div>
  );
}

/* ---------------- Apple Word Reveal ---------------- */

function AppleTextReveal({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className="
      relative
      h-[110vh]
      md:h-[130vh]
      lg:h-[140vh]
      "
    >
      <div className="sticky top-[35%]">
        <p
          className="
          text-lg
          md:text-2xl
          lg:text-4xl
          leading-relaxed
          font-semibold
          flex flex-wrap
          justify-center
          gap-x-2 md:gap-x-3
          gap-y-2 md:gap-y-3
          max-w-4xl
          mx-auto
          text-center
        "
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.15, 1]
            );

            return (
              <motion.span
                key={i}
                style={{ opacity }}
                className="text-white"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-24 relative bg-background overflow-hidden"
    >
      {/* background glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* subtitle */}

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent font-bold tracking-[1.2px] text-xs uppercase mb-3 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Featured Work
        </motion.p>

        {/* title */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight"
        >
          Our Expertise
        </motion.h2>

        {/* short intro */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto text-white/70"
        >
          Comprehensive IT Solutions designed to accelerate growth and empower
          your digital transformation.
        </motion.p>

        {/* Apple scroll storytelling */}

        <div className="mb-16 md:mb-20">
          <AppleTextReveal
            text={`As a leading Software Development Company, we specialize in delivering end-to-end digital solutions. Our deep technical capabilities span Custom Web Development, robust Node.js Development, and comprehensive Full Stack Development that scale with your business. We engineer high-performance mobile experiences through innovative Mobile App Development and Flutter Development, ensuring seamless functionality across all platforms. Backed by highly secure Cloud Hosting (AWS), bespoke UI/UX Design, and conversion-driven E-commerce Solutions, we build SEO Optimized Websites that establish industry dominance. Partner with us for complete IT Consulting Services that transform complex challenges into lasting competitive advantages.`}
          />
        </div>

        {/* badges */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
          flex
          flex-wrap
          justify-center
          gap-3 md:gap-4
          mt-6
          "
        >
          {[
            "Custom Web Development",
            "Flutter App Development",
            "Full Stack Solutions",
            "Cloud Hosting (AWS)",
            "UI/UX Design",
            "IT Consulting Services",
          ].map((badge) => (
            <MagneticBadge key={badge} text={badge} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}