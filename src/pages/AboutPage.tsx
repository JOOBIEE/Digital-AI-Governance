import { FiArrowRight } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import aboutHeroImage from "../assets/images/abouthero-image.webp";
import { FiCheck } from "react-icons/fi";
import { Card } from "../components/ui/Card";
import { motion } from "framer-motion";
import { SectionHeadingCentered } from "../components/ui/SectionHeadingCentered";
import { Link } from "react-router-dom";
import { DIRECTORS } from "../data/directorsData";
import {
  FOUNDATION_CARDS,
  APPROACH_STEPS,
  GOVERNANCE_AREAS,
  DGA_DIFFERENCE,
} from "../data/aboutPageData";
import { Divider } from "../components/ui/Divider";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import PageHero from "../components/home/PageHero";

export function AboutPage() {
  const strategicPoints = [
    {
      title: "Turning Policy into Delivery",
      description:
        "Translate national and institutional strategies into clear decision rights, accountabilities, operating models and implementation arrangements.",
    },
    {
      title: "Managing AI-Related Risk",
      description:
        "Establish proportionate safeguards to identify and manage risks relating to bias, discrimination, privacy, security, transparency and fundamental rights.",
    },
    {
      title: "Data Sovereignty and Public Value",
      description:
        "Govern data as a strategic resource while protecting rights, strengthening stewardship and enabling appropriate access, sharing and reuse.",
    },
  ];

  return (
    <>
      <PageMeta
        title="About DGA"
        description="Digital Governance Africa is a Nigerian-based organisation advancing digital governance, responsible artificial intelligence and institutional transformation across Africa."
      />

      <PageHero
        eyebrow="ABOUT DIGITAL GOVERNANCE AFRICA"
        title="Shaping Trusted, Responsible and Resilient Digital Institutions"
        description="Digital Governance Africa (DGA) is an African-focused advisory
          and institutional capability development consultancy. We advise
          governments, regulatory authorities, public institutions and
          enterprises on digital governance, responsible AI, data governance
          and institutional transformation within African contexts."
        backgroundImage={aboutHeroImage}
        primaryAction={{
          label: "Partner With Our Leadership",
          to: "/services",
        }}
        secondaryAction={{
          label: "Explore Advisory Solutions",
          to: "/contact",
        }}
        showDivider={false}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeadingCentered
            eyebrow="Our Foundation"
            title="Purpose, Vision and Strategic Focus"
            subtitle="DGA exists to strengthen the capabilities institutions need to govern digital transformation, data and artificial intelligence responsibly within diverse African contexts."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FOUNDATION_CARDS.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal key={card.title} delayMs={Math.min(index * 100, 400)}>
                  <Card className="flex h-full flex-col !p-6 text-left">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${card.iconBg} ${card.iconColor}`}
                    >
                      <Icon aria-hidden size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {card.description}
                    </p>
                    <div className="my-6 h-px w-full bg-black/10" />
                    <p
                      className={`text-sm font-semibold ${card.statementColor}`}
                    >
                      {card.statement}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-navy py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
            {/* Left content */}
            <div className="flex-1 text-left">
              <SectionHeading
                eyebrow="THE STRATEGIC REALITY"
                title="Why Governance Matters to Africa's Digital Agenda"
                subtitle="Significant investment is being directed towards digital infrastructure, connectivity and digitally enabled public services across Africa. Technology and infrastructure are essential, but their institutional value also depends on effective governance, capable leadership and disciplined implementation."
                titleClassName="text-white"
                subtitleClassName="text-white/80"
              />

              <p className="mt-5 text-[16px] leading-relaxed text-white/80 sm:text-lg">
                Digital transformation can be constrained by unclear
                accountability, fragmented data responsibilities, limited
                executive oversight and insufficient governance of emerging
                technologies. Addressing these issues requires governance
                arrangements that connect strategic ambition with operational
                delivery.
              </p>

              {/* Supporting points */}
              <div>
                <div className="mt-6 space-y-4">
                  {strategicPoints.map((point) => (
                    <div key={point.title} className="flex items-start gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <FiCheck aria-hidden size={16} strokeWidth={2.5} />
                      </span>

                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {point.title}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: The DGA Difference */}
            <div className="flex-1 rounded-[25px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  The DGA Difference
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-0">
                {DGA_DIFFERENCE.map((item) => (
                  <div key={item.heading} className={item.className}>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-gold">
                      {item.tag}
                    </p>
                    <h4 className="mt-2 text-lg font-bold text-white">
                      {item.heading}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white  py-20 sm:py-24">
        <Container>
          <SectionHeadingCentered
            eyebrow="Governance & Stewardship"
            title="Board of Directors"
            subtitle="Providing strategic direction, governance oversight and stewardship in support of DGA's mission and responsible growth."
          />

          <div className="mt-12 grid px-12 gap-6 sm:grid-cols-2">
            {DIRECTORS.map((person, index) => (
              <Reveal key={person.slug} delayMs={Math.min(index * 100, 400)}>
                <Link to={`/directors/${person.slug}`} className="block h-full">
                  <Card className="group h-full overflow-hidden !p-0">
                    <div className="relative overflow-hidden rounded-t-[25px]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />

                      <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-white">
                        {person.location}
                      </span>
                    </div>

                    <div className="p-6 text-left">
                      <h3 className="text-xl font-bold text-navy">
                        {person.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-gold">
                        {person.position}
                      </p>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-20 sm:py-24">
        <Container>
          <SectionHeadingCentered
            eyebrow="Principles & Values"
            title="Our Guiding Principles"
            subtitle="Our advisory work, executive programmes and developing digital solutions are guided by four institutional principles."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH_STEPS.map((step, index) => (
              <Reveal key={step.number} delayMs={Math.min(index * 100, 400)}>
                <Card className="flex h-full flex-col !p-6">
                  <span className="text-sm font-bold tracking-[0.15em] text-gold">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-navy">
                    {step.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Multidisciplinary Governance Expertise"
              subtitle="DGA brings together expertise across governance, law, regulation, technology and institutional leadership to address complex digital, data and AI-related challenges."
            />
            <Button to="/programmes" variant="ghost">
              View Executive Programmes{" "}
              <FiArrowRight aria-hidden size={16} />
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GOVERNANCE_AREAS.map((area, index) => (
              <Reveal key={area.title} delayMs={Math.min(index * 100, 400)}>
                <Card className="overflow-hidden !p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-[25px]">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="block h-auto w-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-left">
                    <h4 className="text-[12px] font-normal text-gold">
                      {area.tag}
                    </h4>
                    <h3 className="text-xl font-bold text-navy">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm  leading-relaxed text-ink-muted">
                      {area.description1}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {area.description2}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 sm:py-24 ">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeadingCentered
              eyebrow="Join Our Network"
              title="Ready to Strengthen Your Institution's Digital Governance?"
              subtitle="Speak with Digital Governance Africa about strengthening governance, developing institutional capability and adopting artificial intelligence responsibly."
              className="max-w-6xl [&_h2]:text-white [&_p:last-child]:mx-auto [&_p:last-child]:max-w-2xl [& _p:last-child]:text-white/80  sm:[&_h2]:whitespace-nowrap"
              subtitleClassName="text-white/70"
            />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            >
              <Button
                to="/contact"
                variant="primary"
                magnetic
                className="w-full px-5 py-3 text-sm sm:w-auto"
              >
                Start a Conversation
                <FiArrowRight aria-hidden size={15} />
              </Button>

              <Button
                to="/governova"
                variant="secondary"
                className="w-full px-5 py-3 text-sm sm:w-auto"
              >
                Explore GOVERNOVA AI™
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
      <Divider className=" bg-[#1E293B]" />
    </>
  );
}