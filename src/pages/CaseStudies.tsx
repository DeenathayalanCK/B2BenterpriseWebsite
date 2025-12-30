// src/components/CaseStudies.tsx
import AnimatedSection from "../components/AnimatedSection";

export default function CaseStudies() {
  const cases = [
    {
      client: "Global Retailer",
      industry: "Retail",
      outcome: "40% improvement in order processing efficiency",
      solution: "OpsPro – End-to-end operational management",
      metric: "Efficiency",
    },
    {
      client: "Tech Enterprise",
      industry: "Technology",
      outcome: "60% faster deployment of back-office workflows",
      solution: "SmartOpsAI + RPA Monitoring",
      metric: "Speed",
    },
    {
      client: "Manufacturing Corp",
      industry: "Manufacturing",
      outcome: "35% reduction in operational overhead",
      solution: "FinEdge: Plus + Process Optimization",
      metric: "Cost",
    },
    {
      client: "Financial Institution",
      industry: "Banking",
      outcome: "50% faster financial & MIS reporting",
      solution: "Finance & Accounting Outsourcing (FinEdge)",
      metric: "Performance",
    },
    {
      client: "Healthcare Network",
      industry: "Healthcare",
      outcome: "70% improvement in workflow accuracy and compliance",
      solution: "Human-guided AI workflows & Document Intelligence",
      metric: "Operations",
    },
    {
      client: "Logistics Provider",
      industry: "Logistics",
      outcome: "45% operational savings across claims & order processing",
      solution: "OpsLite + AutoAssist human-in-the-loop support",
      metric: "Savings",
    },
  ];

  return (
    <section className="bg-white border-t border-gray-100">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results. Measurable Impact.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Precision-powered operations for growing businesses — combining
            documented processes, human expertise and AI-enabled automation to
            deliver predictable outcomes.
          </p>
        </AnimatedSection>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <AnimatedSection
              key={c.client}
              className={`reveal-delay-${(i % 4) + 1}`}
            >
              <article
                role="article"
                aria-labelledby={`case-${i}-title`}
                className="group h-full flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* visual */}
                <div className="relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border border-gray-100">
                  {/* simple SVG/chart icon */}
                  <svg
                    className="h-14 w-14 text-teal-600 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="11"
                      width="3"
                      height="8"
                      rx="0.5"
                      fill="currentColor"
                    />
                    <rect
                      x="9"
                      y="6"
                      width="3"
                      height="13"
                      rx="0.5"
                      fill="currentColor"
                    />
                    <rect
                      x="15"
                      y="4"
                      width="3"
                      height="15"
                      rx="0.5"
                      fill="currentColor"
                    />
                  </svg>

                  {/* subtle floating particle in card (decor) */}
                  <div
                    className="absolute right-3 top-3 rounded-full"
                    style={{
                      width: 12,
                      height: 12,
                      background: "rgba(16,185,129,0.08)",
                      filter: "blur(6px)",
                    }}
                  />
                </div>

                {/* header row */}
                <div className="mb-3 flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    {c.industry}
                  </span>
                  <span
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-transform duration-200 group-hover:scale-105"
                    aria-hidden
                  >
                    {c.metric}
                  </span>
                </div>

                {/* title & outcome */}
                <h3
                  id={`case-${i}-title`}
                  className="text-lg font-semibold text-gray-900 mb-2"
                >
                  {c.client}
                </h3>

                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  <strong className="text-teal-600">Outcome:</strong>{" "}
                  {c.outcome}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Kovaidesk Solution
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {c.solution}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA + trust */}
        <div className="mt-16 rounded-xl bg-gray-50 p-8 text-center">
          <AnimatedSection>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Delivering measurable results across industries
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Operational excellence with documented workflows,
              human-in-the-loop AI, and SLA-driven delivery — built on 30+ years
              of global outsourcing experience.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
              >
                Request Detailed Case Study
              </a>

              <a
                href="mailto:info@kovaidesk.com?subject=Request%20Case%20Study"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Contact Sales
              </a>
            </div>

            {/* trust metrics */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-gray-900">30+</span>
                <span className="text-xs text-gray-500">
                  Years of experience
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-gray-900">9.5+</span>
                <span className="text-xs text-gray-500">
                  NPS Client Satisfaction
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-gray-900">90%+</span>
                <span className="text-xs text-gray-500">
                  Employee engagement
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
