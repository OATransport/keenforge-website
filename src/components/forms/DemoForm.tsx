"use client";

import * as React from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GHL, captureContext, fireConversion } from "@/lib/integrations";
import { CalendarEmbed } from "@/components/integrations/CalendarEmbed";

/*
  KeenForge Growth Review request form.

  - Submits to GHL.webhookUrl when configured (see src/lib/integrations.ts).
  - Falls back to a simulated submit so the form is testable end to end
    before the webhook is wired up.
  - Captures UTM, click IDs, referrer, landing page, user agent, timestamp.
  - Fires fireConversion("growth_review_request") on success so pixels can
    attach.
  - On success, surfaces the booking calendar inline if configured.

  Visible copy on the form is platform neutral. Integration paste markers
  live only in src/lib/integrations.ts and src/components/integrations/.
*/

type FormState = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  monthlyLeads: string;
  currentSystem: string;
  problem: string;
  bestTime: string;
  consent: boolean;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  monthlyLeads: "",
  currentSystem: "",
  problem: "",
  bestTime: "",
  consent: false,
};

const INDUSTRIES = [
  "Home services",
  "Med spa or clinic",
  "Legal or professional",
  "Automotive or repair",
  "Real estate",
  "Other local or service business",
];

const LEAD_VOLUMES = [
  "Under 25 a month",
  "25 to 100 a month",
  "100 to 500 a month",
  "500 or more a month",
  "Not sure",
];

const TIMES = ["Mornings", "Afternoons", "Evenings", "No preference"];

