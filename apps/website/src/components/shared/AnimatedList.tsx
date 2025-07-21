"use client";

import type { IconType } from "react-icons";
import { motion } from "framer-motion";

// Simple cn utility function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface AnimatedListItem {
  icon: IconType;
  text: string;
  description?: string;
}

interface AnimatedListProps {
  title?: string;
  items: AnimatedListItem[];
  variant?: "light" | "colored" | "outline";
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ title, items, variant = "colored" }) => {
  // Define styles for each variant
  const variants = {
    light: {
      icon: {
        background: "bg-white/80",
        border: "border border-gray-300",
        shadow: "shadow-sm",
        iconColor: "text-gray-600"
      },
      wire: "bg-gradient-to-b from-gray-400 to-gray-200",
      pulse: "border-gray-400/50",
      spark: "bg-gray-400",
      text: "text-slate-900",
      description: "text-slate-800",
      title: "text-slate-900",
      underline: "from-gray-300/50 to-transparent"
    },
    colored: {
      icon: {
        background: "bg-gradient-to-br from-primary to-amber-600",
        border: "",
        shadow: "shadow-md",
        iconColor: "text-white/80"
      },
      wire: "bg-gradient-to-b from-primary/50 to-amber-400/50",
      pulse: "border-primary/50",
      spark: "bg-amber-300",
      text: "text-slate-900",
      description: "text-slate-800",
      title: "text-slate-900",
      underline: "from-primary/20 via-amber-500/10 to-transparent"
    },
    outline: {
      icon: {
        background: "bg-transparent",
        border: "border border-primary",
        shadow: "shadow-sm",
        iconColor: "text-primary"
      },
      wire: "bg-primary/50",
      pulse: "border-primary/70",
      spark: "bg-amber-300",
      text: "text-slate-900",
      description: "text-slate-800",
      title: "text-slate-900",
      underline: "from-primary/30 to-transparent"
    }
  };

  const selectedVariant = variants[variant];

  return (
    <div className="space-y-8">
      {title && <h3 className={cn("text-sm uppercase tracking-wider font-semibold", selectedVariant.title)}>{title}</h3>}
      <div className="space-y-8 max-w-3xl">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          >
            <div className="relative flex-shrink-0">
              <motion.div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center relative",
                  selectedVariant.icon.background,
                  selectedVariant.icon.border,
                  selectedVariant.icon.shadow
                )}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
              >
                <item.icon className={cn("w-4 h-4", selectedVariant.icon.iconColor)} />
                <motion.div
                  className={cn("absolute inset-0 rounded-full border-2", selectedVariant.pulse)}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    delay: 0.8 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn("absolute w-1 h-1 rounded-full", selectedVariant.spark)}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      x: [0, i % 2 === 0 ? -3 : 3, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4 + index * 0.3,
                      ease: "circOut",
                    }}
                  />
                ))}
              </motion.div>
              {index < items.length - 1 && (
                <motion.div
                  className={cn("absolute left-4 top-8 w-px h-12 bg-gradient-to-b to-transparent", selectedVariant.wire)}
                  initial={{ height: 0 }}
                  animate={{ height: "3rem" }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                />
              )}
            </div>
            <div className="flex-1 pt-0.5">
              <p className={cn("font-semibold text-lg leading-relaxed", selectedVariant.text)}>{item.text}</p>
              {item.description && (
                <p className={cn("mt-1 text-base leading-relaxed", selectedVariant.description)}>{item.description}</p>
              )}
              <motion.div
                className={cn("mt-3 h-px bg-gradient-to-r", selectedVariant.underline)}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 + index * 0.15 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
