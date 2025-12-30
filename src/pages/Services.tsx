import { Link } from "react-router-dom";

type Service = {
  id: string;
  title: string;
  short: string;
  bullets?: string[];
  solution?: { name: string; summary?: string }[];
};

const services: Service[] = [
  {
    id: "back-office",
    title: "Back-Office Operations",
    short:
      "Efficient, SLA-driven execution to keep your business running smoothly.",
    bullets: [
      "Data entry & processing",
      "MIS & Power BI reporting",
      "Order / claims / forms processing",
      "Email & chat support",
    ],
    solution: [
      { name: "OpsLite", summary: "Essential back-office & email support" },
      { name: "OpsPro", summary: "End-to-end operational management" },
    ],
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    short: "Audit-ready financial operations managed with zero compromise.",
    bullets: [
      "Bookkeeping (QuickBooks, Xero, Zoho)",
      "AP/AR management & reconciliations",
      "Payroll & tax data preparation",
    ],
    solution: [
      { name: "FinEdge: Basic", summary: "Bookkeeping + AR" },
      { name: "FinEdge: Plus", summary: "Full-service F&A" },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation Support",
    short: "Human-guided AI workflows for accuracy at scale.",
    bullets: [
      "Data labeling & annotation",
      "Document intelligence (OCR, auto-classification)",
      "Chatbot training & RPA bot monitoring",
    ],
    solution: [
      { name: "SmartOpsAI", summary: "Annotation & classification" },
      { name: "AutoAssist", summary: "Human-in-the-loop process support" },
    ],
  },
  {
    id: "creative",
    title: "Creative & E-commerce Support",
    short: "Conversion-ready digital assets and catalog support.",
    bullets: [
      "Graphic design & presentation formatting",
      "E-commerce catalog & product listing",
      "Content moderation",
    ],
    solution: [
      { name: "DesignDesk", summary: "Creative + catalog bundle" },
      { name: "BrandBack", summary: "Decks + moderation" },
    ],
  },
  {
    id: "hr",
    title: "HR Managed Services",
    short: "On-demand skilled resources for continuity and scale.",
    bullets: [
      "Hiring support & profile screening",
      "Lifecycle management & workplace wellness",
      "Project-based staffing & seasonal fulfilment",
    ],
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant Services",
    short:
      "Professional remote admin support to keep your operations efficient.",
    bullets: [
      "Calendar & appointment management",
      "Travel & expense coordination",
      "CRM data upkeep and task administration",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            {/* main heading uses KovAIdesk teal */}
            <h1 className="reveal text-4xl font-bold text-teal-600 mb-4">
              Our Services
            </h1>
            <p className="reveal reveal-delay-1 text-lg text-gray-600 max-w-2xl mx-auto">
              Precision-powered operations combining automation with human
              expertise — faster, more accurate, and scalable outcomes.
            </p>
            <p className="reveal reveal-delay-2 text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
              We blend into your existing workflows and tools with minimal
              onboarding time. Choose a package or request a tailored solution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {services.map((s, idx) => (
              <article
                key={s.id}
                className={`
                  reveal
                  reveal-delay-${(idx % 4) + 1}
                  p-6 border border-gray-200 rounded-lg bg-white shadow-sm
                  hover:border-teal-600 hover:shadow-lg transition-all duration-300
                  transform will-change-transform h-full flex flex-col
                `}
                aria-labelledby={`svc-${s.id}`}
              >
                {/* IMAGE HOLDER */}
                <div className="mb-4 -mx-6 mt-0 rounded-t-lg overflow-hidden">
                  <div className="h-36 flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 border border-gray-100">
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

                <header>
                  {/* title uses teal to match request */}
                  <h3
                    id={`svc-${s.id}`}
                    className="text-xl font-semibold text-teal-600 mb-2"
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{s.short}</p>
                </header>

                {s.bullets && (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {s.solution && (
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      Solutions
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.solution.map((sol, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 border rounded-full border-gray-200 bg-gray-50 text-gray-700"
                          title={sol.summary}
                        >
                          {sol.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer (kept consistent & symmetrical across all cards) */}
                <footer className="mt-auto w-full">
                  <div className="mt-6 flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Link
                      to={`/services/${s.id}`}
                      className="text-sm font-semibold text-gray-900 hover:text-teal-600"
                      aria-label={`Learn more about ${s.title}`}
                    >
                      Learn more
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-block rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
                      aria-label={`Request ${s.title} solution`}
                    >
                      Request a demo
                    </Link>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories / Approach */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="reveal text-3xl font-bold text-teal-600 mb-6">
            How we deliver
          </h2>
          <p className="reveal reveal-delay-1 text-gray-600 max-w-3xl mx-auto mb-8">
            We use mature processes, measurable SLAs and human-in-the-loop AI to
            deliver predictable outcomes from Day 1.
          </p>

          <div className="grid gap-6 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="reveal reveal-delay-2 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Implementation
              </h3>
              <p className="text-sm text-gray-600">
                Rapid onboarding, process mapping, and pilot delivery.
              </p>
            </div>

            <div className="reveal reveal-delay-3 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Integration
              </h3>
              <p className="text-sm text-gray-600">
                We integrate with your CRM, ERP and existing tools with minimal
                disruption.
              </p>
            </div>

            {/* Managed Support was previously inconsistent — ensure it has reveal + delay like others */}
            <div className="reveal reveal-delay-4 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Managed Support
              </h3>
              <p className="text-sm text-gray-600">
                SLA-backed support, analytics, and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages / Example Offerings */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="reveal text-3xl font-bold text-teal-600">
              Example Packages
            </h2>
            <p className="reveal reveal-delay-1 text-gray-600 max-w-2xl mx-auto">
              Pick a starting package or request a tailored bundle that matches
              your operational goals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="reveal reveal-delay-2 p-6 border border-gray-200 rounded-lg bg-white">
              {/* IMAGE HOLDER - package */}
              <div className="mb-4 -mx-6 mt-0 rounded-t-lg overflow-hidden">
                <div className="h-28 flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 border border-gray-100">
                  <svg
                    className="h-10 w-10 text-teal-600 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 10h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-sm font-medium text-gray-900 mb-2">
                FinEdge: Plus
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Full-service finance & accounting with reconciliations, payroll
                and reporting.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
                <li>Monthly close & reconciliations</li>
                <li>Payroll & statutory support</li>
                <li>Management reporting</li>
              </ul>
              <div className="flex justify-between items-center">
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-gray-900 hover:text-teal-600"
                >
                  Talk to sales
                </Link>
                <Link
                  to="/contact"
                  className="inline-block rounded-md bg-teal-600 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-500"
                >
                  Request demo
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-3 p-6 border border-gray-200 rounded-lg bg-white">
              {/* IMAGE HOLDER - package */}
              <div className="mb-4 -mx-6 mt-0 rounded-t-lg overflow-hidden">
                <div className="h-28 flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 border border-gray-100">
                  <svg
                    className="h-10 w-10 text-teal-600 opacity-90"
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
                  </svg>
                </div>
              </div>

              <div className="text-sm font-medium text-gray-900 mb-2">
                OpsPro
              </div>
              <p className="text-sm text-gray-600 mb-4">
                End-to-end managed operations with SLA-driven delivery and
                dedicated account oversight.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
                <li>Dedicated delivery manager</li>
                <li>Custom KPIs & dashboards</li>
                <li>Scalable staffing on demand</li>
              </ul>
              <div className="flex justify-between items-center">
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-gray-900 hover:text-teal-600"
                >
                  Talk to sales
                </Link>
                <Link
                  to="/contact"
                  className="inline-block rounded-md bg-teal-600 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-500"
                >
                  Request demo
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-4 p-6 border border-gray-200 rounded-lg bg-white">
              {/* IMAGE HOLDER - package */}
              <div className="mb-4 -mx-6 mt-0 rounded-t-lg overflow-hidden">
                <div className="h-28 flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 border border-gray-100">
                  <svg
                    className="h-10 w-10 text-teal-600 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M4 7h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 17h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-sm font-medium text-gray-900 mb-2">
                SmartOpsAI
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Human-in-the-loop AI workflows for annotation, classification,
                and chatbot training.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
                <li>Annotation & quality control</li>
                <li>Document intelligence pipelines</li>
                <li>Chatbot training & monitoring</li>
              </ul>
              <div className="flex justify-between items-center">
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-gray-900 hover:text-teal-600"
                >
                  Talk to sales
                </Link>
                <Link
                  to="/contact"
                  className="inline-block rounded-md bg-teal-600 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-500"
                >
                  Request demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="reveal text-2xl font-bold text-teal-600 mb-4">
            Ready to improve operations?
          </h3>
          <p className="reveal reveal-delay-1 text-gray-600 max-w-2xl mx-auto mb-6">
            We tailor our solutions to your business — from pilots to full-scale
            rollouts.
          </p>
          <Link
            to="/contact"
            className="reveal reveal-delay-2 inline-block rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
          >
            Request a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