export function DemoForm() {
  const [state, setState] = React.useState<FormState>(INITIAL);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (s: FormState): FieldErrors => {
    const e: FieldErrors = {};
    if (!s.firstName.trim()) e.firstName = "First name is required";
    if (!s.lastName.trim()) e.lastName = "Last name is required";
    if (!s.businessName.trim()) e.businessName = "Business name is required";
    if (!s.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email))
      e.email = "Enter a valid email";
    if (!s.phone.trim()) e.phone = "Phone is required";
    else if (s.phone.replace(/\D/g, "").length < 7)
      e.phone = "Enter a valid phone number";
    if (!s.industry) e.industry = "Select an industry";
    if (!s.problem.trim()) e.problem = "Tell us what you are trying to fix";
    if (!s.consent) e.consent = "We need your consent to follow up";
    return e;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = validate(state);
    setErrors(e);
    if (Object.keys(e).length) {
      const firstError = Object.keys(e)[0];
      const el = document.getElementById(firstError);
      el?.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      ...state,
      ...captureContext(),
      source: "growth-review",
    };

    try {
      if (GHL.webhookUrl) {
        const res = await fetch(GHL.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      } else {
        // No webhook configured. Simulate a real network call so the UX is
        // testable. Wire up the webhook URL in src/lib/integrations.ts before
        // launch.
        await new Promise((r) => setTimeout(r, 900));
        if (process.env.NODE_ENV !== "production") {
          console.log(
            "[GrowthReviewForm] simulated submit (no webhook configured):",
            payload,
          );
        }
      }

      fireConversion("growth_review_request", {
        industry: state.industry,
        monthly_leads: state.monthlyLeads,
      });

      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMessage(
        "We could not send your request. Please try again, or email hello@keenforge.com directly.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return <SuccessState contact={state} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-steel-rule bg-warm-ivory-2 shadow-[0_24px_60px_-30px_rgba(11,31,51,0.20)]"
    >
      <div className="space-y-10 p-6 sm:p-10">
        <FieldGroup
          number="01"
          title="About you"
          subtitle="So we know who is on the other side of the call."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="First name"
              id="firstName"
              value={state.firstName}
              onChange={(v) => update("firstName", v)}
              error={errors.firstName}
              autoComplete="given-name"
              required
            />
            <Field
              label="Last name"
              id="lastName"
              value={state.lastName}
              onChange={(v) => update("lastName", v)}
              error={errors.lastName}
              autoComplete="family-name"
              required
            />
            <Field
              label="Work email"
              id="email"
              type="email"
              value={state.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
              autoComplete="email"
              required
            />
            <Field
              label="Phone"
              id="phone"
              type="tel"
              value={state.phone}
              onChange={(v) => update("phone", v)}
              error={errors.phone}
              autoComplete="tel"
              required
            />
          </div>
        </FieldGroup>

        <Divider />

        <FieldGroup
          number="02"
          title="About the business"
          subtitle="A quick read of where you are today."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Business name"
              id="businessName"
              value={state.businessName}
              onChange={(v) => update("businessName", v)}
              error={errors.businessName}
              autoComplete="organization"
              required
              className="sm:col-span-2"
            />
            <Field
              label="Website"
              id="website"
              value={state.website}
              onChange={(v) => update("website", v)}
              autoComplete="url"
              placeholder="https://"
              className="sm:col-span-2"
            />
            <Select
              label="Industry"
              id="industry"
              value={state.industry}
              onChange={(v) => update("industry", v)}
              options={INDUSTRIES}
              error={errors.industry}
              placeholder="Pick the closest fit"
              required
            />
            <Select
              label="Monthly lead volume"
              id="monthlyLeads"
              value={state.monthlyLeads}
              onChange={(v) => update("monthlyLeads", v)}
              options={LEAD_VOLUMES}
              placeholder="Roughly how many"
            />
          </div>
        </FieldGroup>

        <Divider />

        <FieldGroup
          number="03"
          title="What you need"
          subtitle="So we walk into the call already useful."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Current CRM or tracking tools"
              id="currentSystem"
              value={state.currentSystem}
              onChange={(v) => update("currentSystem", v)}
              placeholder="HubSpot, Salesforce, spreadsheets, none"
              className="sm:col-span-2"
            />
            <Textarea
              label="What are you trying to fix"
              id="problem"
              value={state.problem}
              onChange={(v) => update("problem", v)}
              error={errors.problem}
              placeholder="Slow response, weak follow up, dated website, missed calls, no reporting, etc."
              className="sm:col-span-2"
              required
            />
            <Select
              label="Best time to reach you"
              id="bestTime"
              value={state.bestTime}
              onChange={(v) => update("bestTime", v)}
              options={TIMES}
              placeholder="Pick a window"
              className="sm:col-span-2"
            />
          </div>
        </FieldGroup>
      </div>

      <div className="border-t border-steel-rule bg-warm-ivory p-6 sm:p-10">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={state.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 h-4 w-4 accent-ember"
          />
          <span className="text-[13.5px] leading-relaxed text-ink-2">
            I am okay with the KeenForge team contacting me about my request by
            email, phone, or text. We will not share my info, and I can opt out
            any time.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-[12.5px] text-ember-deep">
            {errors.consent}
          </p>
        ) : null}

        <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-signal-teal px-7 text-[15px] font-medium text-warm-ivory transition-colors",
              "hover:bg-signal-teal-deep active:bg-signal-teal-deep",
              "disabled:opacity-70 disabled:cursor-not-allowed",
            )}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending your request
              </>
            ) : (
              <>
                Request my growth review
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
          <p className="text-[13.5px] text-ink-2">
            We respond inside one business day, often the same hour.
          </p>
        </div>

        {status === "error" ? (
          <div
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-xl border border-ember-deep/30 bg-ember-tint/50 p-4"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-ember-deep" />
            <p className="text-[13.5px] leading-relaxed text-ember-deep">
              {errorMessage}
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}

function SuccessState({ contact }: { contact: FormState }) {
  const hasCalendar = Boolean(GHL.calendarEmbedUrl);
  return (
    <div className="rounded-3xl border border-rule bg-paper p-8 sm:p-12">
      <div className="flex items-start gap-5">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember-tint text-ember-deep">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <div>
          <h3 className="display text-[28px] sm:text-[36px] text-ink">
            {contact.firstName ? `Thanks, ${contact.firstName}.` : "Got it."}{" "}
            {hasCalendar
              ? "Pick a time below."
              : "We will be in touch shortly."}
          </h3>
          <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-ink-2">
            {hasCalendar
              ? "Your details are on the way to our team. Use the calendar below to lock in your growth review."
              : "Your details are on the way to our team. Watch for a short prep note and a link to book the working session."}
          </p>
        </div>
      </div>

      {hasCalendar ? (
        <div className="mt-8">
          <CalendarEmbed height={760} />
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------ Primitives ------------------------------ */

function FieldGroup({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-6">
      <legend className="grid gap-1">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ember tabular-nums">
          {number}
        </span>
        <span className="text-[20px] font-semibold tracking-tight text-ink">
          {title}
        </span>
        <span className="text-[13.5px] text-ink-2">{subtitle}</span>
      </legend>
      {children}
    </fieldset>
  );
}

function Divider() {
  return <div className="h-px w-full bg-rule" />;
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  className,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-2"
      >
        {label}
        {required ? <span className="text-ember-deep">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 block w-full rounded-xl border bg-bone px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 transition-colors",
          "focus:outline-none focus:border-ink focus:bg-paper",
          error ? "border-ember-deep" : "border-rule",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[12.5px] text-ember-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Textarea({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  className,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-2"
      >
        {label}
        {required ? <span className="text-ember-deep">*</span> : null}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 block w-full rounded-xl border bg-bone px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 transition-colors resize-none",
          "focus:outline-none focus:border-ink focus:bg-paper",
          error ? "border-ember-deep" : "border-rule",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[12.5px] text-ember-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Select({
  label,
  id,
  value,
  onChange,
  options,
  error,
  placeholder,
  className,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: ReadonlyArray<string>;
  error?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-2"
      >
        {label}
        {required ? <span className="text-ember-deep">*</span> : null}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "block w-full appearance-none rounded-xl border bg-bone px-4 py-3 pr-10 text-[15px] text-ink transition-colors",
            "focus:outline-none focus:border-ink focus:bg-paper",
            error ? "border-ember-deep" : "border-rule",
            !value && "text-ink-3",
          )}
        >
          <option value="" disabled>
            {placeholder || "Select"}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-ink">
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-2"
        >
          &darr;
        </span>
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[12.5px] text-ember-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
