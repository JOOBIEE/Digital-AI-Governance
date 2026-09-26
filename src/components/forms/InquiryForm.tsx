import { useState, type FormEvent } from "react";
import { FiCheck, FiLoader } from "react-icons/fi";
import { Card } from "../ui/Card";
import { cn } from "../../lib/cn";

type InquiryVariant = "contact" | "gated-download" | "programme";

interface InquiryFormProps {
  variant: InquiryVariant;
  heading?: string;
  description?: string;
  submitLabel?: string;
}

const VARIANT_DEFAULTS: Record<
  InquiryVariant,
  { heading: string; description: string; submitLabel: string }
> = {
  contact: {
    heading: "Send an inquiry",
    description:
      "Tell us about your organisation and how we can help. Our team responds within two business days.",
    submitLabel: "Submit Inquiry",
  },
  "gated-download": {
    heading: "Request access",
    description: "Share a few details to receive this report by email.",
    submitLabel: "Request Report",
  },
  programme: {
    heading: "Register your interest",
    description: "Let us know which programme you're interested in and we'll follow up with enrolment details.",
    submitLabel: "Register Interest",
  },
};

const AREAS_OF_INTEREST = [
  "Advisory and Consulting",
  "Executive Programmes",
  "Research and Policy",
  "GOVERNOVA AI™",
  "Strategic Partnerships",
  "Speaking and Events",
  "General Enquiry",
] as const;

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

interface FormValues {
  name: string;
  email: string;
  organisation: string;
  role: string;
  country: string;
  areaOfInterest: string;
  message: string;
}

const EMPTY_VALUES: FormValues = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  country: "",
  areaOfInterest: "",
  message: "",
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

export function InquiryForm({ variant, heading, description, submitLabel }: InquiryFormProps) {
  const defaults = VARIANT_DEFAULTS[variant];
  const isContact = variant === "contact";
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(current: FormValues) {
    const nextErrors: FieldErrors = {};
    if (!current.name.trim()) nextErrors.name = "Name is required.";
    if (!EMAIL_PATTERN.test(current.email)) nextErrors.email = "Enter a valid email address.";
    if (!current.organisation.trim()) nextErrors.organisation = "Organisation is required.";
    if (isContact) {
      if (!current.role.trim()) nextErrors.role = "Role is required.";
      if (!current.country.trim()) nextErrors.country = "Country is required.";
      if (!current.areaOfInterest.trim()) nextErrors.areaOfInterest = "Please select an area of interest.";
    }
    if (variant !== "gated-download" && !current.message.trim()) {
      nextErrors.message = "Please add a short message.";
    }
    return nextErrors;
  }

  function handleChange(field: keyof FormValues, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    // Live validation as the user types, not just on submit.
    setErrors(validate(nextValues));
  }

  function handleBlur(field: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3dd7d877-4246-4a79-ab93-21a3f6211101",
          subject: `New ${variant} submission — ${values.name || "Website visitor"}`,
          from_name: values.name,
          Name: values.name,
          Email: values.email,
          Organisation: values.organisation,
          Role: values.role || "—",
          Country: values.country || "—",
          "Area of Interest": values.areaOfInterest || "—",
          Message: values.message || "—",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSubmitting(false);
      setSubmitted(true);
      setValues(EMPTY_VALUES);
    } catch (error) {
      console.error("Inquiry form submission failed", error);
      setSubmitting(false);
      setSubmitError(
        "Something went wrong sending your message. Please try again, or email us directly.",
      );
    }
  }

  function shouldShowError(field: keyof FormValues) {
    return Boolean(errors[field]) && (touched[field] || attemptedSubmit);
  }

  if (submitted) {
    return (
      <Card className="text-center">
        <p className="text-lg font-semibold text-ink">Thank you.</p>
        <p className="mt-2 text-sm text-ink-muted">
          We&apos;ve received your submission and will be in touch shortly.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-lg font-semibold text-ink">{heading ?? defaults.heading}</h3>
      <p className="mt-1.5 text-sm text-ink-muted">{description ?? defaults.description}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <Field
          label="Full name"
          id="inquiry-name"
          value={values.name}
          error={shouldShowError("name") ? errors.name : undefined}
          onChange={(v) => handleChange("name", v)}
          onBlur={() => handleBlur("name")}
        />
        <Field
          label="Work email"
          id="inquiry-email"
          type="email"
          value={values.email}
          error={shouldShowError("email") ? errors.email : undefined}
          valid={EMAIL_PATTERN.test(values.email)}
          onChange={(v) => handleChange("email", v)}
          onBlur={() => handleBlur("email")}
        />
        <Field
          label="Organisation"
          id="inquiry-organisation"
          value={values.organisation}
          error={shouldShowError("organisation") ? errors.organisation : undefined}
          onChange={(v) => handleChange("organisation", v)}
          onBlur={() => handleBlur("organisation")}
        />

        {isContact && (
          <>
            <Field
              label="Role"
              id="inquiry-role"
              value={values.role}
              error={shouldShowError("role") ? errors.role : undefined}
              onChange={(v) => handleChange("role", v)}
              onBlur={() => handleBlur("role")}
            />
            <Field
              label="Country"
              id="inquiry-country"
              value={values.country}
              error={shouldShowError("country") ? errors.country : undefined}
              onChange={(v) => handleChange("country", v)}
              onBlur={() => handleBlur("country")}
            />
            <div>
              <label
                htmlFor="inquiry-area"
                className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted"
              >
                Area of interest
              </label>
              <select
                id="inquiry-area"
                value={values.areaOfInterest}
                onChange={(event) => handleChange("areaOfInterest", event.target.value)}
                onBlur={() => handleBlur("areaOfInterest")}
                aria-invalid={shouldShowError("areaOfInterest")}
                className="mt-1.5 w-full rounded-sm border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-[border-color,box-shadow] duration-200 ease-standard focus:border-gold focus:ring-2 focus:ring-gold/20"
              >
                <option value="" disabled>
                  Select an area of interest
                </option>
                {AREAS_OF_INTEREST.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {shouldShowError("areaOfInterest") && (
                <p className="mt-1 text-xs text-red-600">{errors.areaOfInterest}</p>
              )}
            </div>
          </>
        )}

        {variant !== "gated-download" && (
          <div>
            <label
              htmlFor="inquiry-message"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted"
            >
              Message
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={values.message}
              onChange={(event) => handleChange("message", event.target.value)}
              onBlur={() => handleBlur("message")}
              aria-invalid={shouldShowError("message")}
              className="mt-1.5 w-full rounded-sm border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-[border-color,box-shadow] duration-200 ease-standard focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
            {shouldShowError("message") && (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            )}
          </div>
        )}

                {submitError && (
          <p className="text-sm text-red-600" role="alert">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 ease-standard hover:bg-gold-deep disabled:opacity-70"
        >
          {submitting && <FiLoader aria-hidden size={16} className="animate-spin" />}
          {submitting ? "Submitting…" : (submitLabel ?? defaults.submitLabel)}
        </button>
      </form>
    </Card>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  error?: string;
  valid?: boolean;
  type?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

function Field({ label, id, value, error, valid, type = "text", onChange, onBlur }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          className={cn(
            "w-full rounded-sm border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-[border-color,box-shadow] duration-200 ease-standard focus:border-gold focus:ring-2 focus:ring-gold/20",
            valid && "pr-9",
          )}
        />
        {valid && (
          <FiCheck
            aria-hidden
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600"
          />
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
