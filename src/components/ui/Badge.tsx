import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const TONE_CLASSES = {
  navy: "bg-navy/10 text-navy",
  gold: "bg-gold/10 text-gold",
  white: "bg-white/10 text-white",
} as const;

export function Badge({
  children,
  tone = "navy",
}: {
  children: ReactNode;
  tone?: keyof typeof TONE_CLASSES;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        TONE_CLASSES[tone],
      )}
    >
      {children}
    </span>
  );
}
