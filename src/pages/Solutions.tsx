import React from "react";
import { Link } from "react-router-dom";

const useCases = [
  {
    id: "enterprise-suite",
    title: "Enterprise Suite",
    industry: "Cross-Industry",
    problem:
      "Fragmented systems and siloed operations causing inefficiency and manual rework.",
    solution:
      "Unified platform combining OpsPro + FinEdge integrations for single-pane visibility.",
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    industry: "Manufacturing",
    problem: "Complex workflows, lack of visibility and manual exceptions.",
    solution:
      "End-to-end visibility with automated workflows and KPI dashboards to reduce cycle time.",
  },
  {
    id: "customer-operations",
    title: "Customer Operations",
    industry: "Retail",
    problem: "Disconnected teams, poor handoffs and inconsistent CX.",
    solution:
      "Seamless integration across CRM and fulfillment pipelines to improve resolution times.",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    industry: "Banking",
    problem: "Heavy compliance overhead and manual governance tasks.",
    solution:
      "Automated governance powered by FinEdge — audit-ready processes and reconciliations.",
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Platform",
    industry: "Healthcare",
    problem: "Data silos and fragmented patient / operational records.",
    solution:
      "Secure data hub with document intelligence and human-in-the-loop validation for accuracy.",
  },
  {
    id: "logistics-hub",
    title: "Logistics Hub",
    industry: "Logistics",
    problem: "Manual tracking, low traceability and slow exception handling.",
    solution:
      "Real-time monitoring and event-driven automation to speed up exception resolution.",
  },
];

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 text-center">
          <h1 className="reveal text-4xl font-bold text-teal-600 mb-4">
            Solutions
          </h1>

          <p className="reveal reveal-delay-1 text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-specific platforms and workflows to drive operational
            excellence and measurable outcomes.
          </p>

          <p className="reveal reveal-delay-2 text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
            We combine proven processes, human-in-the-loop AI, and outcome-based
            SLAs to deliver scale quickly.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {useCases.map((u, idx) => (
              <article
                key={u.id}
                className={`
                  reveal
                  reveal-delay-${(idx % 4) + 1}
                  border border-gray-200 rounded-lg p-6 bg-white shadow-sm
                  hover:shadow-lg hover:border-teal-600 transition-all duration-300
                  transform will-change-transform h-full flex flex-col
                `}
                aria-labelledby={`usecase-${u.id}`}
              >
                {/* IMAGE HOLDER - added to match CaseStudies/Insights */}
                <div className="mb-4 -mx-6 mt-0 rounded-t-lg overflow-hidden">
                  <div className="h-36 flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 border border-gray-100 relative">
                    <svg
                      className="h-12 w-12 text-teal-600 opacity-90"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M3 7h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 11h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 15h6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div
                      className="absolute right-6 top-6 rounded-full"
                      style={{
                        width: 12,
                        height: 12,
                        background: "rgba(16,185,129,0.08)",
                        filter: "blur(6px)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase text-teal-600 mb-2">
                    {u.industry}
                  </div>

                  <h3
                    id={`usecase-${u.id}`}
                    className="text-lg font-semibold text-gray-900 mb-3"
                  >
                    {u.title}
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        Problem
                      </div>
                      <p className="text-gray-600">{u.problem}</p>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-1">
                        Solution
                      </div>
                      {/* kept text color same (teal in original examples); not changing other colours */}
                      <p className="text-sm text-teal-600 font-medium">
                        {u.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer: align actions to bottom for symmetry */}
                <footer className="mt-auto pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      to={`/solutions/${u.id}`}
                      className="text-sm font-semibold text-gray-900 hover:text-teal-600"
                      aria-label={`Learn more about ${u.title}`}
                    >
                      Learn more
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-block rounded-md bg-teal-600 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
                      aria-label={`Request demo for ${u.title}`}
                    >
                      Request demo
                    </Link>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="reveal text-2xl font-bold text-gray-900 mb-4">
            Want a tailored solution?
          </h3>
          <p className="reveal reveal-delay-1 text-gray-600 max-w-2xl mx-auto mb-6">
            We design pilots and custom bundles to match your industry needs and
            KPIs.
          </p>
          <Link
            to="/contact"
            className="reveal reveal-delay-2 inline-block rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
          >
            Contact us for a pilot
          </Link>
        </div>
      </section>
    </div>
  );
}
