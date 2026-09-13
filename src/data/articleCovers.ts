// import coverPolicy from "../assets/covers/cover-media.svg";
import type { ArticleCategory } from "../types/content";
import imageAfricaIsBuying from "../assets/images/African_man_working_on_laptop_compressed.webp";
import imageExecutiveInsights from "../assets/images/Group_African_professionals_presentation_compressed.webp";
import imageDataGovernance from "../assets/images/Professional_African_corporate_meeting_compressed.webp";

// Default cover per category, used when an Article has no coverImage of its own.
// Swap an entry here to re-theme every card in that category at once, or set
// `coverImage` on an individual article in data/articles.ts to override just one.
export const ARTICLE_CATEGORY_COVERS: Record<ArticleCategory, string> = {
  "AI Governance": imageDataGovernance,
  "Data Governance": imageAfricaIsBuying,
  "Executive Insights": imageExecutiveInsights,
  Policy: imageExecutiveInsights,
};
