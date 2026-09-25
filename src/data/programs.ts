import type { Program } from "../types/content";

export const PROGRAMME_CATEGORIES = [
  "Government and Public Sector",
  "Corporate Governance",
  "Legal and Compliance",
] as const;

export const PROGRAMS: Program[] = [
  // Government and Public Sector
  {
    slug: "digital-government-governance",
    title: "Digital Government Governance",
    category: "Government and Public Sector",
    summary:
      "For public-sector leaders responsible for governing digital transformation, digital public services and the responsible use of emerging technologies.",
  },
  {
    slug: "data-governance-stewardship",
    title: "Data Governance and Stewardship",
    category: "Government and Public Sector",
    summary:
      "For public-sector leaders and officials responsible for establishing accountable, trustworthy and effective data-governance and stewardship practices.",
  },
  {
    slug: "ai-public-sector-leaders",
    title: "AI for Public Sector Leaders",
    category: "Government and Public Sector",
    summary:
      "For leaders navigating responsible AI adoption within government institutions.",
  },
  {
    slug: "sustainable-development-intelligence",
    title: "Sustainable Development Intelligence",
    category: "Government and Public Sector",
    summary:
      "For teams using data and intelligence to advance sustainable development outcomes.",
  },
  {
    slug: "national-digital-infrastructure-governance",
    title: "National Digital Infrastructure Governance",
    category: "Government and Public Sector",
    summary:
      "For public institutions and leaders responsible for governing secure, resilient and inclusive national digital infrastructure.",
  },

  // Corporate Governance
  {
    slug: "enterprise-governance-2030",
    title: "Enterprise Governance 2030™",
    category: "Corporate Governance",
    summary:
      "For Legal, Compliance, Risk and Internal Audit leaders preparing their organisations to govern digital transformation, data and AI responsibly.",
  },
  {
    slug: "ai-governance-boards-executives",
    title: "AI Governance for Boards and Executives",
    category: "Corporate Governance",
    summary:
      "For board members and senior executives strengthening their understanding, oversight and accountability for the responsible use of AI.",
  },
  {
    slug: "data-governance-leadership",
    title: "Data Governance Leadership",
    category: "Corporate Governance",
    summary:
      "For leaders building accountable, enterprise-wide data governance and stewardship capabilities.",
  },
  {
    slug: "digital-governance-assurance",
    title: "Digital Governance and Governance Assurance",
    category: "Corporate Governance",
    summary:
      "For leaders strengthening oversight, accountability and assurance across digital transformation, data and emerging technologies.",
  },

  // Legal and Compliance
  {
    slug: "future-corporate-legal-function",
    title: "The Future Corporate Legal Function",
    category: "Legal and Compliance",
    summary:
      "For general counsel, in-house legal teams and governance professionals preparing the legal function for technological, regulatory and organisational change.",
  },
  {
    slug: "ai-governance-in-house-lawyers",
    title: "AI Governance for In-House Lawyers",
    category: "Legal and Compliance",
    summary:
      "For in-house legal teams advising on the legal, regulatory and governance implications of AI adoption and use.",
  },
  {
    slug: "digital-regulatory-intelligence",
    title: "Digital Regulatory Intelligence",
    category: "Legal and Compliance",
    summary:
      "For legal, compliance, risk and policy professionals monitoring digital regulatory developments and assessing their institutional implications.",
  },
  {
    slug: "legal-operations-responsible-ai",
    title: "Legal Operations and Responsible AI",
    category: "Legal and Compliance",
    summary:
      "For legal operations leaders overseeing the responsible adoption and use of AI across legal workflows and services.",
  },
];