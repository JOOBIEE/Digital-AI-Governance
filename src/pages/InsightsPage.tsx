import { useMemo, useState } from "react";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { ArticleCard } from "../components/cards/ArticleCard";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { ARTICLES } from "../data/articles";
import type { ArticleCategory } from "../types/content";
import PageHero from "../components/home/PageHero";
import insightHeroImage from "../assets/images/insight-hero.webp";
import insightImage1 from "../assets/images/insight-1.webp";
import insightImage2 from "../assets/images/insight-2.webp";
import insightImage3 from "../assets/images/insight-3.webp";

const CATEGORIES: Array<ArticleCategory | "All"> = [
  "All",
  "AI Governance",
  "Data Governance",
  "Executive Insights",
  "Policy",
];

export function InsightsPage() {
  const [category] = useState<(typeof CATEGORIES)[number]>("All");

  const featured = useMemo(
    () => ARTICLES.find((article) => article.featured),
    [],
  );
  const rest = useMemo(
    () =>
      ARTICLES.filter((article) => article !== featured).filter(
        (article) => category === "All" || article.category === category,
      ),
    [category, featured],
  );

  const INSIGHT_IMAGES: Record<string, string> = {
    "governing-ai-in-african-institutions": insightImage1,
    "why-digital-transformation-is-a-governance-challenge": insightImage2,
    "data-as-a-strategic-national-asset": insightImage3,
  };

  return (
    <>
      <PageMeta
        title="Insights & Thought Leadership"
        description="Research, ideas and practical insight from Digital Governance Africa on AI governance, data governance, digital government and regulatory developments."
      />
         <PageHero
        eyebrow="Insights"
        title="Analysis, Ideas and Practical Perspectives"
        description="Explore DGA's perspectives on AI governance, data governance, digital government, institutional transformation and relevant regulatory developments."
        backgroundImage={insightHeroImage}
        showDivider={false}
      />

      {featured && (
        <section className="py-16">
          <Container>
            <ArticleCard article={featured} featured />
          </Container>
        </section>
      )}

      <section className="pb-20">
        <Container>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:auto-rows-fr">
            {rest.map((article, index) => (
              <Reveal
                key={article.slug}
                delayMs={staggerDelay(index)}
                className={index % 3 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <ArticleCard
                  article={article}
                  coverImage={INSIGHT_IMAGES[article.slug]}
                />
              </Reveal>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="mt-8 text-sm text-ink-muted">
              No items in this category yet.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
