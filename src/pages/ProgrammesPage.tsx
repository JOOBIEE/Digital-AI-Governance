import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProgramCard } from "../components/cards/ProgramCard";
import { InquiryForm } from "../components/forms/InquiryForm";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { cn } from "../lib/cn";
import { PROGRAMS, PROGRAMME_CATEGORIES } from "../data/programs";
import program1 from "../assets/images/programmes_1.webp";
import program2 from "../assets/images/programmes_2.webp";
import legalImage from "../assets/images/Expertise-image-3.webp";

type ProgrammeCategory = (typeof PROGRAMME_CATEGORIES)[number];

const CATEGORY_META: Record<ProgrammeCategory, { image: string; blurb: string }> = {
  "Government and Public Sector": {
    image: program1,
    blurb:
      "Programmes for public-sector leaders governing digital transformation, data and national digital infrastructure.",
  },
  "Corporate Governance": {
    image: program2,
    blurb:
      "Programmes for boards, executives and assurance leaders overseeing digital, data and AI.",
  },
  "Legal and Compliance": {
    image: legalImage,
    blurb:
      "Programmes for legal and compliance teams navigating AI, regulation and digital change.",
  },
};

export function ProgrammesPage() {
  const [active, setActive] = useState<ProgrammeCategory | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function toggle(category: ProgrammeCategory) {
    setActive((current) => (current === category ? null : category));
  }

  // Bring the opened panel into view (important on mobile).
  useEffect(() => {
    if (!active) return undefined;
    const timer = setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
    return () => clearTimeout(timer);
  }, [active]);

  // Esc closes the panel.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <PageMeta
        title="Programmes"
        description="Executive programmes for digital governance and institutional transformation across government, corporate governance, and legal and compliance."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Programmes"
            title="Executive Programmes for Digital Governance and Institutional Transformation"
            subtitle="Our programmes equip leaders with the knowledge and practical tools to navigate digital change, strengthen governance and support responsible innovation. Each programme is designed to translate executive learning into relevant institutional action."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="text-sm text-ink-muted">
            Select a programme area to view its programmes.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {PROGRAMME_CATEGORIES.map((category, index) => {
              const meta = CATEGORY_META[category];
              const isActive = active === category;
              const count = PROGRAMS.filter(
                (program) => program.category === category,
              ).length;

              return (
                <Reveal key={category} delayMs={staggerDelay(index)}>
                  <button
                    type="button"
                    onClick={() => toggle(category)}
                    aria-expanded={isActive}
                    aria-controls="programme-panel"
                    className={cn(
                      "group relative block h-[360px] w-full cursor-pointer overflow-hidden rounded-3xl text-left shadow-lg outline-none transition-all duration-500 ease-out sm:h-[420px]",
                      "hover:-translate-y-2 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4",
                      "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                      isActive
                        ? "-translate-y-2 shadow-2xl ring-2 ring-gold ring-offset-4"
                        : "ring-1 ring-black/5",
                      active !== null && !isActive && "opacity-70 hover:opacity-100",
                    )}
                  >
                    <img
                      src={meta.image}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                          0{index + 1}
                        </span>
                        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {count} programmes
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold leading-tight text-white sm:text-[28px]">
                          {category}
                        </h3>

                        <p
                          className={cn(
                            "mt-3 max-w-xs text-sm leading-relaxed text-white/80 transition-all duration-500",
                            "md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
                            isActive && "md:translate-y-0 md:opacity-100",
                          )}
                        >
                          {meta.blurb}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                          {isActive ? "Close" : "View programmes"}
                          {isActive ? (
                            <FiX aria-hidden size={16} />
                          ) : (
                            <FiArrowRight
                              aria-hidden
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          )}
                        </span>
                      </div>
                    </div>

                    <span
                      aria-hidden
                      className={cn(
                        "absolute bottom-0 left-0 h-1 bg-gold transition-all duration-500",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </button>
                </Reveal>
              );
            })}
          </div>

          <AnimatePresence initial={false}>
            {active && (
              <motion.div
                key="programme-panel"
                id="programme-panel"
                ref={panelRef}
                role="region"
                aria-label={`${active} programmes`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-28 overflow-hidden"
              >
                <div className="pt-8">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl bg-navy p-6 sm:p-10"
                  >
                    <img
                      src={CATEGORY_META[active].image}
                      alt=""
                      aria-hidden
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                            Programmes
                          </p>
                          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {active}
                          </h2>
                          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                            {CATEGORY_META[active].blurb}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActive(null)}
                          aria-label="Close programmes"
                          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-gold hover:text-gold"
                        >
                          <FiX aria-hidden size={18} />
                        </button>
                      </div>

                      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {PROGRAMS.filter(
                          (program) => program.category === active,
                        ).map((program, index) => (
                          <motion.div
                            key={program.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: Math.min(index * 0.08, 0.4),
                              ease: "easeOut",
                            }}
                          >
                            <ProgramCard program={program} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      <section className="border-t border-line bg-navy py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Tailored Organisational Programmes"
            title="Designed Around Your Institution"
            subtitle="Programmes can be adapted to reflect your institution's mandate, sector, leadership audience, strategic priorities and transformation objectives."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
        </Container>
      </section>

      <section className="bg-navy pb-20">
        <Container className="mx-auto max-w-xl">
          <InquiryForm
            variant="programme"
            heading="Request a Programme Proposal"
          />
        </Container>
      </section>
    </>
  );
}