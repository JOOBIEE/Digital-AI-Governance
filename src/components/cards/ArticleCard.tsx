import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiArrowRight } from "react-icons/fi";
import type { Article } from "../../types/content";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { ARTICLE_CATEGORY_COVERS } from "../../data/articleCovers";
import { cn } from "../../lib/cn";

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const cover = article.coverImage ?? ARTICLE_CATEGORY_COVERS[article.category];

  const [revealed, setRevealed] = useState(false);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Touch equivalent: first tap reveals the hover state, second tap navigates.
    const isTouch = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;

    if (isTouch && !revealed) {
      event.preventDefault();
      setRevealed(true);
    }
  }

  return (
    <Link
      to={`/insights/${article.slug}`}
      onClick={handleClick}
      className={cn("group block", revealed && "is-revealed")}
    >
      <Card
        className={cn(
          "px-6 py-12",
          featured ? "grid gap-6 sm:grid-cols-2 sm:items-center" : "",
          !featured && "overflow-hidden",
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative -mx-6 -mt-12 mb-4 w-[calc(100%+48px)] overflow-hidden rounded-t-[25px]",
            featured
              ? "aspect-[21/9] sm:m-0 sm:w-full sm:rounded-t-[25px]"
              : "aspect-video",
          )}
        >
          {cover ? (
            <img
              src={cover}
              alt="Article cover image"
              className={cn(
                "h-full w-full object-cover transition-transform duration-400 ease-standard",
                "group-hover:scale-[1.06]",
                revealed && "scale-[1.06]",
              )}
            />
          ) : (
            <PlaceholderImage
              label={article.category}
              aspect={featured ? "wide" : "video"}
              className="h-full w-full rounded-none"
            />
          )}

          <div
            className={cn(
              "absolute inset-0 bg-navy/0 transition-colors duration-250 ease-standard",
              "group-hover:bg-navy/20",
              revealed && "bg-navy/20",
            )}
          />

          <span
            className={cn(
              "absolute bottom-4 left-4 flex translate-y-2 items-center gap-1.5 text-sm font-semibold text-headline-dark opacity-0 transition-[opacity,transform] duration-250 ease-standard",
              "group-hover:translate-y-0 group-hover:opacity-100",
              revealed && "translate-y-0 opacity-100",
            )}
          >
            Read Article
            <FiArrowRight aria-hidden size={14} />
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2">
            <Badge>{article.category}</Badge>

            {article.gated && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted">
                <FiLock aria-hidden size={11} />
                Registration required
              </span>
            )}
          </div>

          <h3
            className={
              featured
                ? "mt-3 text-2xl font-semibold text-ink"
                : "mt-3 text-lg font-semibold text-ink"
            }
          >
            {article.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {article.summary}
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs text-ink-muted">
            <time dateTime={article.date}>
              {DATE_FORMATTER.format(new Date(article.date))}
            </time>

            <span aria-hidden>&middot;</span>

            <span>{article.readingTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
