import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type CardVariant = "light" | "dark";

const VARIANT_BASE_CLASSES: Record<CardVariant, string> = {
  light: "bg-white shadow-sm",
  dark: "bg-navy-slate",
};

const VARIANT_HOVER_CLASSES: Record<CardVariant, string> = {
  light: "hover:shadow-lg hover:shadow-black/10",
  dark: "hover:shadow-lg hover:shadow-gold/20 hover:ring-1 hover:ring-gold/40",
};

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "light",
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8 } : undefined}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "rounded-card p-6 overflow-hidden",
        VARIANT_BASE_CLASSES[variant],
        hoverEffect && VARIANT_HOVER_CLASSES[variant],
        className,
      )}
      {...props}
    />
  );
}
