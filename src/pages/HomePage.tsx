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
import HeroImage from "../assets/images/hero-image.webp";
import PageHero from "../components/home/PageHero";
import { BackgroundVideo } from "../components/ui/BackgroundVideo";
import type { BackgroundVideoSource } from "../components/ui/BackgroundVideo";
import bgAv1 from "../assets/vids/bg-av1.mp4";
import bgH264 from "../assets/vids/bg-h264.mp4";
import bgPoster from "../assets/vids/bg-poster.webp";

// Preference order: AV1 (smallest, hardware-decoded devices only), then H.264 (plays everywhere).
const INSTITUTIONS_VIDEO_SOURCES: BackgroundVideoSource[] = [
  {
    src: bgAv1,
    type: 'video/mp4; codecs="av01.0.05M.08"',
    width: 1280,
    height: 720,
    bitrate: 270_000,
    framerate: 30,
    requireEfficient: true,
  },
  {
    src: bgH264,
    type: 'video/mp4; codecs="avc1.64001f"',
    width: 960,
    height: 540,
    bitrate: 300_000,
    framerate: 30,
  },
];

const WHAT_WE_DO = [
  {
    icon: FiCpu,
    title: "AI Governance Advisory",
    summary:
      "We support organisations in adopting and overseeing AI responsibly. Our advisory services cover AI strategy, governance frameworks, risk assessment, policy and assurance.",
    to: "/services",
    linkLabel: "Explore AI Governance",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Transformation Advisory",
    summary:
      "We support organisations in planning and governing digital transformation. Our advisory services help align people, processes, data and technology with institutional priorities.",
    to: "/services",
    linkLabel: "Explore Digital Transformation",
  },
  {
    icon: FiDatabase,
    title: "Data Governance",
    summary:
      "We support organisations in strengthening accountability for their data. Our advisory services address data ownership, stewardship, quality and responsible use.",
    to: "/services",
    linkLabel: "Explore Data Governance",
  },
  {
    icon: FiAward,
    title: "Executive Education",
    summary:
      "We design executive programmes, professional development courses, workshops and tailored in-house training. Our programmes equip leaders and professionals with practical governance knowledge and capabilities.",
    to: "/programmes",
    linkLabel: "Explore Our Programmes",
  },
  {
    icon: FiFileText,
    title: "Research and Policy Advisory",
    summary:
      "We analyse relevant research, regulatory developments and policy issues. Our advisory insights support informed, evidence-based decision-making.",
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
  "Integrated digital, data and AI governance",
  "Practical, governance-led transformation",
  "African context and international good practice",
  "Multidisciplinary expertise",
  "Executive leadership and institutional capability development",
  "Tailored frameworks and implementation support",
  "Collaboration with specialist partners",
  "Outcome-focused approach",
];

const FRAMEWORK_STAGES = [
  {
    step: "01",
    title: "Discover",
    description:
      "Assess the organisation's current maturity, priorities, risks and opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Define the future-state strategy, governance arrangements and delivery roadmap.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop proportionate policies, tools, operating models and governance resources.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Embed the agreed arrangements through coordinated delivery and organisational change.",
  },
  {
    step: "05",
    title: "Enable",
    description:
      "Strengthen leadership capability, workforce knowledge and institutional confidence.",
  },
  {
    step: "06",
    title: "Monitor & Improve",
    description:
      "Evaluate progress, reinforce assurance and refine arrangements as needs evolve.",
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
        description="We support governments, institutions and organisations strengthen digital governance, adopt artificial intelligence responsibly and build trusted, resilient and future-ready institutions."
      />

      <PageHero
        eyebrow="Digital Governance Africa"
        title="Governing Africa's Digital Future"
        description="We support governments, institutions and organisations strengthen digital governance, adopt artificial intelligence responsibly and build trusted, resilient and future-ready institutions."
        backgroundImage={HeroImage}
        primaryAction={{
          label: "Explore Our Services",
          to: "/services",
        }}
        secondaryAction={{
          label: "Partner With Us",
          to: "/contact",
        }}
        showDivider
        metaText="Digital Governance · Responsible AI · Data Leadership · Institutional Transformation"
      />

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

      {/* Technology Alone Does Not Transform Institutions */}
      <section className="relative min-h-[680px] lg:min-h-[800px] overflow-hidden bg-navy">
        <BackgroundVideo
          sources={INSTITUTIONS_VIDEO_SOURCES}
          poster={bgPoster}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy/75" />

        {/* Content */}
        <Container className="relative z-10 flex min-h-[680px] lg:min-h-[800px] py-24 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-[36px] font-extrabold leading-[40px] tracking-[-0.9px] text-white">
              Technology Alone Does Not <br className="hidden sm:block" />{" "}
              Transform Institutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-[18px] font-normal leading-7 tracking-normal text-white">
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
                <Card className="!p-6 flex h-full flex-col items-start text-left">
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
              We bring together expertise in governance, law, policy,
              technology and leadership to advise organisations on digital
              opportunities, transformation priorities and emerging risks.
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
            title="From Strategy to Lasting Institutional Change"
            subtitle="The DGA Transformation Framework™ provides a structured pathway from strategic vision to implementation, capability development and continuous improvement."
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORK_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
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

          <p className="mt-10 text-center text-sm font-medium text-gold">
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
            <Badge tone="white">Status: In Development</Badge>
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

      <section className="py-[30px]">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            align="center"
            eyebrow="Partnership"
            title="Building Africa's Digital Future Together"
                        subtitle="We collaborate with governments, regulators, universities, development organisations, businesses, professional bodies and specialist technology providers. If your organisation is strengthening governance, developing institutional capability or preparing for responsible AI adoption, we welcome discussions on potential partnerships with clearly defined objectives, responsibilities and institutional value."
          />
          <Button to="/contact" variant="primary">
            Start a Conversation <FiArrowRight aria-hidden size={16} />
          </Button>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-[83px]">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-6">
                            <h2 className="max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
                Ready to Strengthen Your Institution's Digital Governance?
              </h2>

              <p className="max-w-xl text-base text-ink-muted">
                Speak with Digital Governance Africa about your governance
                priorities, institutional capabilities and responsible AI
                ambitions.
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