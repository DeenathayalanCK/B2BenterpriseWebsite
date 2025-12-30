import { Users, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import aipng from "../assests/ai.jpg";

export default function About() {
  const values = [
    {
      icon: Users,
      label: "Customer First",
      description:
        "Your success is our success — we measure outcomes, not activity.",
    },
    {
      icon: Zap,
      label: "Operational Excellence",
      description:
        "Mature processes, measurable SLAs and continuous improvement.",
    },
    {
      icon: Globe,
      label: "Built to Scale",
      description:
        "Cloud-native, globally distributed delivery for expanding businesses.",
    },
  ];

  const services = [
    {
      id: "back-office",
      title: "Back-Office Operations",
      short:
        "SLA-driven execution — data entry, MIS, forms & claims processing, email/chat support.",
    },
    {
      id: "finance",
      title: "Finance & Accounting",
      short:
        "Audit-ready bookkeeping, AP/AR, reconciliations, payroll and tax prep (FinEdge packages).",
    },
    {
      id: "ai",
      title: "AI & Automation Support",
      short:
        "Human-in-the-loop AI workflows, document intelligence (OCR), annotation & chatbot training.",
    },
    {
      id: "creative",
      title: "Creative & E-commerce Support",
      short:
        "Conversion-ready creative assets, product cataloging and content moderation.",
    },
    {
      id: "hr",
      title: "HR Managed Services",
      short:
        "Talent fulfilment, lifecycle management, learning & engagement programs.",
    },
    {
      id: "va",
      title: "Virtual Assistant Services",
      short:
        "Remote admin: calendar, travel, CRM upkeep and task administration.",
    },
  ];

  // Cleaned Founder + Leadership data (used only in the updated section)
  const founder = {
    name: "Dr. Fredricks John",
    title: "Founder & Chief Visionary",
    creds: "Harvard SELP · PhD · MBA (HR)",
    desc: "Backed by 30+ years of proven global experience in outsourcing and service delivery, Dr. Fred John brings strategic insight and operational mastery to KovAIdesk.",
    stats: [
      { label: "Years Experience", value: "30+" },
      { label: "Employee Engagement", value: "90%+" },
      { label: "NPS Client Satisfaction", value: "9.5+" },
    ],
    imageSrc: aipng, // replace with actual founder image when available
  };

  const leaders = [
    {
      name: "Mr.__________",
      role: "Head of Delivery",
      creds:
        "Experienced leader in scaling delivery operations and SLA management.",
      imageSrc: aipng,
      // experience stats similar in style to founder.stats
      stats: [
        { label: "Years Experience", value: "15+" },
        { label: "Teams Managed", value: "10+" },
        { label: "Avg SLA", value: "99.5%" },
      ],
    },
    {
      name: "Mr._______________",
      role: "Head of Product",
      creds:
        "Drives product strategy for AI-enabled automation and analytics offerings.",
      imageSrc: aipng,
      stats: [
        { label: "Years Experience", value: "12+" },
        { label: "Products Launched", value: "8+" },
        { label: "Active Roadmaps", value: "3" },
      ],
    },
    {
      name: "Ms._______________",
      role: "Head of HR",
      creds:
        "Leads talent acquisition, engagement and learning programs to keep delivery teams high-performing.",
      imageSrc: aipng,
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Hiring Volume/yr", value: "200+" },
        { label: "Engagement Score", value: "90%+" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header / Hero */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text content */}
            <div className="max-w-3xl">
              <h1 className="reveal text-4xl font-bold text-gray-900 mb-6">
                About KovAIdesk
              </h1>

              <p className="reveal reveal-delay-1 text-lg text-gray-600">
                Precision-powered operations for growing businesses — we combine
                automation with human expertise to deliver faster, more
                accurate, and scalable outcomes.
              </p>

              <p className="reveal reveal-delay-2 text-sm text-gray-500 mt-4">
                Led by 30+ years of global outsourcing and service delivery
                experience, KovAIdesk blends into your existing workflows,
                tools, and CRM/ERP systems with minimal onboarding time. We
                focus on clear communication, predictable delivery, and
                long-term client success.
              </p>
            </div>

            {/* Right: responsive image placeholder */}
            <div className="reveal reveal-delay-3 w-full" aria-hidden="true">
              {/* Responsive ratio box: adjusts height by screen size */}
              <div className="w-full h-36 sm:h-80 md:h-96 lg:h-80 xl:h-[520px] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={aipng}
                  alt="KovAIdesk team collaborating"
                  className="object-cover w-full h-full"
                />
                <span className="sr-only">
                  Image placeholder for About KovAIdesk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KovAIdesk */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="reveal reveal-delay-1 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Precision & Measurable Outcomes
              </h3>
              <p className="text-sm text-gray-600">
                Every process is managed with documented workflows and
                measurable outcomes — delivering consistent quality at a
                fraction of traditional operational cost.
              </p>
            </div>

            <div className="reveal reveal-delay-2 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Automation + Human Expertise
              </h3>
              <p className="text-sm text-gray-600">
                We combine AI and automation with human oversight to ensure
                accuracy at scale (human-in-the-loop where it matters).
              </p>
            </div>

            <div className="reveal reveal-delay-3 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Seamless Integration
              </h3>
              <p className="text-sm text-gray-600">
                Minimal onboarding — our teams integrate into your existing
                tools and processes, providing predictable SLAs from Day 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Founder / Leadership highlight (REPLACED with cleaned responsive version) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Founder (left) */}
            <div className="reveal reveal-delay-1 bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-start gap-4">
                <img
                  src={founder.imageSrc}
                  alt={`${founder.name} photo`}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-gray-200 bg-gray-50 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900 truncate">
                    {founder.name}
                  </h4>
                  <div className="text-sm text-teal-600 font-medium">
                    {founder.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {founder.creds}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4 flex-1">
                {founder.desc}
              </p>

              <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Operational excellence & process automation leadership</li>
                <li>Proven delivery frameworks for enterprise clients</li>
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {founder.stats.map((s) => (
                  <div key={s.label} className="">
                    <div className="text-xl font-bold text-teal-600">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Team (right) — responsive: stacks on mobile, 3-up on md+ */}
            <div className="reveal reveal-delay-2 lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {leaders.map((l) => (
                  <div
                    key={l.name}
                    className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={l.imageSrc}
                        alt={`${l.name} photo`}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-gray-200 bg-gray-50 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-md font-semibold text-gray-900 truncate">
                          {l.name}
                        </h4>
                        <div className="text-sm text-teal-600 font-medium">
                          {l.role}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 truncate">
                          {l.creds}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-3 flex-1">
                      {l.creds}
                    </p>

                    {/* Leader experience/stats (added to mirror founder) */}
                    <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                      {l.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-lg font-bold text-teal-600">
                            {s.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services overview */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="reveal reveal-delay-1 text-gray-600 max-w-2xl mx-auto">
              High-quality output at a fraction of traditional operational costs
              — delivered through proven processes and tailored solutions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((s, idx) => (
              <div
                key={s.id}
                className={`
                  reveal
                  reveal-delay-${(idx % 4) + 1}
                  bg-white border border-gray-200 rounded-lg p-6
                `}
              >
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600">{s.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="reveal text-3xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="reveal reveal-delay-1 p-8 rounded-lg border border-gray-200 text-center"
                >
                  <Icon className="text-teal-600 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {v.label}
                  </h3>
                  <p className="text-sm text-gray-600">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 text-center">
            <div className="reveal">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Enterprise Clients</div>
            </div>

            <div className="reveal">
              <div className="text-4xl font-bold text-teal-600 mb-2">30+</div>
              <div className="text-sm text-gray-600">
                Years of Delivery Experience
              </div>
            </div>

            <div className="reveal">
              <div className="text-4xl font-bold text-teal-600 mb-2">9.5+</div>
              <div className="text-sm text-gray-600">
                NPS Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="reveal text-2xl font-bold text-gray-900 mb-4">
            Want to learn more?
          </h3>
          <p className="reveal reveal-delay-1 text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our team to request a capability deck or schedule a
            discovery call.
          </p>

          <div className="reveal reveal-delay-2 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500 transition-transform transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>

            <a
              href="mailto:info@kovaidesk.com"
              className="inline-block rounded-md border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50"
            >
              Email: info@kovaidesk.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
