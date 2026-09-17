import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

interface PageHeroAction {
  label: string;
  to: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;

  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;

  showDivider?: boolean;
  metaText?: string;

  minHeightClassName?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  primaryAction,
  secondaryAction,
  showDivider = false,
  metaText,
  minHeightClassName = "min-h-[680px]",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/25" />
      </div>

      {/* Hero content */}
      <Container
        className={`relative z-10 flex items-center justify-center py-24 sm:py-28 ${minHeightClassName}`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {description}
          </motion.p>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-nowrap gap-2 sm:gap-3"
            >
              {primaryAction && (
                <Button
                  to={primaryAction.to}
                  variant={primaryAction.variant ?? "primary"}
                  magnetic
                  className="px-3 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
                >
                  {primaryAction.label}
                  {primaryAction.icon ?? <FiArrowRight aria-hidden size={15} />}
                </Button>
              )}

              {secondaryAction && (
                <Button
                  to={secondaryAction.to}
                  variant={secondaryAction.variant ?? "secondary"}
                  className="px-3 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </motion.div>
          )}

          {/* Optional divider and meta text */}
          {showDivider && metaText && (
            <>
              <div className="my-8 h-px w-24 bg-white/20" />

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-white/65"
              >
                {metaText}
              </motion.p>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
