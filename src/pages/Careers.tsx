import React from "react";

type Position = {
  id: string;
  title: string;
  location: string;
  type: string;
  about?: string;
  responsibilities?: string[];
  requirements?: string[];
};

const positions: Position[] = [
  {
    id: "senior-sol-architect",
    title: "Senior Solutions Architect",
    location: "Remote",
    type: "Full-time",
    about:
      "Lead design and delivery of enterprise-grade operations platforms and automation solutions—partner with clients to translate business needs into reliable, scalable systems.",
    responsibilities: [
      "Design end-to-end solutions for enterprise operations, integrations, and automation.",
      "Collaborate with engineering, product, and delivery teams to ensure SLA-driven implementations.",
      "Mentor junior architects and maintain best-practice architecture patterns.",
    ],
    requirements: [
      "8+ years in solution architecture or similar roles for B2B platforms.",
      "Experience with cloud-native architectures and process automation (RPA/AI).",
      "Strong communication & client-facing experience.",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager - Operations Suite",
    location: "Hybrid",
    type: "Full-time",
    about:
      "Own product strategy and delivery for modules within KovAIdesk’s enterprise operations suite—drive roadmap, prioritization, and go-to-market readiness.",
    responsibilities: [
      "Define product requirements, user journeys, and success metrics.",
      "Work closely with engineering and delivery to ship high-quality releases.",
      "Engage with enterprise customers to validate product-market fit.",
    ],
    requirements: [
      "4+ years product experience in B2B SaaS or enterprise tools.",
      "Data-driven, comfortable with analytics and stakeholder management.",
      "Experience with AI-enabled products is a plus.",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    about:
      "Build and maintain a secure, scalable infrastructure supporting our multi-tenant enterprise platform and automation pipelines.",
    responsibilities: [
      "Manage CI/CD, monitoring, and cloud infrastructure (AWS/GCP/Azure).",
      "Improve system reliability, observability, and deployment velocity.",
      "Work with security and compliance to maintain high standards.",
    ],
    requirements: [
      "3+ years in DevOps or Site Reliability Engineering.",
      "Hands-on with Kubernetes, Docker, Terraform/ARM/CloudFormation.",
      "Strong ops mindset and automation-first approach.",
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst — Analytics Suite",
    location: "Remote",
    type: "Full-time",
    about:
      "Support the Analytics Suite by turning operational data into actionable business insights and dashboards.",
    responsibilities: [
      "Create reports, dashboards and support BI needs across clients.",
      "Work with stakeholders to identify KPIs and improve operational outcomes.",
      "Support ad-hoc analysis and data quality improvements.",
    ],
    requirements: [
      "2+ years of BI / analytics experience (Power BI, Looker, Tableau preferred).",
      "Strong SQL and data-wrangling skills.",
    ],
  },
  {
    id: "hr-executive",
    title: "HR Executive — Talent & Engagement",
    location: "Hybrid",
    type: "Full-time",
    about:
      "Help scale our people operations—hiring, onboarding, engagement and performance for a rapidly growing services-led business.",
    responsibilities: [
      "Manage hiring pipelines, candidate screening and onboarding.",
      "Support engagement programs and employee lifecycle initiatives.",
      "Coordinate learning & development interventions.",
    ],
    requirements: [
      "1–3 years HR experience in a service or product company.",
      "Comfortable with ATS tools and employee engagement programs.",
    ],
  },
];

export default function Careers() {
  const applyByEmail = (id: string, title: string) => {
    const to = "info@kovaidesk.com";
    const subject = `Application for ${title}`;
    const body = [
      `Hello KovAIdesk Team,`,
      "",
      `I would like to apply for the role: ${title} (ref: ${id}).`,
      "",
      "Please find my CV attached.",
      "",
      "Regards,",
      "[Your name]",
    ].join("\n");
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="reveal text-4xl font-bold text-gray-900 mb-4">
            Careers at KovAIdesk
          </h1>
          <p className="reveal reveal-delay-1 text-lg text-gray-600 max-w-2xl mx-auto">
            Join our mission to deliver precision-powered operations. We combine
            AI with human expertise to build reliable, scalable systems for
            enterprise clients.
          </p>
        </header>

        {/* Why join */}
        <section className="reveal mb-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="p-6 border border-gray-200 rounded-lg reveal reveal-delay-1">
              <h3 className="text-lg font-semibold mb-2">Impactful Work</h3>
              <p className="text-gray-600 text-sm">
                Work on enterprise-grade projects that drive measurable outcomes
                and improve real business operations.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg reveal reveal-delay-2">
              <h3 className="text-lg font-semibold mb-2">Learn & Grow</h3>
              <p className="text-gray-600 text-sm">
                Learn from senior leaders with decades of global delivery
                experience and grow across product, engineering, and client
                success tracks.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg reveal reveal-delay-3">
              <h3 className="text-lg font-semibold mb-2">
                People-first Culture
              </h3>
              <p className="text-gray-600 text-sm">
                High employee engagement, transparent communication, and a focus
                on wellbeing and development.
              </p>
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="reveal text-2xl font-bold text-gray-900">
              Open Positions
            </h2>
            <p className="reveal reveal-delay-1 text-gray-600 text-sm max-w-2xl mx-auto">
              We hire for roles across delivery, product, engineering, analytics
              and people operations.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((pos, idx) => (
              <article
                key={pos.id}
                className={`
                  reveal
                  reveal-delay-${(idx % 4) + 1}
                  border border-gray-200 rounded-lg p-6 hover:border-teal-600 transition-all duration-300
                  bg-white shadow-sm
                `}
                aria-labelledby={`pos-${pos.id}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3
                      id={`pos-${pos.id}`}
                      className="text-lg font-semibold text-gray-900"
                    >
                      {pos.title}
                    </h3>
                    <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                      <span>{pos.location}</span>
                      <span>•</span>
                      <span>{pos.type}</span>
                    </div>

                    {pos.about && (
                      <p className="text-sm text-gray-600 mt-4">{pos.about}</p>
                    )}

                    {pos.responsibilities && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Responsibilities
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                          {pos.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {pos.requirements && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Requirements
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                          {pos.requirements.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-end gap-3">
                    <button
                      onClick={() => applyByEmail(pos.id, pos.title)}
                      className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
                      aria-label={`Apply for ${pos.title}`}
                    >
                      Apply
                    </button>

                    <a
                      href={`/jobs/${pos.id}`}
                      className="text-sm text-gray-600 hover:text-teal-600"
                      aria-label={`View details for ${pos.title}`}
                    >
                      View details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How we hire */}
        <section className="reveal mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How we hire
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 border border-gray-200 rounded-lg reveal-delay-1">
                <strong className="block text-teal-600 mb-2">1. Apply</strong>
                <p className="text-sm text-gray-600">
                  Send your CV via email (or use the Contact page).
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg reveal-delay-2">
                <strong className="block text-teal-600 mb-2">
                  2. Interview
                </strong>
                <p className="text-sm text-gray-600">
                  Technical + behavioral rounds with our leadership and delivery
                  teams.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg reveal-delay-3">
                <strong className="block text-teal-600 mb-2">
                  3. Offer & Onboarding
                </strong>
                <p className="text-sm text-gray-600">
                  Fast, transparent offers and structured onboarding to set you
                  up for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="reveal mb-12">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold mb-4">Perks & benefits</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  Competitive compensation & performance bonuses
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  Flexible/remote-friendly work options
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  Learning & development allowance
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  Healthcare & workplace wellness initiatives
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="reveal text-center mt-8">
          <p className="text-sm text-gray-600 mb-4">
            Don’t see a role that fits? We’re always looking for talent — send a
            speculative application to{" "}
            <a
              href="mailto:info@kovaidesk.com"
              className="text-teal-600 hover:underline"
            >
              info@kovaidesk.com
            </a>
            .
          </p>

          <a
            href="mailto:info@kovaidesk.com"
            className="inline-block rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
          >
            Contact Talent Team
          </a>
        </section>
      </div>
    </div>
  );
}
