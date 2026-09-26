import { useState, type FormEvent } from "react";
import { cn } from "../../lib/cn";

interface NewsletterFormProps {
  variant?: "light" | "dark";
  label?: string;
  submitLabel?: string;
  successMessage?: string;
}

export function NewsletterForm({
  variant = "light",
  label = "Subscribe to our newsletter",
  submitLabel = "Subscribe",
  successMessage = "Thanks — you're on the list.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3dd7d877-4246-4a79-ab93-21a3f6211101",
          subject: "New newsletter signup — Digital Governance Africa",
          from_name: "DGA Website Newsletter",
          Email: email,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Newsletter submission failed", error);
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
      <label
        htmlFor="newsletter-email"
        className={cn("text-sm font-medium", isDark ? "text-white/80" : "text-ink-muted")}
      >
        {label}
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
          }}
          placeholder="you@organisation.com"
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
          className={cn(
            "min-w-0 flex-1 rounded-sm border px-4 py-2.5 text-sm outline-none transition-[border-color,box-shadow] duration-200 ease-standard",
            isDark
              ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-gold focus:ring-2 focus:ring-gold/20"
              : "border-line bg-surface text-ink placeholder:text-ink-muted focus:border-gold focus:ring-2 focus:ring-gold/20",
          )}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 ease-standard hover:bg-gold-deep disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </button>
      </div>
      <p id="newsletter-status" role="status" className="mt-2 text-xs">
        {status === "success" && (
          <span className={isDark ? "text-white/80" : "text-ink-muted"}>{successMessage}</span>
        )}
        {status === "error" && (
          <span className="text-red-400">
            Something went wrong — please check your email and try again.
          </span>
        )}
      </p>
    </form>
  );
}