import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProgramCard } from "../components/cards/ProgramCard";
import { InquiryForm } from "../components/forms/InquiryForm";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { PROGRAMS, PROGRAMME_CATEGORIES } from "../data/programs";
import program1 from "../assets/images/programmes_1.webp";
import program2 from "../assets/images/programmes_2.webp";
import { motion } from "framer-motion";
import { ImageWithOverlay } from "../components/ui/ImageOverlay";

const CATEGORY_HEADER_IMAGES: Partial<Record<(typeof PROGRAMME_CATEGORIES)[number], string>> = {
  "Government and Public Sector": program1,
  "Corporate Governance": program2,
};

export function ProgrammesPage() {
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

      {PROGRAMME_CATEGORIES.map((category, sectionIndex) => {
        const headerImage = CATEGORY_HEADER_IMAGES[category];
        const isNavy = category === "Legal and Compliance";

        return (
          <section
            key={category}
            className={
              isNavy
                ? "border-y border-line bg-navy py-20"
                : sectionIndex % 2 === 1
                  ? "border-t border-line bg-surface-alt py-20"
                  : "py-20"
            }
          >
            <Container>
              {isNavy ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Programmes
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {category}
                  </h2>
                </div>
              ) : (
                <SectionHeading title={category} />
              )}

              {headerImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  className="group mt-6 overflow-hidden rounded-3xl"
                >
                  <ImageWithOverlay
                    src={headerImage}
                    alt={category}
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </motion.div>
              )}

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROGRAMS.filter(
                  (program) => program.category === category,
                ).map((program, index) => (
                  <Reveal key={program.slug} delayMs={staggerDelay(index)}>
                    <ProgramCard program={program} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="border-t border-line py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Tailored Organisational Programmes"
            title="Designed Around Your Institution"
            subtitle="Programmes can be adapted to reflect your institution's mandate, sector, leadership audience, strategic priorities and transformation objectives."
          />
        </Container>
      </section>

      <section className="pb-20">
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