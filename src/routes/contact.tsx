import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { budgetOptions, serviceOptions } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ron Digital" },
      { name: "description", content: "Tell Ron Digital about your project, idea, or digital challenge and get a practical next step. Projects start from $500." },
      { property: "og:title", content: "Contact | Ron Digital" },
      { property: "og:description", content: "Start a project with Ron Digital — tell us what you're working on." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <SiteHeader />
      <main>
        <section className="navy-surface py-20 text-background md:py-24">
          <div className="page-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="eyebrow text-brand-glow">Contact</span>
              <h1 className="display-font mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's Build Something That Works</h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-muted">Have a project, idea, or digital challenge? Tell us what you’re working on and let’s discuss how Ron Digital can help.</p>
              <div className="mt-10 flex items-center gap-3 text-sm text-navy-muted">
                <span className="grid size-10 place-items-center rounded-lg bg-background/10 text-brand-glow"><Mail className="size-4" /></span>
                <a href="mailto:rondigital.team@gmail.com" className="hover:text-brand-glow">rondigital.team@gmail.com</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-xl border border-background/10 bg-background/[0.06] p-6 backdrop-blur-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Your name" required dark />
                <Field label="Business Name" name="business" placeholder="Your business" dark />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Email Address" name="email" type="email" placeholder="you@business.com" required dark />
                <Field label="Phone Number" name="phone" type="tel" placeholder="Optional" dark />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <SelectField label="Service Needed" name="service" options={serviceOptions} dark />
                <SelectField label="Project Budget" name="budget" options={[...budgetOptions]} dark />
              </div>
              <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-navy-muted">
                Message
                <textarea name="message" rows={4} placeholder="Tell us a little about what you’re working on..." required className="mt-1.5 w-full resize-none rounded-lg border border-background/15 bg-background/10 px-4 py-3 text-sm font-normal normal-case tracking-normal text-background outline-none placeholder:text-navy-muted focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/30" />
              </label>
              <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">
                {submitted ? <>Request received <Check className="size-4" /></> : <>Send Project Request <ArrowUpRight className="size-4" /></>}
              </button>
              {submitted && <p role="status" className="mt-3 text-center text-sm text-brand-glow">Thanks — we’ll be in touch soon.</p>}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, placeholder, type = "text", required = false, dark = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean; dark?: boolean }) {
  return (
    <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>
      {label}
      <input name={name} type={type} placeholder={placeholder} required={required} className={`${dark ? "border-background/15 bg-background/10 text-background placeholder:text-navy-muted focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground placeholder:text-ink-muted/70 focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`} />
    </label>
  );
}

function SelectField({ label, name, options, dark = false }: { label: string; name: string; options: string[]; dark?: boolean }) {
  return (
    <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>
      {label}
      <select name={name} className={`${dark ? "border-background/15 bg-background/10 text-background focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`}>
        {options.map((option) => <option key={option} className="text-foreground">{option}</option>)}
      </select>
    </label>
  );
}
