import { useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { SERVICES } from "../data/services";
import servicesHero from "../assets/images/Services_top_hero.webp";
import { ImageWithOverlay } from "../components/ui/ImageOverlay";
import { cn } from "../lib/cn";

export function ServicesPage() {
  const total = SERVICES.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const activeService = SERVICES[activeIndex];

  function goTo(nextIndex: number, nextDirection: 1 | -1) {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + total) % total);
  }

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
      <section className="bg-white py-12 sm:py-10">
        <Container className="px-0 sm:px-6">
          <Reveal>
            <div className="relative">
              {/* Previous button */}
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1, -1)}
                aria-label="Previous service"
                className="absolute -left-4.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors hover:border-gold hover:text-gold sm:-left-5.5 sm:h-11 sm:w-11"
              >
                <FiChevronLeft aria-hidden size={18} />
              </button>

              {/* Slider */}
              <div className="relative w-full overflow-hidden">
                <motion.div
                  key={activeService.slug}
                  initial={{
                    x: direction === 1 ? "100%" : "-100%",
                  }}
                  animate={{
                    x: "0%",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="w-full"
                >
                  <Card
                    variant="dark"
                    hoverEffect={false}
                    className="grid w-full gap-5 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1fr_1.3fr]"
                  >
                    <div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold sm:h-11 sm:w-11">
                        <activeService.icon aria-hidden size={20} />
                      </span>

                      <h2 className="mt-3 text-lg font-semibold text-white sm:mt-4 sm:text-xl">
                        {activeService.title}
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {activeService.summary}
                      </p>
                    </div>

                    <div className="grid gap-5 border-t border-white/10 pt-5 sm:gap-6 sm:pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
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

                      <div className="rounded-lg bg-gold/10 p-5 sm:p-8">
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
              </div>

              {/* Next button */}
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1, 1)}
                aria-label="Next service"
                className="absolute -right-[18px] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors hover:border-gold hover:text-gold sm:-right-[22px] sm:h-11 sm:w-11"
              >
                <FiChevronRight aria-hidden size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-5 flex justify-center gap-2 sm:mt-6">
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