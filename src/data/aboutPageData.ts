import { FiEye, FiTrendingUp, FiZap } from "react-icons/fi";
import obeleTom from "../assets/images/Obele-tom.webp";
import honJustice from "../assets/images/hon-justice.webp";
import Expertise1 from "../assets/images/Expertise-image-1.webp";
import Expertise2 from "../assets/images/Expertise-image-2.webp";
import Expertise3 from "../assets/images/Expertise-image-3.webp";

export const FOUNDATION_CARDS = [
  {
    icon: FiZap,
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    title: "Our Mission",
    description:
      "To equip African institutions with contextualized frameworks, ethical technology standards, and institutional competence to lead sovereign, trusted, and inclusive digital transformations.",
    statement: "Sovereign & Resilient Future",
    statementColor: "text-gold",
  },
  {
    icon: FiEye,
    iconBg: "bg-[#2563EB]/10",
    iconColor: "text-[#2563EB]",
    title: "Our Vision",
    description:
      "An Africa where digital transformation is anchored in accountability, where AI serves socioeconomic equity, and where data sovereign assets foster sustainable economic prosperity.",
    statement: "Responsible AI & Data Equity",
    statementColor: "text-[#2563EB]",
  },
  {
    icon: FiTrendingUp,
    iconBg: "bg-[#059669]/10",
    iconColor: "text-[#059669]",
    title: "African Realism",
    description:
      "We reject superficial boilerplate policies imported from abroad. We develop frameworks built from the lived realities, legal nuances, and operational infrastructure of African organizations.",
    statement: "Context-Driven Methodologies",
    statementColor: "text-[#059669]",
  },
];

export const LEADERSHIP = [
  {
    name: "Obele Tom-George Akinniranye",
    position: "Co-Founder and Director Legal, Digital Governance Africa",
    location: "Nigeria/Continental",
    image: obeleTom,
  },
  {
    name: "Jacqueline Evbodaghe",
    position: "Co-Founder and Programme Director, Digital Governance Africa",
    location: "Kenya/East Africa",
    image: honJustice,
    gradient: true,
  },
];

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Accountability First",
    description:
      "Clear oversight structures and human-in-the-loop controls for every digital and automated system.",
  },
  {
    number: "02",
    title: "Public Trust & Dignity",
    description:
      "Prioritizing citizen privacy, data rights, and equitable access across public service platforms.",
  },
  {
    number: "03",
    title: "Capacity Empowerment",
    description:
      "Building lasting internal competence so local institutions govern independently without permanent external reliance.",
  },
  {
    number: "04",
    title: "Evidence-Led Rigor",
    description:
      "Combining empirical regulatory research, practical diagnostics, and measurable benchmarks.",
  },
];

export const GOVERNANCE_AREAS = [
  {
    tag: "ADVISORY PRACTICE",
    title: "Data Governance & Sovereign Capital",
    description1:
      "Policy design, national data strategies, cross-border privacy & institutional data lakes.",
    description2:
      "Advising ministries of communications, statistical bureaus, and multinational financial institutions on resilient sovereign data architectures.",
    image: Expertise1,
  },
  {
    tag: "SPECIALIZED COUNCIL",
    title: "AI Ethics & Algorithmic Oversight",
    description1:
      "Responsible AI frameworks, auditing algorithmic bias & boardroom liability.",
    description2:
      "Directing continental roundtables for judicial officers, ministers, and public ombudsmen evaluating automated decision systems.",
    image: Expertise2,
  },
  {
    tag: "EXECUTIVE EDUCATION",
    title: "Institutional Capability & Leadership",
    description1:
      "Executive coaching, digital maturity diagnostics & change management.",
    description2:
      "Equipping permanent secretaries, board chairs, and general counsels with the strategic agility needed for the 2030 digital epoch.",
    image: Expertise3,
  },
];
