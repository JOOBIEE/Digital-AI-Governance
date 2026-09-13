import { cn } from "../../lib/cn";

interface SectionHeadingCenteredProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeadingCentered({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingCenteredProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
