import {
  FiShield,
  FiBookOpen,
  FiDatabase,
  FiAward,
  FiTrendingUp,
  FiBarChart2,
  FiGitBranch,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { NewsletterForm } from "../components/forms/NewsletterForm";
// Reuses the constellation map asset — no new imagery required for this section.
import constellationMap from "../assets/images/DGA_MAP.webp";

const CAPABILITY_AREAS = [
  { icon: FiShield, label: "Governance and policy management" },
  { icon: FiDatabase, label: "AI governance and risk assessment" },
  { icon: FiBookOpen, label: "Institutional knowledge management" },
  { icon: FiAward, label: "Executive learning and capability development" },
  { icon: FiTrendingUp, label: "Decision support" },
  { icon: FiBarChart2, label: "Reporting and analytics" },
  { icon: FiGitBranch, label: "Governance workflow coordination" },
  { icon: FiUsers, label: "Organisational collaboration" },
];

export function GovernovaPage() {
  return (
    <>
      <PageMeta
        title="GOVERNOVA AI™"
        description="GOVERNOVA AI™ is Digital Governance Africa's flagship digital innovation initiative — an intelligent governance platform in development."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            GOVERNOVA AI™
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Intelligent Governance for the Digital Age
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            GOVERNOVA AI™ is Digital Governance Africa's flagship digital
            innovation initiative. The platform is being developed to
            strengthen governance, facilitate institutional learning and
            support informed decision-making through the responsible use of
            artificial intelligence.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Why We Are Building It"
            title="Addressing a Fragmented Governance Landscape"
            titleClassName="text-white"
          />
          <p className="mt-6 text-base leading-relaxed text-white/75 ">
            In many organisations, governance information is dispersed across
            policies, documents, systems and departments. GOVERNOVA AI™ is
            being designed to improve access to institutional knowledge,
            support obligation monitoring and provide practical insight for
            decision-makers.
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Planned Capability Areas"
            title="What GOVERNOVA AI™ Is Being Designed to Support"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITY_AREAS.map((area) => (
              <div key={area.label} className="flex flex-col items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <area.icon aria-hidden size={20} />
                </span>
                <p className="text-sm font-semibold text-ink">{area.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Badge tone="gold">Status: In Development</Badge>
          <h2 className="max-w-xl text-2xl font-bold text-ink sm:text-3xl">
            Interested in becoming a strategic partner, pilot organisation or
            contributor?
          </h2>
          <Button to="/contact" variant="primary">
            Partner With GOVERNOVA AI™ <FiArrowRight aria-hidden size={16} />
          </Button>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy pt-20">
        <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg text-2xl font-bold text-headline-dark sm:text-3xl">
            Be the First to Know
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-body-dark">
            Get notified as GOVERNOVA AI™ moves from development toward its
            first pilots.
          </p>
          <NewsletterForm
            variant="dark"
            label="Email address"
            submitLabel="Notify Me"
            successMessage="Thanks — we'll be in touch as GOVERNOVA AI™ progresses."
          />
        </Container>

        <img
          src={constellationMap}
          alt="A glowing map of Africa"
          aria-hidden
          className="pointer-events-none mx-auto mt-16 w-full max-w-xl rounded-3xl [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
      </section>
    </>
  );
}