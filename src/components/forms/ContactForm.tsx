"use client";

import * as React from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactState = {
  name: string;
  email: string;
  business: string;
  message: string;
};

const INITIAL: ContactState = {
  name: "",
  email: "",
  business: "",
  message: "",
};

export function ContactForm() {
  const [state, setState] = React.useState<ContactState>(INITIAL);
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactState, string>>>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const update = <K extends keyof ContactState>(k: K, v: ContactState[K]) => {
    setState((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e: typeof errors = {};
    if (!state.name.trim()) e.name = "Name is required";
    if (!state.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      e.email = "Enter a valid email";
    if (!state.message.trim()) e.message = "Tell us what you need";
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("submitting");
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL || "";
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...state, source: "contact-page" }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-rule bg-paper p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-ember-tint text-ember-deep">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="display mt-5 text-[24px] text-ink">Message sent.</h3>
        <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-2">
          We read everything that comes in and reply the same business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-steel-rule bg-warm-ivory-2 p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(11,31,51,0.18)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          value={state.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          value={state.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
        />
        <Field
          className="sm:col-span-2"
          label="Business name"
          id="business"
          value={state.business}
          onChange={(v) => update("business", v)}
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-[12px] font-medium uppercase tracking-[0.14em] text-ink-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={state.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(
              "mt-2 block w-full rounded-xl border bg-bone px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 transition-colors resize-none focus:outline-none focus:border-ink",
              errors.message ? "border-ember-deep" : "border-rule",
            )}
            placeholder="Tell us briefly what you are working on or what you need."
          />
          {errors.message ? (
            <p className="mt-1.5 text-[12.5px] text-ember-deep">{errors.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-signal-teal px-7 text-[15px] font-medium text-warm-ivory transition-colors hover:bg-signal-teal-deep active:bg-signal-teal-deep disabled:opacity-70",
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </button>
        <p className="text-[13.5px] text-ink-2">
          We answer the same business day.
        </p>
      </div>
      {status === "error" ? (
        <p className="mt-3 text-[13.5px] text-ember-deep">
          Something went wrong. Please try again or email
          hello@keenforge.com.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  className,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-[12px] font-medium uppercase tracking-[0.14em] text-ink-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-2 block w-full rounded-xl border bg-bone px-4 py-3 text-[15px] text-ink placeholder:text-ink-3 transition-colors focus:outline-none focus:border-ink",
          error ? "border-ember-deep" : "border-rule",
        )}
      />
      {error ? (
        <p className="mt-1.5 text-[12.5px] text-ember-deep">{error}</p>
      ) : null}
    </div>
  );
}
