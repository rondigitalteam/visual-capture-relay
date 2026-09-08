import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, ChevronDown, Linkedin, Mail, Menu, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";

import mayaPortrait from "@/assets/ron-client-maya.jpg";
import davidPortrait from "@/assets/ron-client-david.jpg";
import sofiaPortrait from "@/assets/ron-client-sofia.jpg";
import ronDigitalLogo from "@/assets/ron-digital-logo-cropped.png";

const services = [
  ["01", "Web Design & Build", "Conversion-first sites engineered to load fast and look premium on every device."],
  ["02", "SEO & Content", "Rank for the searches that matter with technical SEO and content that converts."],
  ["03", "Paid Media", "Full-funnel Google and Meta campaigns tuned daily for maximum ROI."],
  ["04", "Brand & Identity", "Logos, systems and voice that make you unignorable in a crowded market."],
  ["05", "Email & CRM", "Automated flows that nurture leads and revive revenue from your list."],
  ["06", "Analytics & CRO", "Data-backed testing that keeps improving your site month after month."],
] as const;

const faqs = [
  ["How long does a website project take?", "Most sites launch in 4–8 weeks depending on scope. We agree a fixed timeline before we start."],
  ["Do you work with small businesses?", "Absolutely. We have packages for growing teams as well as established companies scaling fast."],
  ["What does ongoing support cost?", "Retainers start at a fixed monthly rate with no lock-in. You can pause or upgrade anytime."],
  ["Can your services be customized?", "Yes. Every engagement is shaped around your audience, goals, timeline, and the systems you already use."],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ron Digital | Digital Growth Studio" },
      { name: "description", content: "Grow your brand with conversion-focused websites, SEO, campaigns, and digital systems from Ron Digital." },
      { property: "og:title", content: "Ron Digital | Digital Growth Studio" },
      { property: "og:description", content: "Digital marketing and website solutions that help ambitious businesses attract, engage, and convert more customers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <header className="relative z-20 page-grid flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Ron Digital home">
          <img src={ronDigitalLogo} alt="Ron Digital" width={148} height={89} className="h-11 w-auto object-contain sm:h-12" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex" aria-label="Main navigation">
          <a href="#services" className="transition-colors hover:text-brand">Services</a>
          <a href="#why" className="transition-colors hover:text-brand">Why us</a>
          <a href="#faq" className="transition-colors hover:text-brand">FAQ</a>
          <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-brand-foreground brand-shadow transition-transform hover:-translate-y-0.5">Book a call</a>
          <button type="button" className="glass-panel grid size-10 place-items-center rounded-full text-brand md:hidden" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
            <Menu className="size-5" />
          </button>
        </div>
        {mobileOpen && (
          <nav className="glass-panel absolute inset-x-0 top-full mt-2 grid gap-1 rounded-2xl p-3 text-sm text-ink-muted md:hidden" aria-label="Mobile navigation">
            {[["Services", "#services"], ["Why us", "#why"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={href} href={href} className="rounded-xl px-4 py-3 transition-colors hover:bg-brand-soft hover:text-brand" onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="page-grid grid gap-6 pb-16 pt-10 lg:grid-cols-12 lg:pt-16">
          <div className="glass-panel flex flex-col justify-center rounded-3xl p-7 sm:p-10 lg:col-span-7">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Digital marketing, done right</span>
            <h1 className="display-font max-w-[12ch] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Grow your brand with a website that actually converts</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">From strategy to launch, Ron Digital builds fast, beautiful sites and campaigns that turn visitors into customers.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="brand-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-brand-foreground brand-shadow transition-transform hover:-translate-y-0.5">Get a free proposal <ArrowUpRight className="size-4" /></a>
              <a href="#services" className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-ink-muted transition-colors hover:text-brand">Explore services</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-glass-border pt-6">
              <div><p className="display-font text-2xl font-extrabold text-brand">240%</p><p className="text-xs text-ink-muted">Average lead lift</p></div>
              <div><p className="display-font text-2xl font-extrabold">120+</p><p className="text-xs text-ink-muted">Brands scaled</p></div>
              <div><p className="display-font text-2xl font-extrabold">98%</p><p className="text-xs text-ink-muted">Client retention</p></div>
            </div>
          </div>
          <div className="grid gap-6 lg:col-span-5 lg:grid-rows-2">
            <div className="brand-gradient flex min-h-56 flex-col justify-end rounded-3xl p-7 text-brand-foreground brand-shadow">
              <Sparkles className="mb-auto size-7" />
              <p className="display-font text-4xl font-extrabold">240%</p>
              <p className="text-sm opacity-80">Average lift in qualified leads</p>
            </div>
            <div className="glass-panel flex min-h-44 flex-col justify-between rounded-3xl p-7">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-brand"><span>Ron / signal</span><span className="size-2 rounded-full bg-brand-glow" /></div>
              <div><p className="display-font text-3xl font-extrabold">120+</p><p className="text-sm text-ink-muted">Brands scaled across 9 industries</p></div>
            </div>
          </div>
        </section>

        <section id="services" className="page-grid py-16">
          <div className="mb-8"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">What we do</span><h2 className="display-font mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Six ways we move the needle</h2></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description], index) => (
              <a key={title} href="#contact" className={`${index === 5 ? "brand-gradient text-brand-foreground brand-shadow" : "glass-panel"} group rounded-3xl p-7 transition-transform hover:-translate-y-1`}>
                <div className={`${index === 5 ? "bg-brand-foreground/20 text-brand-foreground" : "bg-brand-soft text-brand"} display-font grid size-11 place-items-center rounded-xl text-lg font-extrabold`}>{number}</div>
                <h3 className="display-font mt-4 text-lg font-extrabold">{title}</h3>
                <p className={`${index === 5 ? "opacity-85" : "text-ink-muted"} mt-2 text-sm leading-relaxed`}>{description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">Learn more <ArrowUpRight className="size-4" /></span>
              </a>
            ))}
          </div>
        </section>

        <section id="why" className="page-grid py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-3xl p-7 sm:p-10"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">About us</span><h2 className="display-font mt-2 text-3xl font-extrabold tracking-tight">A senior team, no fluff</h2><p className="mt-4 leading-relaxed text-ink-muted">We’re a lean studio of strategists, designers and engineers. No account-manager handoffs, no bloated retainers — just the people building your growth.</p><div className="mt-6 grid grid-cols-2 gap-4"><div className="rounded-2xl bg-brand-soft p-4"><p className="display-font text-2xl font-extrabold text-brand">8yr</p><p className="text-xs text-ink-muted">avg. client partnership</p></div><div className="rounded-2xl bg-brand-soft p-4"><p className="display-font text-2xl font-extrabold text-brand">98%</p><p className="text-xs text-ink-muted">retention rate</p></div></div></div>
            <div className="glass-panel rounded-3xl p-7 sm:p-10"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Why choose us</span><h2 className="display-font mt-2 text-3xl font-extrabold tracking-tight">Built for outcomes</h2><ul className="mt-5 space-y-4">{["Transparent pricing with a clear scope from day one.", "A dedicated strategist who knows your business.", "Monthly reports you’ll actually understand and act on.", "Practical systems that keep working after launch."].map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Check className="size-3.5" /></span><span>{item}</span></li>)}</ul><a href="#contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-brand hover:underline">Work with us <ArrowUpRight className="size-4" /></a></div>
          </div>
        </section>

        <section className="page-grid py-16"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Client results</span><h2 className="display-font mb-8 mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Trusted by ambitious teams</h2><div className="grid gap-5 md:grid-cols-3">{[[mayaPortrait, "Maya Chen", "CMO, Northwind Co", "Ron Digital rebuilt our site in six weeks and our demo bookings doubled within a month."], [davidPortrait, "David Okafor", "Founder, Vantage Labs", "The paid media team paid for itself in the first quarter. Reporting is crystal clear."], [sofiaPortrait, "Sofia Reyes", "VP Growth, Bloomly", "Finally an agency that feels like a partner, not a vendor. Our revenue is up 60%."]].map(([image, name, role, quote], index) => <figure key={name} className={`${index === 2 ? "brand-gradient text-brand-foreground brand-shadow" : "glass-panel"} rounded-3xl p-7`}><div className="flex text-brand-glow" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="mt-4 leading-relaxed opacity-90">“{quote}”</blockquote><figcaption className="mt-5 flex items-center gap-3"><img src={image} alt={`${name}, ${role}`} width={816} height={816} loading="lazy" className="size-11 rounded-full object-cover" /><div><p className="display-font text-sm font-extrabold">{name}</p><p className="text-xs opacity-70">{role}</p></div></figcaption></figure>)}</div></section>

        <section id="faq" className="page-grid max-w-3xl py-16"><h2 className="display-font text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Questions, answered</h2><div className="mt-8 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="glass-panel group overflow-hidden rounded-2xl"><summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold"><span>{question}</span><ChevronDown className="size-5 text-brand transition-transform group-open:rotate-180" /></summary><p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{answer}</p></details>)}</div></section>

        <section id="contact" className="page-grid py-16"><div className="grid gap-6 lg:grid-cols-2"><div className="brand-gradient rounded-3xl p-7 text-brand-foreground brand-shadow sm:p-10"><h2 className="display-font text-3xl font-extrabold tracking-tight">Let’s build your growth</h2><p className="mt-4 max-w-md leading-relaxed opacity-85">Tell us about your goals and we’ll send a free, no-pressure proposal within 48 hours.</p><ul className="mt-8 space-y-3 text-sm opacity-90"><li className="flex items-center gap-3"><Mail className="size-4" /> hello@rondigital.co</li><li className="flex items-center gap-3"><Sparkles className="size-4" /> Mon–Fri, 9am–6pm</li></ul></div><form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-7 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Jane Doe" required /><Field label="Email" name="email" type="email" placeholder="jane@company.com" required /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" /><label className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Service interested in<select name="service" className="mt-1.5 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring"><option>Choose a service</option><option>Website design</option><option>SEO & content</option><option>Paid media</option><option>Email & CRM</option><option>Full growth system</option></select></label></div><label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink-muted">Message<textarea name="message" rows={3} placeholder="I’d like a new website and SEO..." className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-ink-muted/70 focus:ring-2 focus:ring-ring" required /></label><button type="submit" className="brand-gradient mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-brand-foreground brand-shadow transition-transform hover:-translate-y-0.5">{submitted ? <>Request received <Check className="size-4" /></> : <>Send my request <ArrowUpRight className="size-4" /></>}</button>{submitted && <p role="status" className="mt-3 text-center text-sm font-medium text-brand">Thanks — we’ll be in touch within one business day.</p>}</form></div></section>

        <section className="page-grid py-16"><div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-center text-background sm:p-12"><div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-brand-glow/20 blur-3xl" /><h2 className="display-font relative text-3xl font-extrabold tracking-tight sm:text-5xl">Ready to grow with Ron Digital?</h2><p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-background/70">Book a free 30-minute strategy call and leave with a clear action plan — whether you hire us or not.</p><a href="#contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 font-bold text-brand transition-transform hover:-translate-y-0.5">Book your free call <ArrowUpRight className="size-4" /></a></div></section>
      </main>

      <footer className="page-grid flex flex-col items-center justify-between gap-4 py-10 text-sm text-ink-muted md:flex-row"><div><img src={ronDigitalLogo} alt="Ron Digital" width={118} height={71} className="h-9 w-auto object-contain" /></div><p>© 2026 Ron Digital. All rights reserved.</p><div className="flex gap-5"><a href="#services" className="hover:text-brand">Services</a><a href="#faq" className="hover:text-brand">FAQ</a><a href="#contact" className="hover:text-brand">Contact</a><a href="#contact" aria-label="Contact Ron Digital on LinkedIn" className="hover:text-brand"><Linkedin className="size-4" /></a></div></footer>
    </div>
  );
}

function Field({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">{label}<input name={name} type={type} placeholder={placeholder} required={required} className="mt-1.5 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm font-normal normal-case tracking-normal text-foreground outline-none placeholder:text-ink-muted/70 focus:ring-2 focus:ring-ring" /></label>;
}
