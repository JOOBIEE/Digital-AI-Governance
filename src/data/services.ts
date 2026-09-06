import {
  FiCpu,
  FiTrendingUp,
  FiDatabase,
  FiShield,
  FiAward,
  FiFileText,
} from "react-icons/fi";
import type { AdvisoryService } from "../types/content";

export const SERVICES: AdvisoryService[] = [
  {
    slug: "ai-governance-advisory",
    title: "AI Governance Advisory",
    icon: FiCpu,
    summary:
      "We help organisations design responsible AI strategies, governance frameworks, risk assessments, policies and assurance arrangements.",
    capabilities: [
      "AI governance strategy",
      "AI governance frameworks",
      "AI readiness assessments",
      "AI risk and impact assessments",
      "Responsible AI policies",
      "Human oversight frameworks",
      "AI inventories and registers",
      "AI compliance and assurance reviews",
    ],
    outcome:
      "A practical and sustainable approach to managing AI opportunities, risks and accountability.",
  },
  {
    slug: "digital-transformation-advisory",
    title: "Digital Transformation Advisory",
    icon: FiTrendingUp,
    summary:
      "We support organisations in developing practical, governance-led strategies that align people, processes, data and technology.",
    capabilities: [
      "Digital transformation strategy",
      "Governance and operating model design",
      "Organisational readiness assessments",
      "Business process reviews",
      "Change management support",
      "Data and digital capability planning",
      "Implementation roadmaps",
      "Executive advisory",
    ],
    outcome:
      "Stronger governance, improved operational effectiveness and a structured foundation for sustainable transformation.",
  },
  {
    slug: "data-governance",
    title: "Data Governance",
    icon: FiDatabase,
    summary:
      "We help organisations establish accountability, improve data quality and govern data as a trusted strategic asset.",
    capabilities: [
      "Data governance frameworks",
      "Data ownership and stewardship models",
      "Data quality assessments",
      "Data maturity assessments",
      "Data classification frameworks",
      "Data-sharing models",
      "Metadata and standards guidance",
      "Data governance roadmaps",
    ],
    outcome:
      "Trusted, well-governed data that supports better decisions, collaboration and institutional performance.",
  },
  {
    slug: "governance-risk-compliance",
    title: "Governance, Risk and Compliance",
    icon: FiShield,
    summary:
      "We strengthen digital governance, oversight and regulatory readiness across institutions navigating digital risk.",
    capabilities: [
      "Digital governance reviews",
      "Governance framework development",
      "Risk and control design",
      "Regulatory readiness",
      "Compliance programme support",
      "Governance assurance",
      "Executive dashboards",
      "Governance maturity assessments",
    ],
    outcome:
      "Clear accountability, stronger oversight and improved readiness for emerging digital risks and obligations.",
  },
  {
    slug: "executive-education-professional-development",
    title: "Executive Education and Professional Development",
    icon: FiAward,
    summary:
      "We design executive programmes, professional development courses, workshops and in-house training for leaders and professionals.",
    capabilities: [
      "Executive leadership programmes",
      "In-house organisational training",
      "Professional development courses",
      "Masterclasses",
      "Workshops",
      "Train-the-Trainer programmes",
      "Tailored capability-building initiatives",
    ],
    outcome:
      "More confident leaders, stronger professional capability and organisations better prepared for digital change.",
  },
  {
    slug: "research-policy-advisory",
    title: "Research and Policy Advisory",
    icon: FiFileText,
    summary:
      "We provide applied research, regulatory analysis, policy support and strategic insights that strengthen evidence-based decision-making.",
    capabilities: [
      "Applied research",
      "Policy analysis",
      "Regulatory analysis",
      "Strategic reports",
      "Briefing papers",
      "Governance framework development",
      "Executive roundtables",
      "Policy dialogue",
    ],
    outcome:
      "Better-informed decisions, stronger policies and practical responses to emerging governance challenges.",
  },
];
