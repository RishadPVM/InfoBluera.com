"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-[#4F46E5] px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 block">{children}</span>
        </motion.button>
    );
}

export function GlassButton({ children, className, ...props }: GradientButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-text-primary backdrop-blur-md transition-colors hover:bg-white/10",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
