import {
  FiArrowRight,
  FiCpu,
  FiTrendingUp,
  FiDatabase,
  FiAward,
  FiFileText,
  FiZap,
  FiCheck,
} from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { ArticleCard } from "../components/cards/ArticleCard";
import { ARTICLES } from "../data/articles";
import { motion } from "framer-motion";
import { HeroVisual } from "../components/home/HeroVisual";

const WHAT_WE_DO = [
  {
    icon: FiCpu,
    title: "AI Governance Advisory",
    summary:
      "We help organisations design responsible AI strategies, governance frameworks, risk assessments, policies and assurance arrangements.",
    to: "/services",
    linkLabel: "Explore AI Governance",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Transformation Advisory",
    summary:
      "We support organisations in developing practical, governance-led strategies that align people, processes, data and technology.",
    to: "/services",
    linkLabel: "Explore Digital Transformation",
  },
  {
    icon: FiDatabase,
    title: "Data Governance",
    summary:
      "We help organisations establish accountability, improve data quality and govern data as a trusted strategic asset.",
    to: "/services",
    linkLabel: "Explore Data Governance",
  },
  {
    icon: FiAward,
    title: "Executive Education",
    summary:
      "We design executive programmes, professional development courses, workshops and in-house training for leaders and professionals.",
    to: "/programmes",
    linkLabel: "Explore Our Programmes",
  },
  {
    icon: FiFileText,
    title: "Research and Policy Advisory",
    summary:
      "We provide applied research, regulatory analysis, policy support and strategic insights that strengthen evidence-based decision-making.",
    to: "/services",
    linkLabel: "Explore Research and Insights",
  },
  {
    icon: FiZap,
    title: "Digital Innovation",
    summary:
      "Through GOVERNOVA AI™, we are developing intelligent governance solutions that support learning, knowledge, collaboration and executive decision-making.",
    to: "/governova",
    linkLabel: "Discover GOVERNOVA AI™",
  },
];

const STRENGTHS = [
  "Digital governance and responsible AI",
  "Practical, governance-led transformation",
  "Pan-African perspective",
  "Multidisciplinary expertise",
  "Executive leadership development",
  "Collaboration with trusted specialists and partners",
  "Tailored frameworks and implementation support",
  "Focus on measurable institutional outcomes",
];

const FRAMEWORK_STAGES = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the organisation, its maturity, priorities, risks and opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Create the future-state strategy, governance framework and implementation roadmap.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop practical policies, tools, operating models and governance resources.",
  },
  {
    step: "04",
    title: "Implement",
    description: "Support adoption, organisational change and implementation.",
  },
  {
    step: "05",
    title: "Enable",
    description:
      "Build leadership capability, workforce knowledge and institutional confidence.",
  },
  {
    step: "06",
    title: "Monitor & Improve",
    description:
      "Measure progress, strengthen assurance and support continuous improvement.",
  },
];

const FEATURED_PROGRAMMES = [
  {
    title: "Digital Governance and AI Leadership",
    audience:
      "For ministers, executives, boards and senior organisational leaders.",
  },
  {
    title: "Data Governance and Institutional Transformation",
    audience:
      "For government institutions, regulators and large organisations.",
  },
  {
    title: "The Future Corporate Legal Function",
    audience:
      "For General Counsel, in-house lawyers and governance professionals.",
  },
  {
    title: "Enterprise Governance 2030™",
    audience: "For Legal, Compliance, Risk and Internal Audit leaders.",
  },
];

