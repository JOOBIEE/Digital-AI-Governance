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
      "To strengthen the governance and institutional capabilities required for responsible digital transformation, greater digital sovereignty and resilient institutions across Africa.",
    statement: "Sovereign & Resilient Future",
    statementColor: "text-gold",
  },
  {
    icon: FiEye,
    iconBg: "bg-[#2563EB]/10",
    iconColor: "text-[#2563EB]",
    title: "Our Vision",
    description:
      "A future in which African institutions govern digital transformation accountably, use artificial intelligence responsibly and steward data to support inclusive and sustainable development.",
    statement: "Responsible Technology and Inclusive Progress",
    statementColor: "text-[#2563EB]",
  },
  {
    icon: FiTrendingUp,
    iconBg: "bg-[#059669]/10",
    iconColor: "text-[#059669]",
    title: "Grounded in African Contexts",
    description:
      "We develop practical frameworks that reflect applicable laws, institutional realities and operating environments across African jurisdictions. International good practice is adapted thoughtfully rather than applied without regard to local context.",
    statement: "Adapted to Local Context",
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

export const DGA_DIFFERENCE = [
  {
    tag: "AFRICA-FOCUSED",
    heading: "Contextual Relevance",
    description:
      "Designed with regard to diverse African legal, regulatory, institutional and socioeconomic contexts.",
    className: "pb-8",
  },
  {
    tag: "PRACTICAL",
    heading: "Adapted Good Practice",
    description:
      "International principles and recognised good practice are adapted to applicable local requirements and institutional realities.",
    className: "border-l border-white/10 pb-8 pl-8",
  },
  {
    tag: "6-STAGE",
    heading: "DGA Transformation Framework™",
    description: "Discover, Design, Build, Implement, Enable, and Monitor & Improve.",
    className: "border-t border-white/10 pt-8",
  },
  {
    tag: "IN DEVELOPMENT",
    heading: "GOVERNOVA AI™",
    description:
      "A planned digital governance platform intended to support institutional knowledge, learning, governance workflows and informed decision-making.",
    className: "border-l border-t border-white/10 pt-8 pl-8",
  },
];

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Accountability and Oversight",
    description:
      "Promoting clear responsibilities, effective decision-making arrangements and human oversight proportionate to risk.",
  },
  {
    number: "02",
    title: "Trust, Rights and Inclusion",
    description:
      "Respecting privacy, data rights, human dignity, fairness and inclusive access in the design and use of digital systems.",
  },
  {
    number: "03",
    title: "Institutional Capability",
    description:
      "Strengthening internal knowledge, leadership and governance capability so institutions can take ownership of lasting change.",
  },
  {
    number: "04",
    title: "Evidence-Informed Practice",
    description:
      "Drawing on relevant evidence, regulatory analysis, practical diagnostics and defined measures of progress.",
  },
];

export const GOVERNANCE_AREAS = [
  {
    tag: "ADVISORY PRACTICE",
    title: "Data Governance and Digital Sovereignty",
    description1:
      "Data governance frameworks, stewardship arrangements, data strategy, cross-border data considerations and institutional capability development.",
    description2:
      "Designed for governments, public institutions, regulators and enterprises seeking to govern data responsibly and derive greater institutional value from it.",
    image: Expertise1,
  },
  {
    tag: "AI GOVERNANCE",
    title: "Responsible AI and Algorithmic Oversight",
    description1:
      "AI governance strategies, policies, risk classification, impact assessment, human oversight and assurance readiness.",
    description2:
      "Designed for boards, executive leaders and oversight functions responsible for the accountable adoption and use of AI.",
    image: Expertise2,
  },
  {
    tag: "EXECUTIVE PROGRAMMES",
    title: "Institutional Capability and Leadership",
    description1:
      "Executive programmes, maturity assessments, change governance and practical implementation planning.",
    description2:
      "Designed for senior public officials, board members, legal, compliance and risk leaders, and other professionals responsible for digital transformation.",
    image: Expertise3,
  },
];