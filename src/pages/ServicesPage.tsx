import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { SERVICES } from "../data/services";
import servicesHero from "../assets/images/Services_top_hero.webp";
import { ImageWithOverlay } from "../components/ui/ImageOverlay";
import { cn } from "../lib/cn";

const SLIDE_GAP_PX = 24;

export function ServicesPage() {
  const total = SERVICES.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function goTo(nextIndex: number, nextDirection: number) {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + total) % total);
  }

  const activeService = SERVICES[activeIndex];

  return (
    <>
      <PageMeta
        title="Services"
        description="Digital Governance Africa's services span AI governance advisory, digital transformation, data governance, governance risk and compliance, executive education, and research and policy advisory."
      />

      {/* Hero */}
      <section className="border-b border-line bg-surface-alt py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="Services"
            title="Governance-Led Solutions for a Changing Digital World"
            subtitle="We help organisations strengthen governance, build institutional capability and adopt digital technologies responsibly."
          />

          <ImageWithOverlay
            src={servicesHero}
            alt="Services hero image"
            className="rounded-lg"
          />
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="relative flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1, -1)}
                aria-label="Previous service"
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <FiChevronLeft aria-hidden size={20} />
              </button>

              <div className="relative grid flex-1 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeService.slug}
                    custom={direction}
                    initial={{
                      x:
                        direction > 0
                          ? `calc(100% + ${SLIDE_GAP_PX}px)`
                          : `calc(-100% - ${SLIDE_GAP_PX}px)`,
                    }}
                    animate={{ x: "0%" }}
                    exit={{
                      x:
                        direction > 0
                          ? `calc(-100% - ${SLIDE_GAP_PX}px)`
                          : `calc(100% + ${SLIDE_GAP_PX}px)`,
                    }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    className="col-start-1 row-start-1"
                  >
                    <Card
                      variant="dark"
                      hoverEffect={false}
                      className="grid gap-8 lg:grid-cols-[1fr_1.3fr]"
                    >
                      <div>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                          <activeService.icon aria-hidden size={20} />
                        </span>

                        <h2 className="mt-4 text-xl font-semibold text-white">
                          {activeService.title}
                        </h2>

                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {activeService.summary}
                        </p>
                      </div>

                      <div className="grid gap-6 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                            Services may include
                          </p>

                          <ul className="mt-3 grid gap-1.5 text-sm text-white/70 sm:grid-cols-2">
                            {activeService.capabilities.map((capability) => (
                              <li key={capability}>{capability}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-lg bg-gold/10 p-8">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                            Outcome
                          </p>

                          <p className="mt-1.5 text-sm leading-relaxed text-white">
                            {activeService.outcome}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1, 1)}
                aria-label="Next service"
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <FiChevronRight aria-hidden size={20} />
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {SERVICES.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                  aria-label={`Go to ${service.title}`}
                  className={cn(
                    "h-2 w-2 cursor-pointer rounded-full transition-colors",
                    index === activeIndex ? "bg-gold" : "bg-line",
                  )}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
