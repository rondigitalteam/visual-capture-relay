import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { portfolioFilters, portfolioProjects, type Filter } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Ron Digital" },
      { name: "description", content: "Explore Ron Digital client case studies across store growth, email marketing, branding, technical work, paid ads, social media, and SEO." },
      { property: "og:title", content: "Portfolio | Ron Digital" },
      { property: "og:description", content: "Client case studies with challenges, solutions, and reported results across every growth channel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects = activeFilter === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <SiteHeader />
      <main>
        <section className="portfolio-night relative overflow-hidden py-24 text-background md:py-32">
          <div className="portfolio-stars pointer-events-none absolute inset-0 opacity-70" />
          <div className="page-grid relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-brand-glow">Client work</span>
              <h1 className="display-font mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Results across every growth channel</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">Explore the challenges, solutions, and client-reported outcomes behind selected Ron Digital projects.</p>
            </div>
            <div className="mt-10 flex justify-center" role="group" aria-label="Filter project concepts">
              <div className="flex max-w-4xl flex-wrap justify-center gap-2 rounded-xl border border-background/15 bg-background/[0.05] p-1.5 backdrop-blur-sm">
                {portfolioFilters.map((filter) => (
                  <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`${activeFilter === filter ? "bg-brand text-brand-foreground" : "text-navy-muted hover:text-background"} rounded-lg px-4 py-2 text-xs font-semibold transition-colors`}>
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-navy-muted">Performance figures and quotations below are reproduced from the case-study information supplied by each project.</p>
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
              {visibleProjects.map((project) => (
                <article key={project.client} className="overflow-hidden rounded-xl border border-background/15 bg-background/[0.06] backdrop-blur-sm">
                  <div className="border-b border-background/10 p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-md bg-brand/15 px-3 py-1.5 text-xs font-semibold text-brand-glow">{project.category}</span>
                      <span className="text-xs font-medium text-navy-muted">{project.timeline}</span>
                    </div>
                    <h3 className="display-font mt-6 text-2xl font-bold">{project.client}</h3>
                    <p className="mt-1 font-medium text-brand-glow">{project.title}</p>
                    <p className="mt-2 text-sm text-navy-muted">{project.client} · {project.platform}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {project.results.map((result) => (
                        <div key={result.label} className="rounded-lg border border-background/10 bg-background/[0.05] p-4">
                          <p className="display-font text-xl font-bold text-background sm:text-2xl">{result.value}</p>
                          <p className="mt-1 text-xs font-semibold text-brand-glow">{result.label}</p>
                          <p className="mt-1 text-xs text-navy-muted">{result.note}</p>
                        </div>
                      ))}
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
                      <div className="mt-6">
                        <p className="text-xs font-semibold uppercase text-brand-glow">Services applied</p>
                        <div className="mt-3 flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="rounded-md border border-background/15 px-3 py-1.5 text-xs text-navy-muted">{service}</span>)}</div>
                      </div>
                      <blockquote className="mt-7 border-l-2 border-brand-glow pl-4 text-sm italic leading-relaxed text-background">
                        “{project.quote}”
                        <footer className="mt-2 text-xs not-italic text-navy-muted">— {project.attribution}</footer>
                      </blockquote>
                      <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-glow hover:text-background">
                        Start a similar project <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