const GOVERNOVA_CAPABILITIES = [
  "Governance",
  "Learning",
  "Knowledge management",
  "Decision support",
  "Analytics",
  "Workflow enablement",
];

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Digital Governance Africa"
        description="We help governments, institutions and organisations strengthen digital governance, adopt artificial intelligence responsibly and build trusted, resilient and future-ready institutions."
      />
      <section className="border-b border-line bg-surface-alt">
        <Container className="grid gap-10 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Text content */}
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
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Digital Governance Africa
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Governing Africa's Digital Future
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              We help governments, institutions and organisations strengthen
              digital governance, adopt artificial intelligence responsibly and
              build trusted, resilient and future-ready institutions.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-nowrap gap-2 sm:gap-3"
            >
              <Button
                to="/services"
                variant="primary"
                magnetic
                className="px-3 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
              >
                Explore Our Services
                <FiArrowRight aria-hidden size={15} />
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                className="px-3 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
              >
                Partner With Us
              </Button>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-sm font-medium text-ink-muted"
            >
              Digital Governance &middot; Responsible AI &middot; Data
              Governance &middot; Institutional Transformation
            </motion.p>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className=" overflow-hidden rounded-3xl"
          >
            <HeroVisual />
          </motion.div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading title="Technology Alone Does Not Transform Institutions" />

            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              Successful digital transformation requires trusted data,
              responsible leadership, effective governance and the institutional
              capability to turn innovation into sustainable value. Digital
              Governance Africa brings these elements together through advisory
              services, executive education, research, governance methodologies
              and practical digital solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Practical Governance for the Digital Age"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((area, index) => (
              <Reveal key={area.title} delayMs={staggerDelay(index)}>
                <Card className="flex h-full flex-col">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <area.icon aria-hidden size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {area.summary}
                  </p>
                  <Button
                    to={area.to}
                    variant="ghost"
                    className="mt-4 self-start"
                  >
                    {area.linkLabel} <FiArrowRight aria-hidden size={14} />
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Why Digital Governance Africa?
            </p>

            <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Governance Expertise. African <br /> Perspective. Practical
              Transformation.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
              We combine governance, law, policy, technology and leadership
              expertise to help organisations address digital opportunities and
              emerging risks with confidence.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {STRENGTHS.map((strength) => (
              <div key={strength} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <FiCheck aria-hidden size={12} />
                </span>

                <p className="text-sm text-white/75">{strength}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-alt py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Delivery Framework"
            title="From Strategy to Sustainable Transformation"
            subtitle="We apply the DGA Transformation Framework™ to help clients move from vision to implementation and continuous improvement."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORK_STAGES.map((stage) => (
              <div key={stage.step}>
                <span className="text-sm font-semibold text-gold">
                  {stage.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm font-medium text-gold">
            Discover &rarr; Design &rarr; Build &rarr; Implement &rarr; Enable
            &rarr; Monitor &amp; Improve
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Programmes"
              title="Developing Leaders for the Digital Age"
            />
            <Button to="/programmes" variant="ghost">
              View Executive Programmes <FiArrowRight aria-hidden size={16} />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROGRAMMES.map((programme, index) => (
              <Reveal key={programme.title} delayMs={staggerDelay(index)}>
                <Card>
                  <h3 className="text-base font-semibold text-ink">
                    {programme.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {programme.audience}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-navy py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Badge tone="gold">Status: In Development</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              GOVERNOVA AI™ — Intelligent Governance for the Digital Age
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              GOVERNOVA AI™ is Digital Governance Africa's flagship technology
              initiative. We are developing an intelligent governance platform
              designed to help organisations strengthen governance, improve
              institutional learning, support responsible AI adoption and make
              better-informed decisions.
            </p>
            <Button to="/governova" variant="primary" className="mt-6" magnetic>
              Explore the Vision <FiArrowRight aria-hidden size={16} />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {GOVERNOVA_CAPABILITIES.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80"
              >
                {capability}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="Ideas Shaping Africa's Digital Future"
            />
            <Button to="/insights" variant="ghost">
              View All Insights <FiArrowRight aria-hidden size={16} />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.slice(0, 3).map((article, index) => (
              <Reveal key={article.slug} delayMs={staggerDelay(index)}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            align="center"
            eyebrow="Partnership"
            title="Building Africa's Digital Future Together"
            subtitle="We work with governments, regulators, universities, development organisations, businesses, professional bodies and trusted technology partners. Whether you are strengthening governance, developing institutional capability or preparing for responsible AI adoption, we welcome the opportunity to explore how we can work together."
          />
          <Button to="/contact" variant="primary">
            Start a Conversation <FiArrowRight aria-hidden size={16} />
          </Button>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-6">
              <h2 className="max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
                Ready to Govern, Innovate and Transform?
              </h2>

              <p className="max-w-xl text-base text-ink-muted">
                Partner with Digital Governance Africa to build a trusted,
                resilient and future-ready institution.
              </p>

              <Button to="/contact" variant="primary">
                Contact Us <FiArrowRight aria-hidden size={16} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
