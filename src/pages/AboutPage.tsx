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
} from "../data/aboutPageData";
import { Divider } from "../components/ui/Divider";
import { AnimatedNumber } from "../components/ui/AnimatedNumber";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

export function AboutPage() {
  const strategicPoints = [
    {
      title: "Bridging Policy and Execution",
      description:
        "Transforming national strategies into operational operating models that teams can implement daily.",
    },
    {
      title: "Preventing Algorithmic Harm",
      description:
        "Guarding against imported bias and ensuring AI tools deployed in public finance, healthcare, and education respect civil liberties.",
    },
    {
      title: "Sovereignty and Data Capital",
      description:
        "Treating sovereign data as a national strategic asset rather than an unmonetized byproduct.",
    },
  ];
  const stats = [
    {
      value: 54,
      suffix: "+",
      label: "NATIONS IN SCOPE",
      description:
        "Tailored for regional harmonization across AU directives and continental treaties.",
      className: "pb-8",
    },
    {
      value: 100,
      suffix: "%",
      label: "CONTEXTUALIZED",
      description:
        "Grounded in African legal, regulatory, and socio-economic frameworks.",
      className: "border-l border-white/10 pb-8 pl-8",
    },
    {
      value: 6,
      suffix: "-Tier",
      label: "FRAMEWORK™",
      description:
        "Discover, Design, Build, Implement, Enable, and Continuously Improve.",
      className: "border-t border-white/10 pt-8",
    },
    {
      value: null,
      displayValue: "AI™",
      label: "PROPRIETARY TECH",
      description:
        "Powered by GOVERNOVA AI™ for automated compliance and decision modeling.",
      className: "border-l border-t border-white/10 pt-8 pl-8",
      descriptionClass: "text-white/70",
    },
  ];
  return (
    <>
      <PageMeta
        title="About DGA"
        description="Digital Governance Africa is a Nigerian-based organisation advancing digital governance, responsible artificial intelligence and institutional transformation across Africa."
      />

      <section className="relative overflow-hidden bg-navy">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Hero Background Image"
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy/25" />
        </div>

        {/* Hero content */}
        <Container className="relative z-10 flex min-h-[680px] items-center justify-center px-6 py-20 sm:px-8 sm:py-24 lg:px-0 lg:py-28">
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
            className="mx-auto flex w-full max-w-[897px] flex-col items-center gap-4 pt-[6px] text-center"
          >
            {/* Eyebrow */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.2em]"
            >
              ABOUT DIGITAL GOVERNANCE AFRICA
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="max-w-[850px] text-center text-[36px] leading-[40px] font-extrabold tracking-[-0.8px] text-white sm:text-[48px] sm:leading-[52px] lg:text-[60px] lg:leading-[67px] lg:tracking-tight"
            >
              Shaping Trusted, Ethical & Sustainable Digital Institutions
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className=" mx-auto max-w-[760px] text-center text-[16px] leading-[25px] font-normal text-white/90 sm:max-w-[700px] sm:text-[18px] sm:leading-[28px] "
            >
              Digital Governance Africa (DGA) is a pan-African advisory and
              institutional capability initiative. We partner with national
              governments, regulatory authorities, state agencies, and prominent
              enterprise boards to design responsible AI frameworks, modern data
              governance structures, and resilient public administration systems
              tailored to the African continent.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-3"
            >
              <Button
                to="/services"
                variant="primary"
                magnetic
                className="w-full px-5 py-3 text-sm sm:w-auto"
              >
                Partner With Our Leadership
                <FiArrowRight aria-hidden size={15} />
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                className="w-full px-5 py-3 text-sm sm:w-auto"
              >
                Explore Advisory Solutions
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeadingCentered
            eyebrow="Our Foundation"
            title="Mission, Vision & Core Mandate"
            subtitle="Addressing systemic gaps between rapid technological adoption and the regulatory, legal, and operational capacities of African institutions."
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
                title="Why Governance is the Linchpin of Africa's Digital Agenda"
                subtitle="Billions are invested into digital infrastructure, broadband rollout, and government enterprise systems across the continent. Yet, up to 70% of high-level digital transformations fail to realize their intended social or operational impact."
                titleClassName="text-white"
                subtitleClassName="text-white/80"
              />

              <p className="mt-5 text-[16px] leading-relaxed text-white/80 sm:text-lg">
                The bottleneck is rarely technology itself. The true barrier is{" "}
                <strong className="font-semibold text-white">
                  institutional governance
                </strong>
                : unclear accountability lines, absence of data stewardship
                laws, inadequate executive oversight, and unstructured AI
                integration.
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

            {/* Right statistics */}
            <div className="flex-1 rounded-[25px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <h4 className="text-lg font-semibold text-white">
                  The DGA Differences
                </h4>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-8">
                {stats.map((stat) => (
                  <div key={stat.label} className={stat.className}>
                    <div className="mt-3 text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                      {stat.value !== null ? (
                        <AnimatedNumber
                          value={stat.value}
                          suffix={stat.suffix}
                        />
                      ) : (
                        stat.displayValue
                      )}
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      {stat.label}
                    </p>
                    <p className={"mt-3 text-sm leading-relaxed text-white"}>
                      {stat.description}
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
            title="Distinguished Board of Directors"
            subtitle="Guiding continental strategy, statutory oversight, and sovereign alignment across 54 African nations"
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
            eyebrow="Ethics & Values"
            title="Our Guiding Institutional Principles"
            subtitle="Every Engagement, curriculum, and technological solution we deploy is measured against four foundational tenets."
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
              title="Leadership & Multi-Disciplinary Faculty"
              subtitle="Bringing together former regulators, international jusrists,senior technologists,and enterprise governance directors."
            />
            <Button to="/programmes" variant="ghost">
              View Executive Faculty & Programmes{" "}
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
              title="Ready to Build a Trusted, Resillient & Future-Ready Institution?"
              subtitle="Partner with Digital Governance Africa to strengthen your digital governance, adopt AI
                responsibly, and build sustainable sovereign capability."
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
                Schedule a Confidential Consultation
                <FiArrowRight aria-hidden size={15} />
              </Button>

              <Button
                to="/governova"
                variant="secondary"
                className="w-full px-5 py-3 text-sm sm:w-auto"
              >
                Discover GOVERNOVA AI™
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
      <Divider className=" bg-[#1E293B]" />
    </>
  );
}
