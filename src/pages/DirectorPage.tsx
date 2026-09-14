import { Link, useParams } from "react-router-dom";

import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiGlobe,
  FiCheck,
  FiDownload,
} from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { DIRECTORS } from "../data/directorsData";
import { Container } from "../components/layout/Container";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { AnimatedNumber } from "../components/ui/AnimatedNumber";

export default function DirectorPage() {
  const { slug } = useParams();

  const director = DIRECTORS.find((person) => person.slug === slug);

  if (!director) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-surface-alt px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy">Director not found</h1>

          <Link
            to="/about"
            className="mt-6 inline-flex text-sm font-semibold text-gold"
          >
            Back to About
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* HERO / PROFILE */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          {/* Back link */}
          <Link
            to="/about"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-gold"
          >
            <FiArrowLeft aria-hidden size={16} />
            Back to Leadership
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
            {/* LEFT COLUMN */}
            <div>
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[25px]"
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="block h-auto w-full"
                />
              </motion.div>

              {/* PROFESSIONAL PROFILE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 rounded-[25px] border border-black/10 bg-white p-6 shadow-sm sm:p-8"
              >
                {/* PROFILE HEADER */}
                <div className="flex flex-col -gap-2 border-b border-black/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    INSTITUTIONAL REGISTRY RECORD
                  </p>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
                    REF: {director.reference}
                  </p>
                </div>

                {/* THREE COLUMN ROW */}
                <div className="mt-6 grid auto-rows-max gap-4">
                  {/*POSITION*/}
                  <div className="  rounded-[8px] bg-surface-alt p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/50">
                      Current Appointments
                    </p>

                    <p className="mt-2 text-[16px] font-bold text-navy">
                      {director.profile.position}
                    </p>

                    <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                      Digital Governance Africa Limited
                    </p>
                  </div>

                  {/* AREA OF EXPERTISE */}
                  <div className="rounded-[8px] bg-surface-alt p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/50">
                      Credentials & Legal Qualifications
                    </p>

                    <ul className="mt-4 space-y-3">
                      {director.expertise.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[12px] leading-relaxed text-ink-muted"
                        >
                          <span className="mt-1 flex h-2 w-2 shrink-0  rounded-full bg-gold "></span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CONTACT */}
                  <div className="rounded-[8px] bg-surface-alt p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/50">
                      Direct Secretariat Contact
                    </p>

                    <div className="mt-4 space-y-0">
                      {/* PHONE */}
                      <a
                        href={`tel:${director.contact.phone}`}
                        className="flex items-center gap-3 text-[12px] text-ink-muted transition-colors hover:text-navy"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold">
                          <FiPhone aria-hidden size={14} />
                        </span>

                        <span className="break-all">
                          {director.contact.phone}
                        </span>
                      </a>

                      {/* EMAIL */}
                      <a
                        href={`mailto:${director.contact.email}`}
                        className="flex items-center gap-3 text-[12px] text-ink-muted transition-colors hover:text-navy"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold">
                          <FiMail aria-hidden size={14} />
                        </span>

                        <span className="break-all">
                          {director.contact.email}
                        </span>
                      </a>

                      {/* WEBSITE */}
                      <a
                        href={`https://${director.contact.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-[12px] text-ink-muted transition-colors hover:text-navy"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold">
                          <FiGlobe aria-hidden size={14} />
                        </span>

                        <span className="break-all">
                          {director.contact.website}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="mt-3 flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between rounded-[8px] bg-surface-alt p-5">
                  <h2 className="text-xs font-semibold text-navy/50 uppercase tracking-[0.2em]">
                    {director.experience.label}
                  </h2>

                  <div className="flex items-baseline font-bold text-gold gap-1 ">
                    <AnimatedNumber
                      value={director.experience.years}
                      suffix="+"
                    />

                    <span className="text-sm font-bold text-gold">
                      Years Practice
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-2 lg:pt-10"
            >
              {/* EYEBROW */}
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-2 w-2 rounded-full bg-gold" />

                {director.eyebrow}
              </p>

              {/* NAME */}
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                {director.name}
              </h1>

              {/* POSITION */}
              <p className="mt-4 text-lg font-semibold text-navy">
                {director.position}
              </p>

              {/* SPECIALTIES */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                {director.specialties.map((specialty, index) => (
                  <span key={specialty} className="flex items-center gap-3">
                    <span className="text-sm font-normal text-gold">
                      {specialty}
                    </span>

                    {index < director.specialties.length - 1 && (
                      <span className="text-sm font-semibold text-gold">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* COMMENT */}
              <div className="mt-8 rounded-[12px] border-y border-r border-l-2 border-gold bg-gold/10 px-5 py-5 sm:px-6">
                <p className="text-sm italic leading-relaxed text-navy sm:text-base">
                  “
                  {director.quote.split(". ").map((sentence, index, array) => (
                    <span key={index}>
                      {sentence}
                      {index < array.length - 1 && (
                        <>
                          .
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                  ”
                </p>
              </div>

              {/* ABOUT */}
              <div className="mt-8 space-y-4">
                {director.about.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-7 text-ink-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  to={director.actions[0].to}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  <RiShieldCheckLine aria-hidden size={17} />
                  {director.actions[0].label}
                </Button>

                <Button
                  to={director.actions[1].to}
                  variant="secondary"
                  className="w-full !border-gold/30 !bg-white !text-navy hover:!bg-gold/10 sm:w-auto"
                >
                  <FiDownload aria-hidden size={16} className="!text-gold" />
                  {director.actions[1].label}
                </Button>
              </div>

              {/* CARDS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {director.cards.map((card) => (
                  <Card key={card.title} className="!p-5" hoverEffect>
                    <p className="text-lg font-bold uppercase tracking-[0.15em] text-gold">
                      {card.title}
                    </p>

                    <p className="mt-3 text-sm uppercase leading-relaxed text-ink-muted">
                      {card.text}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
