import { FiArrowRight } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { VALUES } from "../data/team";
import aboutHeroImage from "../assets/images/abouthero-image.webp";
import { FiZap, FiEye, FiTrendingUp, FiCheck } from "react-icons/fi";
import { Card } from "../components/ui/Card";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeadingCentered } from "../components/ui/SectionHeadingCentered";
import honJustice from "../assets/images/hon-justice.webp";
import obeleTom from "../assets/images/Obele-tom.webp";

export function AboutPage() {
  const LEADERSHIP = [
    {
      name: "Obele Tom-George Akinniranye",
      position: "Co-Founder and Director Legal, Digital Governace Africa",
      location: "Nigeria/Continental",
      image: obeleTom,
    },
    {
      name: "Jacqueline Evbodaghe",
      position: "Co-Founder and Programme Director, Digital Governace Africa",
      location: "Kenya/East Africa",
      image: honJustice,
    },
  ];
  function AnimatedNumber({
    value,
    suffix = "",
  }: {
    value: number;
    suffix?: string;
  }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 0.5,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easedProgress * value));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }, [isInView, value]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }
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
              className="max-w-[850px] text-[36px] leading-[40px] font-extrabold tracking-[-0.8px] text-white sm:text-[48px] sm:leading-[52px] sm:tracking-tight lg:text-[60px] lg:leading-[60px]"
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
              className="max-w-[760px] text-[16px] leading-[25px] font-normal text-white/90 sm:text-[18px] sm:leading-[28px]"
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
          {/* Section heading */}
          <SectionHeadingCentered
            eyebrow="Our Foundation"
            title="Mission, Vision & Core Mandate"
            subtitle="Addressing systemic gaps between rapid technological adoption and the regulatory, legal, and operational capacities of African institutions."
          />

          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <Card className="!p-6 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-gold/10 text-gold">
                <FiZap aria-hidden size={20} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-ink">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                To equip African institutions with contextualized frameworks,
                ethical technology standards, and institutional competence to
                lead sovereign, trusted, and inclusive digital transformations.
              </p>

              <div className="my-6 h-px w-full bg-black/10" />

              <p className="text-sm font-semibold text-gold">
                Sovereign & Resilient Future
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="!p-6 text-left">
              <div className="flex h-11 w-11 items-center justify-center  rounded-[12px] bg-[#2563EB]/10 text-[#2563EB]">
                <FiEye aria-hidden size={20} className="text-[#2563EB]" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-ink">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                An Africa where digital transformation is anchored in
                accountability, where AI serves socioeconomic equity, and where
                data sovereign assets foster sustainable economic prosperity.
              </p>

              <div className="my-6 h-px w-full bg-black/10" />

              <p className="text-sm font-semibold text-[#2563EB]">
                Responsible AI & Data Equity
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="!p-6 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#059669]/10 text-[#059669]">
                <FiTrendingUp
                  aria-hidden
                  size={20}
                  className="text-[#059669]"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-ink">
                African Realism
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                We reject superficial boilerplate policies imported from abroad.
                We develop frameworks built from the lived realities, legal
                nuances, and operational infrastructure of African
                organizations.
              </p>

              <div className="my-6 h-px w-full bg-black/10" />

              <p className="text-sm font-semibold text-[#059669]">
                Context- Driven Methodologies
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-navy py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
            {/* Left content */}
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                THE STRATEGIC REALITY
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Why Governance is the Linchpin of Africa's Digital Agenda
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed text-[#94A3B8] sm:text-lg">
                Billions are invested into digital infrastructure, broadband
                rollout, and government enterprise systems across the continent.
                Yet, up to 70% of high-level digital transformations fail to
                realize their intended social or operational impact.
              </p>

              <p className="mt-5 text-[16px] leading-relaxed text-[#94A3B8] sm:text-lg">
                The bottleneck is rarely technology itself. The true barrier is{" "}
                <strong className="font-semibold text-[#94A3B8]">
                  institutional governance
                </strong>
                : unclear accountability lines, absence of data stewardship
                laws, inadequate executive oversight, and unstructured AI
                integration.
              </p>

              {/* Supporting points */}
              <div className="">
                <div className="mt-6 space-y-4">
                  {/* Point 1 */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <FiCheck aria-hidden size={16} strokeWidth={2.5} />
                    </span>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Bridging Policy and Execution
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                        Transforming national strategies into operational
                        operating models that teams can implement daily.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <FiCheck aria-hidden size={16} strokeWidth={2.5} />
                    </span>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Preventing Algorithimic Harm
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                        Guarding against imported bias and ensuring AI tools
                        deployed in public finance, healthcare, and education
                        respect civil liberties.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <FiCheck aria-hidden size={16} strokeWidth={2.5} />
                    </span>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Sovereignty and Data Capital
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                        Treating sovereign data as a national strategic asset
                        rather than an unmonetized byproduct.
                      </p>
                    </div>
                  </div>
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
                {/* Stat 1 */}
                <div className="pb-8">
                  <div className="mt-3 text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                    <AnimatedNumber value={54} suffix="+" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    NATIONS IN SCOPE{" "}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Tailored for regional harmonization across AU directives and
                    continental treaties.
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="border-l border-white/10 pb-8 pl-8">
                  <div className="mt-3 text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                    <AnimatedNumber value={100} suffix="%" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    CONTEXTUALIZED
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Grounded in African legal, regulatory, and socio-economic
                    frameworks.
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="border-t border-white/10 pt-8">
                  <div className="mt-3 text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                    <AnimatedNumber value={6} suffix="-Tier" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    FRAMEWORK™
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Discover, Design, Build, Implement, Enable, and Continuously
                    Improve.
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="border-l border-white/10 border-t border-white/10 pt-8 pl-8">
                  <div className="mt-3 text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                    <AnimatedNumber value={100} suffix="%" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Proprietary tech
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Powered by GOVERNOVA AI™ for automated compliance and
                    decision modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="mx-auto mt-12 grid  gap-x-8 gap-y-12 sm:grid-cols-2">
        {LEADERSHIP.map((person) => (
          <div key={person.name}>
            {/* Image */}
            <div className="relative mx-auto w-[100%]">
              {/* Placeholder */}
              <div className="aspect-[4/5] overflow-hidden rounded-[25px] bg-surface-alt">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Country / Continent tag */}
              <span className="absolute bottom-4 left-4 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-navy">
                {person.location}
              </span>
            </div>

            {/* Details */}
            <div className="mx-auto mt-5 w-[80%] text-left">
              <h3 className="text-xl font-bold text-navy">{person.name}</h3>

              <p className="mt-1 text-sm font-semibold text-gold">
                {person.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-ink sm:text-3xl">
            Explore our executive programmes or get in touch with our team.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/programmes" variant="primary">
              Explore Programmes <FiArrowRight aria-hidden size={16} />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
