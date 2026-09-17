import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "../../lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-ink-muted sm:text-lg",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
