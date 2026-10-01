import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import ronLogoAsset from "@/assets/ron-digital-logo.png.asset.json";

type Filter = "All" | "Store Growth" | "Email" | "Branding" | "Technical" | "Paid Ads" | "Social Media" | "SEO";

type PortfolioProject = {
  category: Exclude<Filter, "All">;
  title: string;
  client: string;
  platform: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: readonly { value: string; label: string; note: string }[];
  services: readonly string[];
  quote: string;
  attribution: string;
};

const navigation = [
  ["About Us", "#about"],
  ["Portfolio", "#portfolio"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

const serviceOptions = ["SEO", "Website Design", "Email Marketing & Automation", "Traffic Optimization", "Conversion Optimization", "Branding & Customization", "Consultation", "Other"];

const features = [
  ["Business-Focused", "We focus on solutions that support your actual business goals."],
  ["Customized Approach", "Your business is different, so your digital strategy should not be one-size-fits-all."],
  ["User-Friendly", "We create experiences that are simple for your customers to understand and use."],
  ["Results-Oriented", "Every solution is designed with visibility, engagement, and conversions in mind."],
] as const;

const portfolioProjects: PortfolioProject[] = [
  {
    category: "Store Growth",
    title: "Complete Store Management",
    client: "Cross Toss Trading",
    platform: "Shopify",
    timeline: "Ongoing",
    challenge: "The client needed comprehensive store management to scale their e-commerce operations, increase traffic, and boost overall sales performance.",
    solution: "Implemented full store management including product optimization, traffic strategies, conversion optimization, and ongoing analytics monitoring to maximize revenue.",
    results: [
      { value: "5,260", label: "Sessions", note: "+177% increase" },
      { value: "$9,860", label: "Total Sales", note: "+55% growth" },
      { value: "100+", label: "Orders", note: "+56% increase" },
      { value: "1.81%", label: "Conversion Rate", note: "+80% improvement" },
    ],
    services: ["Store Management", "Traffic Optimization", "Sales Strategy", "Analytics"],
    quote: "Our store performance was transformed. The results speak for themselves — sales nearly doubled!",
    attribution: "Cross Toss Trading Team",
  },
  {
    category: "Email",
    title: "Email Marketing & Sales Growth",
    client: "Autumn Bliss Market",
    platform: "Shopify + Klaviyo",
    timeline: "Ongoing",
    challenge: "The health and beauty store needed a complete email marketing strategy to increase customer retention, recover abandoned carts, and drive consistent revenue from email campaigns.",
    solution: "Implemented comprehensive Klaviyo email flows including abandoned cart recovery, browse abandonment, customer winback, a welcome series, strategic campaigns, Google Tag Manager, and a full store audit.",
    results: [
      { value: "1,809", label: "Sessions", note: "+276% increase" },
      { value: "$1,835", label: "Total Sales", note: "+129% growth" },
      { value: "34", label: "Orders", note: "+55% increase" },
      { value: "100/100", label: "Store Audit", note: "SSL, mobile, content" },
    ],
    services: ["Klaviyo Email Flows", "Email Campaigns", "Google Tag Manager", "Store Audit", "Store Redesign"],
    quote: "The email automation is incredible. We're recovering sales we would have lost and customers love the personalized experience.",
    attribution: "Autumn Bliss Market Owner",
  },
  {
    category: "Branding",
    title: "German Pet Store Rebrand",
    client: "Haustierbedarf4You",
    platform: "Shopify",
    timeline: "4 weeks",
    challenge: "The German pet supply store needed a complete visual rebrand to better connect with pet owners and create a premium, trustworthy shopping experience.",
    solution: "Completed a store redesign with modern branding, an engaging pet-focused experience, German localization, multilingual support, and an optimized user journey.",
    results: [
      { value: "100%", label: "Brand Identity", note: "Complete rebrand" },
      { value: "Enhanced", label: "User Experience", note: "Modern design" },
      { value: "Yes", label: "Mobile Ready", note: "Fully responsive" },
      { value: "German", label: "Localization", note: "Native language support" },
    ],
    services: ["Store Rebrand", "Visual Design", "UX Optimization", "Localization"],
    quote: "Die Besten Produkte für Pelzige Freunde — Our new store perfectly captures our brand mission!",
    attribution: "Oliver Ormans, Owner",
  },
  {
    category: "Technical",
    title: "SSL Certificate Fix & Security",
    client: "XIT Offroad",
    platform: "E-commerce",
    timeline: "1 week",
    challenge: "The client's e-commerce store was showing SSL certificate errors, causing browser warnings that scared away customers and hurt SEO rankings.",
    solution: "Completed SSL setup and verification, including certificate parsing, chain of trust, domain validation, cipher suite negotiation, and redirect configuration.",
    results: [
      { value: "Verified", label: "SSL Status", note: "Fully secured" },
      { value: "SHA-256", label: "Certificate", note: "Industry standard" },
      { value: "100%", label: "Browser Trust", note: "No warnings" },
      { value: "Restored", label: "SEO Impact", note: "HTTPS ranking boost" },
    ],
    services: ["SSL Certificate Setup", "Security Configuration", "Domain Verification", "Technical Fixes"],
    quote: "Our customers can now shop with confidence. No more security warnings — just smooth, secure checkout.",
    attribution: "XIT Offroad Team",
  },
  {
    category: "Paid Ads",
    title: "Google Ads Campaign Management",
    client: "Soma Dental",
    platform: "Google Ads",
    timeline: "Ongoing",
    challenge: "The dental practice needed to increase patient bookings through targeted paid advertising while maintaining an efficient cost per acquisition.",
    solution: "Implemented strategic Google Ads campaigns with optimized targeting, compelling ad copy, and conversion tracking to maximize ROI and drive quality leads.",
    results: [
      { value: "1,598", label: "Conversions", note: "New patient leads" },
      { value: "21.68%", label: "Conversion Rate", note: "Above industry average" },
      { value: "1,829", label: "Clicks", note: "Qualified traffic" },
      { value: "$204.94", label: "Cost / Conversion", note: "Efficient CPA" },
    ],
    services: ["Google Ads Management", "Campaign Optimization", "Conversion Tracking", "Ad Copywriting"],
    quote: "Our patient bookings have skyrocketed since launching these Google Ads campaigns.",
    attribution: "Soma Dental Team",
  },
  {
    category: "Social Media",
    title: "Social Media Advertising",
    client: "Tropix Beverages",
    platform: "Facebook & Instagram Ads",
    timeline: "3 months",
    challenge: "The beverage brand needed to expand its reach and drive awareness across social platforms while maintaining cost efficiency.",
    solution: "Developed a Facebook and Instagram advertising strategy with audience targeting, creative optimization, and multi-platform distribution.",
    results: [
      { value: "175K", label: "Reach", note: "People reached" },
      { value: "144K", label: "Impressions", note: "Ad views" },
      { value: "1,027", label: "Clicks", note: "Engaged users" },
      { value: "$1.27", label: "Average CPC", note: "Cost efficient" },
    ],
    services: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy"],
    quote: "The reach we achieved with our advertising budget exceeded all expectations. Great ROI!",
    attribution: "Tropix Beverages Marketing Team",
  },
  {
    category: "SEO",
    title: "SEO Optimization",
    client: "Urban Pet Club",
    platform: "E-commerce",
    timeline: "Ongoing",
    challenge: "The pet supply store needed to improve organic search visibility and on-page SEO to drive more qualified traffic.",
    solution: "Conducted a comprehensive SEO audit and implemented on-page improvements across metadata, page structure, server configuration, and content quality.",
    results: [
      { value: "78%", label: "On-Page Score", note: "SEO health" },
      { value: "85%", label: "Meta Data", note: "Optimized" },
      { value: "92%", label: "Page Structure", note: "Well organized" },
      { value: "100%", label: "Server", note: "Fully optimized" },
    ],
    services: ["SEO Audit", "On-Page Optimization", "Meta Data", "Content Strategy"],
    quote: "Our organic traffic has steadily increased since implementing the SEO recommendations.",
    attribution: "Urban Pet Club Owner",
  },
];

const portfolioFilters: Filter[] = ["All", "Store Growth", "Email", "Branding", "Technical", "Paid Ads", "Social Media", "SEO"];

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const visibleProjects = activeFilter === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="page-grid flex min-h-20 items-center justify-between gap-5">
          <a href="#about" aria-label="Ron Digital home" className="shrink-0 leading-none">
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

      <main>
        <section id="about" className="page-grid grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div><span className="eyebrow">About us</span><h1 className="display-font mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Digital Solutions Built Around Your Business</h1><p className="mt-5 max-w-xl leading-relaxed text-ink-muted">Ron Digital provides practical digital solutions for businesses looking to build a stronger online presence. We combine strategy, design, visibility, customer journeys, and personalized consultation to help businesses connect with their audience.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{features.map(([title, description], index) => <div key={title} className="rounded-xl border border-border bg-background p-6 shadow-sm"><div className="flex items-center justify-between"><span className="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand"><Check className="size-4" /></span><span className="text-xs font-semibold text-ink-muted">0{index + 1}</span></div><h3 className="display-font mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p></div>)}</div>
        </section>

        <section id="portfolio" className="portfolio-night relative overflow-hidden py-24 text-background md:py-32">
          <div className="portfolio-stars pointer-events-none absolute inset-0 opacity-70" />
          <div className="page-grid relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-brand-glow">Client work</span>
              <h2 className="display-font mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Results across every growth channel</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">Explore the challenges, solutions, and client-reported outcomes behind selected Ron Digital projects.</p>
            </div>
            <div className="mt-10 flex justify-center" role="group" aria-label="Filter project concepts">
              <div className="flex max-w-4xl flex-wrap justify-center gap-2 rounded-xl border border-background/15 bg-background/[0.05] p-1.5 backdrop-blur-sm">
                {portfolioFilters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`${activeFilter === filter ? "bg-brand text-brand-foreground" : "text-navy-muted hover:text-background"} rounded-lg px-4 py-2 text-xs font-semibold transition-colors`}>{filter}</button>)}
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-navy-muted">Performance figures and quotations below are reproduced from the case-study information supplied by each project.</p>
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
              {visibleProjects.map((project) => <article key={project.client} className="overflow-hidden rounded-xl border border-background/15 bg-background/[0.06] backdrop-blur-sm">
                <div className="border-b border-background/10 p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-brand/15 px-3 py-1.5 text-xs font-semibold text-brand-glow">{project.category}</span>
                    <span className="text-xs font-medium text-navy-muted">{project.timeline}</span>
                  </div>
                  <h3 className="display-font mt-6 text-2xl font-bold">{project.client}</h3>
                  <p className="mt-1 font-medium text-brand-glow">{project.title}</p>
                  <p className="mt-2 text-sm text-navy-muted">{project.client} · {project.platform}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {project.results.map((result) => <div key={result.label} className="rounded-lg border border-background/10 bg-background/[0.05] p-4">
                      <p className="display-font text-xl font-bold text-background sm:text-2xl">{result.value}</p>
                      <p className="mt-1 text-xs font-semibold text-brand-glow">{result.label}</p>
                      <p className="mt-1 text-xs text-navy-muted">{result.note}</p>
                    </div>)}
                  </div>
                </div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-semibold sm:px-7">
                    View full case study
                    <ChevronDown className="size-5 shrink-0 text-brand-glow transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-background/10 px-6 pb-7 pt-6 sm:px-7">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div><p className="text-xs font-semibold uppercase text-brand-glow">The challenge</p><p className="mt-2 text-sm leading-relaxed text-navy-muted">{project.challenge}</p></div>
                      <div><p className="text-xs font-semibold uppercase text-brand-glow">Our solution</p><p className="mt-2 text-sm leading-relaxed text-navy-muted">{project.solution}</p></div>
                    </div>
                    <div className="mt-6"><p className="text-xs font-semibold uppercase text-brand-glow">Services applied</p><div className="mt-3 flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="rounded-md border border-background/15 px-3 py-1.5 text-xs text-navy-muted">{service}</span>)}</div></div>
                    <blockquote className="mt-7 border-l-2 border-brand-glow pl-4 text-sm italic leading-relaxed text-background">“{project.quote}”<footer className="mt-2 text-xs not-italic text-navy-muted">— {project.attribution}</footer></blockquote>
                    <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-glow hover:text-background">Start a similar project <ArrowUpRight className="size-4" /></a>
                  </div>
                </details>
              </article>)}
            </div>
          </div>
        </section>

        <section id="faq" className="page-grid max-w-3xl py-20 md:py-24"><div className="text-center"><span className="eyebrow">Questions, answered</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently Asked Questions</h2></div><div className="mt-10 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-border bg-background"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" /></summary><p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{answer}</p></details>)}</div></section>

        <section id="contact" className="navy-surface py-20 text-background md:py-24"><div className="page-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><span className="eyebrow text-brand-glow">Contact</span><h2 className="display-font mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's Build Something That Works</h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-muted">Have a project, idea, or digital challenge? Tell us what you’re working on and let’s discuss how Ron Digital can help.</p><div className="mt-10 flex items-center gap-3 text-sm text-navy-muted"><span className="grid size-10 place-items-center rounded-lg bg-background/10 text-brand-glow"><Mail className="size-4" /></span><a href="mailto:rondigital.team@gmail.com" className="hover:text-brand-glow">rondigital.team@gmail.com</a></div></div><form onSubmit={handleSubmit} className="rounded-xl border border-background/10 bg-background/[0.06] p-6 backdrop-blur-sm sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><Field label="Full Name" name="name" placeholder="Your name" required dark /><Field label="Business Name" name="business" placeholder="Your business" dark /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><Field label="Email Address" name="email" type="email" placeholder="you@business.com" required dark /><Field label="Phone Number" name="phone" type="tel" placeholder="Optional" dark /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><SelectField label="Service Needed" name="service" options={serviceOptions} dark /><SelectField label="Project Budget" name="budget" options={[...budgetOptions]} dark /></div><label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-navy-muted">Message<textarea name="message" rows={4} placeholder="Tell us a little about what you’re working on..." required className="mt-1.5 w-full resize-none rounded-lg border border-background/15 bg-background/10 px-4 py-3 text-sm font-normal normal-case tracking-normal text-background outline-none placeholder:text-navy-muted focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/30" /></label><button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">{submitted ? <>Request received <Check className="size-4" /></> : <>Send Project Request <ArrowUpRight className="size-4" /></>}</button>{submitted && <p role="status" className="mt-3 text-center text-sm text-brand-glow">Thanks — we’ll be in touch soon.</p>}</form></div></section>
      </main>

      <footer className="navy-surface border-t border-background/10 py-12 text-background"><div className="page-grid grid gap-10 md:grid-cols-3"><div><a href="#about" aria-label="Ron Digital home" className="inline-block rounded-xl bg-background p-2.5"><img src={ronLogoAsset.url} alt="Ron Digital" className="h-14 w-auto" /></a><p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-muted">Practical digital solutions for businesses ready to build, connect, and grow.</p><p className="mt-4 text-sm italic text-brand-glow">Creating Solutions. Building Connections.</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Menu</h3><div className="mt-5 grid gap-3 text-sm text-navy-muted">{navigation.map(([label, href]) => <a key={href} href={href} className="hover:text-background">{label}</a>)}</div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow">Contact</h3><a href="mailto:rondigital.team@gmail.com" className="mt-5 block break-words text-sm text-navy-muted hover:text-background">rondigital.team@gmail.com</a><div className="mt-5 flex gap-3"><a href="https://x.com/rondigitalream" target="_blank" rel="noopener noreferrer" aria-label="Ron Digital on X" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><X className="size-4" /></a><a href="#contact" aria-label="Ron Digital LinkedIn" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><Linkedin className="size-4" /></a><a href="mailto:rondigital.team@gmail.com" aria-label="Email Ron Digital" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><Mail className="size-4" /></a></div></div></div><div className="page-grid mt-10 border-t border-background/10 pt-6 text-xs text-navy-muted">© 2026 Ron Digital. All rights reserved.</div></footer>
    </div>
  );
}

function Field({ label, name, placeholder, type = "text", required = false, dark = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean; dark?: boolean }) {
  return <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>{label}<input name={name} type={type} placeholder={placeholder} required={required} className={`${dark ? "border-background/15 bg-background/10 text-background placeholder:text-navy-muted focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground placeholder:text-ink-muted/70 focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`} /></label>;
}

function SelectField({ label, name, options, dark = false }: { label: string; name: string; options: string[]; dark?: boolean }) {
  return <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>{label}<select name={name} className={`${dark ? "border-background/15 bg-background/10 text-background focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`}>{options.map((option) => <option key={option} className="text-foreground">{option}</option>)}</select></label>;
}