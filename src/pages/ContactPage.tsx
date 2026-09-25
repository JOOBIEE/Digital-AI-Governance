import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { InquiryForm } from "../components/forms/InquiryForm";
import { Accordion } from "../components/ui/Accordion";
import { SITE_CONFIG } from "../data/siteConfig";
import { FAQS } from "../data/faqs";

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Speak with us about responsible AI, data governance, executive capability development or institutional transformation."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Start a Conversation"
            subtitle="Speak with us about responsible AI, data governance, executive capability development or institutional transformation. We welcome the opportunity to understand your priorities and explore how DGA may support them."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <InquiryForm variant="contact" />

          <ul className="space-y-4 text-sm text-ink-muted">
            <li className="flex items-start gap-3">
              <FiMail aria-hidden className="mt-0.5 shrink-0 text-gold" size={16} />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold">
                {SITE_CONFIG.email}
              </a>
            </li>
            {SITE_CONFIG.phones.map((phone) => (
              <li key={phone} className="flex items-start gap-3">
                <FiPhone aria-hidden className="mt-0.5 shrink-0 text-gold" size={16} />
                <span>{phone}</span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <FiMapPin aria-hidden className="mt-0.5 shrink-0 text-gold" size={16} />
              <span>{SITE_CONFIG.address}</span>
            </li>
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-8">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </section>
    </>
  );
}