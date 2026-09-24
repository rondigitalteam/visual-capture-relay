import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardList,
  Code2,
  Compass,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Palette,
  Search,
  Send,
  Sparkles,
  Target,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import ronLogoAsset from "@/assets/ron-digital-logo.png.asset.json";
import davidPortrait from "@/assets/ron-client-david.jpg";
import mayaPortrait from "@/assets/ron-client-maya.jpg";
import sofiaPortrait from "@/assets/ron-client-sofia.jpg";

type Filter = "All" | "Websites" | "Branding" | "Marketing" | "E-commerce";

const navigation = [
  ["Home", "#top"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["About", "#about"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

const services: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "SEO", description: "Help your business become easier to find when potential customers search online.", icon: Search },
  { number: "02", title: "Website Design", description: "Create a professional, user-friendly website that makes it easy for visitors to take action.", icon: Globe2 },
  { number: "03", title: "Email Marketing & Automation", description: "Keep customers engaged with thoughtful emails and automated follow-ups that turn interest into action.", icon: Send },
  { number: "04", title: "Traffic Optimization", description: "Attract more of the people who are most likely to become customers through smarter traffic decisions.", icon: BarChart3 },
  { number: "05", title: "Conversion Optimization", description: "Improve the website experience so more visitors buy, book, sign up, or get in touch.", icon: Target },
  { number: "06", title: "Branding & Customization", description: "Build a consistent, professional look that makes your business easier to recognize and remember.", icon: Palette },
  { number: "07", title: "Consultation", description: "Get practical guidance on your website, customer journey, marketing, or online growth strategy.", icon: Compass },
];

const features = [
  ["Business-Focused", "We focus on solutions that support your actual business goals."],
  ["Customized Approach", "Your business is different, so your digital strategy should not be one-size-fits-all."],
  ["User-Friendly", "We create experiences that are simple for your customers to understand and use."],
  ["Results-Oriented", "Every solution is designed with visibility, engagement, and conversions in mind."],
] as const;

const portfolioProjects = [
  { name: "Northstar Commerce", category: "Websites" as Filter, type: "Website concept", description: "A clearer product journey for a growing online retailer." },
  { name: "Signal Studio", category: "Branding" as Filter, type: "Brand system concept", description: "A focused visual system for a modern service business." },
  { name: "Nurture Flow", category: "Marketing" as Filter, type: "Email system concept", description: "A welcome journey designed to turn interest into action." },
  { name: "Atlas Checkout", category: "E-commerce" as Filter, type: "Conversion concept", description: "A simpler path from product discovery to purchase." },
];

const processSteps = [
  ["01", "Consultation", "We learn about your business, goals, and current challenges.", ClipboardList],
  ["02", "Strategy", "We identify the right solution and create a clear plan.", Compass],
  ["03", "Build", "We develop and implement the agreed solution.", Code2],
  ["04", "Optimize", "We review the results and identify opportunities for improvement.", Workflow],
] as const;

const testimonials = [
  [mayaPortrait, "Example placeholder", "Business owner", "Ron Digital helped us create a much clearer online presence and gave us better direction for reaching our customers."],
  [davidPortrait, "Example placeholder", "Marketing lead", "The process felt practical from the first conversation, with clear next steps instead of unnecessary complexity."],
  [sofiaPortrait, "Example placeholder", "Founder", "A thoughtful digital partner for businesses that want to build, connect, and grow with confidence."],
] as const;

const faqs = [
  ["What services does Ron Digital offer?", "We offer SEO, website design, email marketing and automation, traffic optimization, conversion optimization, branding, and consultation."],
  ["How can Ron Digital help my business?", "We connect the right digital improvements to your business goals, helping you become easier to find, easier to trust, and easier to choose."],
  ["Do you design websites from scratch?", "Yes. We can shape a new website from strategy through launch, including its structure, content direction, design, and conversion path."],
  ["Can you improve my existing website?", "Yes. We can review what is working, identify friction, and recommend focused improvements rather than starting over unnecessarily."],
  ["Do you provide email marketing and automation?", "Yes. We can help plan email journeys, write useful follow-ups, and organize automations around your customer journey."],
  ["Can you help improve my website conversions?", "Yes. We look at the experience, messaging, calls to action, and key paths so more of the right visitors take the next step."],
  ["Can your services be customized?", "Absolutely. Every recommendation is shaped around your audience, goals, timeline, and current systems."],
  ["How much does a project cost?", "Projects start from $500. The final price depends on the scope, requirements, and level of support your project needs."],
  ["What is the minimum project budget?", "Our projects start from $500. A consultation helps us match the right starting point to your priorities."],
  ["How do I get started?", "Send a project request or email rondigital.team@gmail.com. We will review your goals and suggest a practical next step."],
] as const;

const budgetOptions = ["$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+"] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ron Digital | Digital Solutions That Help Businesses Grow" },
      { name: "description", content: "Ron Digital creates practical websites, search, email, branding, and conversion solutions for businesses ready to build, connect, and grow." },
      { property: "og:title", content: "Ron Digital | Digital Solutions That Help Businesses Grow" },
      { property: "og:description", content: "Practical digital solutions for businesses ready to build a stronger online presence and connect with the right customers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [budget, setBudget] = useState<(typeof budgetOptions)[number]>(budgetOptions[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const visibleProjects = activeFilter === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="page-grid flex min-h-20 items-center justify-between gap-5">
          <a href="#top" aria-label="Ron Digital home" className="shrink-0 leading-none">
            <img src={ronLogoAsset.url} alt="Ron Digital" className="h-14 w-auto md:h-16" />
          </a>
          <nav className="hidden items-center gap-5 text-sm text-ink-muted xl:flex" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-brand">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand sm:inline-flex">Book a Consultation</a>
            <button type="button" className="grid size-10 place-items-center rounded-lg border border-border bg-background text-brand xl:hidden" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {mobileOpen && <nav className="absolute inset-x-4 top-[calc(100%-0.25rem)] grid gap-1 rounded-xl border border-border bg-background p-3 shadow-lg xl:hidden" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className="rounded-lg px-4 py-3 text-sm text-ink-muted hover:bg-brand-soft hover:text-brand" onClick={() => setMobileOpen(false)}>{label}</a>)}
            <a href="#contact" className="mt-1 rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-background" onClick={() => setMobileOpen(false)}>Book a Consultation</a>
          </nav>}
        </div>
      </header>

      <main id="top">
        <section className="navy-surface relative overflow-hidden text-background">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="page-grid relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:py-32">
            <div className="max-w-3xl lg:col-span-8">
              <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow"><span className="size-2 rounded-full bg-brand-glow" />Practical digital solutions</span>
              <h1 className="display-font max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Creating Digital Solutions That Help Businesses <span className="text-brand-glow">Grow.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-muted sm:text-xl">From websites and branding to search visibility, email systems, traffic, and conversions, Ron Digital helps businesses create a stronger digital presence and connect with the right customers.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">Book a Consultation <ArrowUpRight className="size-4" /></a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-6 py-3.5 font-semibold text-background transition-colors hover:border-brand-glow hover:text-brand-glow">Explore Our Services</a>
              </div>
              <p className="mt-10 flex items-center gap-3 text-sm text-navy-muted"><Check className="size-4 text-brand-glow" />Practical digital solutions built around your business goals.</p>
            </div>
            <div className="relative hidden min-h-80 lg:col-span-4 lg:block">
              <div className="absolute inset-5 rounded-[2rem] border border-background/15 bg-background/[0.04]" />
              <div className="absolute right-2 top-8 w-56 rounded-xl border border-background/15 bg-background/[0.08] p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-navy-muted"><span>Growth system</span><Sparkles className="size-4 text-brand-glow" /></div>
                <div className="mt-8 flex items-end gap-2"><span className="display-font text-4xl font-bold text-background">01</span><span className="mb-1 text-sm text-navy-muted">clear next step</span></div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/10"><div className="h-full w-3/4 rounded-full bg-brand-glow" /></div>
              </div>
              <div className="absolute bottom-8 left-0 w-60 rounded-xl bg-background p-5 text-ink shadow-2xl">
                <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-lg bg-brand-soft text-brand"><Target className="size-5" /></div><div><p className="text-xs text-ink-muted">Focus</p><p className="font-semibold">Attract · Engage · Convert</p></div></div>
                <div className="mt-6 grid grid-cols-3 gap-2"><span className="h-12 rounded-md bg-brand-soft" /><span className="mt-3 h-9 rounded-md bg-sky-wash" /><span className="mt-1 h-11 rounded-md bg-brand-soft" /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-wash py-20 md:py-24">
          <div className="page-grid">
            <div className="mb-12 max-w-2xl"><span className="eyebrow">What we can help you with</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Simple, practical digital solutions</h2><p className="mt-4 leading-relaxed text-ink-muted">Designed to help your business attract, engage, and convert without adding unnecessary complexity.</p></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ number, title, description, icon: Icon }, index) => <a key={title} href="#contact" className={`${index === 6 ? "navy-surface text-background" : "bg-background"} group rounded-xl border border-border p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg ${index === 1 ? "lg:col-span-2" : ""}`}>
                <div className={`${index === 6 ? "bg-background/10 text-brand-glow" : "bg-brand-soft text-brand"} grid size-11 place-items-center rounded-lg`}><Icon className="size-5" /></div>
                <span className={`${index === 6 ? "text-navy-muted" : "text-ink-muted"} mt-6 block text-xs font-semibold tracking-[0.16em]`}>{number}</span>
                <h3 className="display-font mt-2 text-lg font-bold">{title}</h3>
                <p className={`${index === 6 ? "text-navy-muted" : "text-ink-muted"} mt-3 text-sm leading-relaxed`}>{description}</p>
                <span className={`${index === 6 ? "text-brand-glow" : "text-brand"} mt-5 inline-flex items-center gap-1 text-sm font-semibold`}>Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </a>)}
            </div>
          </div>
        </section>

        <section id="about" className="page-grid grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div><span className="eyebrow">Why Ron Digital</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Digital Solutions Built Around Your Business</h2><p className="mt-5 max-w-xl leading-relaxed text-ink-muted">Ron Digital provides practical digital solutions for businesses looking to build a stronger online presence. We combine strategy, design, visibility, customer journeys, and personalized consultation to help businesses connect with their audience.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-brand hover:underline">Work With Ron Digital <ArrowUpRight className="size-4" /></a></div>
          <div className="grid gap-3 sm:grid-cols-2">{features.map(([title, description], index) => <div key={title} className="rounded-xl border border-border bg-background p-6 shadow-sm"><div className="flex items-center justify-between"><span className="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand"><Check className="size-4" /></span><span className="text-xs font-semibold text-ink-muted">0{index + 1}</span></div><h3 className="display-font mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p></div>)}</div>
        </section>

        <section id="portfolio" className="portfolio-night relative overflow-hidden py-24 text-background md:py-32">
          <div className="portfolio-stars pointer-events-none absolute inset-0 opacity-70" />
          <div className="page-grid relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-brand-glow">Selected concepts</span>
              <h2 className="display-font mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">A closer look at what we create</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">A curated look at sample digital experiences and brand systems. These are concept examples for layout only, not completed client work.</p>
            </div>
            <div className="mt-10 flex justify-center" role="group" aria-label="Filter project concepts">
              <div className="flex flex-wrap justify-center gap-2 rounded-full border border-background/15 bg-background/[0.05] p-1.5 backdrop-blur-sm">
                {(["All", "Websites", "Branding", "Marketing", "E-commerce"] as Filter[]).map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`${activeFilter === filter ? "bg-brand text-brand-foreground" : "text-navy-muted hover:text-background"} rounded-full px-4 py-2 text-xs font-semibold transition-colors`}>{filter}</button>)}
              </div>
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-2">
              {visibleProjects.map((project, index) => <article key={project.name} className={`group ${index % 2 === 1 ? "md:mt-16" : ""}`}>
                <div className={`${index % 2 === 0 ? "portfolio-frame-light" : "portfolio-frame-blue"} relative aspect-[1.3] overflow-hidden rounded-2xl border border-background/15 p-4 shadow-2xl transition-transform duration-300 group-hover:-translate-y-2`}>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-background/15 bg-ink/80">
                    <div className="flex h-9 shrink-0 items-center justify-between border-b border-background/10 px-4"><div className="flex gap-1.5"><span className="size-2 rounded-full bg-brand-glow/70" /><span className="size-2 rounded-full bg-background/35" /><span className="size-2 rounded-full bg-background/20" /></div><span className="text-[10px] uppercase tracking-[0.18em] text-navy-muted">{project.category}</span></div>
                    <div className="grid flex-1 grid-cols-[0.85fr_1.15fr] gap-5 p-6">
                      <div className="flex flex-col justify-between"><div><div className="h-2 w-14 rounded-full bg-brand-glow" /><div className="mt-7 h-4 w-11/12 rounded bg-background/85" /><div className="mt-2 h-4 w-4/5 rounded bg-background/35" /><div className="mt-2 h-4 w-3/5 rounded bg-background/20" /></div><div className="h-8 w-24 rounded-md bg-brand/80" /></div>
                      <div className="relative overflow-hidden rounded-lg border border-background/10 bg-background/[0.06] p-4"><div className="flex h-full items-end gap-2"><div className="h-2/5 flex-1 rounded-t bg-brand/30" /><div className="h-3/5 flex-1 rounded-t bg-brand/50" /><div className="h-4/5 flex-1 rounded-t bg-brand" /><div className="h-full flex-1 rounded-t bg-brand-glow" /></div><div className="absolute inset-x-4 top-5 h-px bg-background/10" /><div className="absolute inset-x-4 top-1/2 h-px bg-background/10" /></div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4"><div><span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-glow">{project.type}</span><h3 className="display-font mt-2 text-2xl font-bold transition-colors group-hover:text-brand-glow">{project.name}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-muted">{project.description}</p></div><a href="#contact" aria-label={`Discuss ${project.name}`} className="grid size-11 shrink-0 place-items-center rounded-full border border-background/20 text-brand-glow transition-colors hover:bg-brand hover:text-brand-foreground"><ArrowUpRight className="size-4" /></a></div>
              </article>)}
            </div>
            <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-5 border-t border-background/15 pt-8 text-center sm:flex-row sm:text-left"><div><h3 className="display-font text-xl font-bold">Have a project in mind?</h3><p className="mt-1 text-sm text-navy-muted">Let’s turn the next idea into something useful.</p></div><a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">Let's Discuss Your Project <ArrowUpRight className="size-4" /></a></div>
          </div>
        </section>

        <section id="process" className="navy-surface py-20 text-background md:py-24"><div className="page-grid"><div className="mx-auto max-w-2xl text-center"><span className="eyebrow text-brand-glow">How it works</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">A clear path from idea to improvement</h2></div><div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">{processSteps.map(([number, title, description, Icon], index) => <div key={number} className="relative"><div className="mb-5 flex items-center gap-4"><span className={`${index === 0 ? "bg-brand text-brand-foreground" : "border border-background/20 bg-background/10 text-brand-glow"} grid size-12 place-items-center rounded-full font-bold`}>{number}</span>{index < processSteps.length - 1 && <span className="hidden h-px flex-1 bg-background/15 md:block" />}</div><Icon className="size-5 text-brand-glow" /><h3 className="display-font mt-4 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-navy-muted">{description}</p></div>)}</div></div></section>

        <section id="testimonials" className="page-grid py-20 md:py-24"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="eyebrow">Client perspective</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">What Our Clients Say</h2></div><p className="max-w-sm text-sm leading-relaxed text-ink-muted">Placeholder examples shown for layout only. They can be replaced with approved client feedback.</p></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map(([image, name, role, quote], index) => <figure key={role} className={`${index === 1 ? "navy-surface text-background" : "bg-background"} rounded-xl border border-border p-6 shadow-sm`}><div className="flex items-center gap-1 text-brand-glow" aria-label="Example five star rating">★★★★★</div><blockquote className="mt-5 text-sm leading-relaxed">“{quote}”</blockquote><figcaption className="mt-6 flex items-center gap-3"><img src={image} alt="Placeholder client portrait" width={816} height={816} loading="lazy" className="size-11 rounded-full object-cover" /><div><p className="font-semibold">{name}</p><p className={`${index === 1 ? "text-navy-muted" : "text-ink-muted"} text-xs`}>{role}</p></div></figcaption></figure>)}</div></section>

        <section className="section-wash py-20 md:py-24"><div className="page-grid"><div className="mx-auto max-w-3xl rounded-xl border border-border bg-background p-7 shadow-sm sm:p-10"><div className="text-center"><span className="eyebrow">Project planning</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight">Planning a Project?</h2><p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-muted">Our projects start from $500. Tell us what you need and we’ll help determine the right solution for your business.</p></div><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{budgetOptions.map((option) => <button key={option} type="button" onClick={() => setBudget(option)} className={`${budget === option ? "border-brand bg-brand-soft text-brand" : "border-border bg-background text-ink-muted hover:border-brand/60"} rounded-lg border-2 px-4 py-4 text-left text-sm font-semibold transition-colors`}><span className="block mb-1 text-xs font-normal">Estimated range</span>{option}</button>)}</div><div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-lg bg-sky-wash p-5 text-center sm:flex-row sm:text-left"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Selected budget</p><p className="display-font mt-1 text-xl font-bold">{budget}</p></div><a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-background hover:bg-brand">Start a Conversation <ArrowUpRight className="size-4" /></a></div></div></div></section>

        <section id="faq" className="page-grid max-w-3xl py-20 md:py-24"><div className="text-center"><span className="eyebrow">Questions, answered</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently Asked Questions</h2></div><div className="mt-10 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-border bg-background"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" /></summary><p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{answer}</p></details>)}</div></section>

        <section id="contact" className="navy-surface py-20 text-background md:py-24"><div className="page-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><span className="eyebrow text-brand-glow">Start a conversation</span><h2 className="display-font mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's Build Something That Works</h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-muted">Have a project, idea, or digital challenge? Tell us what you’re working on and let’s discuss how Ron Digital can help.</p><div className="mt-10 flex items-center gap-3 text-sm text-navy-muted"><span className="grid size-10 place-items-center rounded-lg bg-background/10 text-brand-glow"><Mail className="size-4" /></span><a href="mailto:rondigital.team@gmail.com" className="hover:text-brand-glow">rondigital.team@gmail.com</a></div><p className="mt-5 text-sm text-navy-muted">Prefer email? <a href="mailto:rondigital.team@gmail.com" className="text-brand-glow hover:underline">rondigital.team@gmail.com</a></p></div><form onSubmit={handleSubmit} className="rounded-xl border border-background/10 bg-background/[0.06] p-6 backdrop-blur-sm sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><Field label="Full Name" name="name" placeholder="Your name" required dark /><Field label="Business Name" name="business" placeholder="Your business" dark /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><Field label="Email Address" name="email" type="email" placeholder="you@business.com" required dark /><Field label="Phone Number" name="phone" type="tel" placeholder="Optional" dark /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><SelectField label="Service Needed" name="service" options={services.map((service) => service.title).concat("Other")} dark /><SelectField label="Project Budget" name="budget" options={[...budgetOptions]} dark /></div><label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-navy-muted">Message<textarea name="message" rows={4} placeholder="Tell us a little about what you’re working on..." required className="mt-1.5 w-full resize-none rounded-lg border border-background/15 bg-background/10 px-4 py-3 text-sm font-normal normal-case tracking-normal text-background outline-none placeholder:text-navy-muted focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/30" /></label><button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">{submitted ? <>Request received <Check className="size-4" /></> : <>Send Project Request <ArrowUpRight className="size-4" /></>}</button>{submitted && <p role="status" className="mt-3 text-center text-sm text-brand-glow">Thanks — we’ll be in touch soon.</p>}</form></div></section>

        <section className="page-grid py-16"><div className="navy-surface rounded-xl p-8 text-background sm:p-12"><div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><span className="eyebrow text-brand-glow">The next step</span><h2 className="display-font mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Build a Better Digital Presence?</h2><p className="mt-4 max-w-xl leading-relaxed text-navy-muted">Let's create solutions that help you connect with your audience and move your business forward.</p></div><div className="flex shrink-0 flex-wrap gap-3"><a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3.5 font-semibold text-brand-foreground hover:bg-brand-glow">Book a Consultation <ArrowUpRight className="size-4" /></a><a href="mailto:rondigital.team@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-5 py-3.5 font-semibold text-background hover:border-brand-glow hover:text-brand-glow">Contact Us <Mail className="size-4" /></a></div></div></div></section>
      </main>

      <footer className="navy-surface border-t border-background/10 py-12 text-background"><div className="page-grid grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]"><div><a href="#top" aria-label="Ron Digital home" className="inline-block rounded-xl bg-white p-2.5"><img src={ronLogoAsset.url} alt="Ron Digital" className="h-14 w-auto" /></a><p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-muted">Practical digital solutions for businesses ready to build, connect, and grow.</p><p className="mt-4 text-sm italic text-brand-glow">Creating Solutions. Building Connections.</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Quick links</h3><div className="mt-5 grid gap-3 text-sm text-navy-muted">{navigation.slice(0, 7).map(([label, href]) => <a key={href} href={href} className="hover:text-background">{label}</a>)}</div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Services</h3><div className="mt-5 grid gap-3 text-sm text-navy-muted">{services.slice(0, 5).map((service) => <a key={service.title} href="#services" className="hover:text-background">{service.title}</a>)}</div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Contact</h3><a href="mailto:rondigital.team@gmail.com" className="mt-5 block break-words text-sm text-navy-muted hover:text-background">rondigital.team@gmail.com</a><div className="mt-5 flex gap-3"><a href="https://x.com/rondigitalream" target="_blank" rel="noopener noreferrer" aria-label="Ron Digital on X" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><X className="size-4" /></a><a href="#contact" aria-label="Ron Digital LinkedIn" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><Linkedin className="size-4" /></a><a href="#contact" aria-label="Contact Ron Digital" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><Mail className="size-4" /></a></div></div></div><div className="page-grid mt-10 border-t border-background/10 pt-6 text-xs text-navy-muted">© 2026 Ron Digital. All rights reserved.</div></footer>
    </div>
  );
}

function Field({ label, name, placeholder, type = "text", required = false, dark = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean; dark?: boolean }) {
  return <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>{label}<input name={name} type={type} placeholder={placeholder} required={required} className={`${dark ? "border-background/15 bg-background/10 text-background placeholder:text-navy-muted focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground placeholder:text-ink-muted/70 focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`} /></label>;
}

function SelectField({ label, name, options, dark = false }: { label: string; name: string; options: string[]; dark?: boolean }) {
  return <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>{label}<select name={name} className={`${dark ? "border-background/15 bg-background/10 text-background focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`}>{options.map((option) => <option key={option} className="text-foreground">{option}</option>)}</select></label>;
}