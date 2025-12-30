// src/pages/Insights.tsx
import AnimatedSection from "../components/AnimatedSection";

export default function Insights() {
  const insights = [
    {
      title: "Human-guided AI for Operational Accuracy",
      category: "AI & Automation",
      date: "Dec 2024",
      author: "Kovaidesk Insights",
      excerpt:
        "How human-in-the-loop workflows and document intelligence reduce errors and scale high-accuracy operations.",
      href: "/insights/human-guided-ai",
    },
    {
      title: "Building Audit-Ready Finance Operations",
      category: "Finance & Accounting",
      date: "Nov 2024",
      author: "Finance Team",
      excerpt:
        "Practical steps to make bookkeeping, reconciliations and payroll audit-ready while reducing costs with automation.",
      href: "/insights/audit-ready-finance",
    },
    {
      title: "Scaling Back-Office for Rapid Growth",
      category: "Back-Office",
      date: "Nov 2024",
      author: "Ops & Delivery",
      excerpt:
        "SLA-driven processes and the right mix of people + automation to support fast-growing businesses without operational debt.",
      href: "/insights/scaling-back-office",
    },
    {
      title: "E-commerce Catalog Best Practices",
      category: "Creative & E-commerce",
      date: "Oct 2024",
      author: "DesignDesk",
      excerpt:
        "Optimising product listings and metadata for conversions — workflows, tooling and moderation tips for marketplaces.",
      href: "/insights/ecommerce-catalog",
    },
    {
      title: "HR Lifecycle: From Hiring to Engagement",
      category: "HR",
      date: "Sep 2024",
      author: "People Ops",
      excerpt:
        "A practical playbook for lifecycle management, talent development and workplace wellness to keep your teams productive.",
      href: "/insights/hr-lifecycle",
    },
    {
      title: "RPA Monitoring & Governance",
      category: "Automation Ops",
      date: "Aug 2024",
      author: "Automation",
      excerpt:
        "Guidelines for safe, observable RPA deployments — monitoring, fallbacks and human oversight best practices.",
      href: "/insights/rpa-monitoring",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thought leadership and practical guides on AI, operations, finance,
            and e-commerce — written for teams that need predictable, measurable
            outcomes.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, idx) => (
            <AnimatedSection
              key={item.title}
              className={`reveal-delay-${(idx % 4) + 1}`}
            >
              <article
                role="article"
                aria-labelledby={`insight-${idx}-title`}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Visual / thumbnail */}
                <div className="h-44 flex items-center justify-center rounded-t-2xl bg-gradient-to-br from-teal-50 to-teal-100 border-b border-gray-100">
                  <svg
                    className="h-12 w-12 text-teal-600 opacity-95"
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
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {item.category}
                    </span>
                    <time
                      className="text-xs text-gray-400"
                      dateTime={item.date}
                    >
                      {item.date}
                    </time>
                  </div>

                  <h3
                    id={`insight-${idx}-title`}
                    className="text-lg font-semibold text-gray-900 mb-2"
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">By {item.author}</p>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-teal-600 transition hover:text-teal-500"
                      aria-label={`Read more: ${item.title}`}
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-14 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-3">
            Stay updated with practical insights
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter for the latest case studies, product
            updates, and operational best practices.
          </p>

          <form
            action="/subscribe"
            method="POST"
            className="mx-auto flex max-w-md items-center gap-3"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <button
              type="submit"
              className="rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
