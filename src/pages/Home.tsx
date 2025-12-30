import { Link } from "react-router-dom";
import logo from "../assests/kovaidesk logo.png";
import aipng from "../assests/ai.jpg";
import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Database,
  Cloud,
  Workflow,
} from "lucide-react";

export default function Home() {
  const services = [
    { icon: Zap, label: "Fast Deployment" },
    { icon: Shield, label: "Security First" },
    { icon: TrendingUp, label: "Scalability" },
    { icon: Database, label: "Data Driven" },
    { icon: Cloud, label: "Cloud Native" },
    { icon: Workflow, label: "Automation" },
  ];

  const solutions = [
    {
      title: "Enterprise Operations",
      description:
        "End-to-end managed operations with SLA-driven delivery and measurable outcomes.",
    },
    {
      title: "Process Automation",
      description:
        "Human-guided AI workflows designed for accuracy, speed, and operational scale.",
    },
    {
      title: "Analytics Suite",
      description:
        "Real-time insights and reporting to support informed business decisions.",
    },
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "50+", label: "Countries Served" },
  ];

  return (
    <div className="bg-white">
      {/* HERO — full screen */}
      <section className="bg-gradient-to-b from-teal-50 to-white min-h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="flex items-center justify-center">
            {/* Hero content */}
            <div className="text-center max-w-3xl">
              <img
                src={logo}
                alt="KovAIdesk logo"
                className="mx-auto mb-6 w-32 h-full -mt-32"
              />

              <h1 className="reveal text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Precision-Powered Enterprise Operations
              </h1>

              <p className="reveal reveal-delay-1 mt-6 text-lg text-gray-600">
                AI-enabled, human-led solutions built for accuracy, scalability,
                and long-term growth.
              </p>

              <div className="reveal reveal-delay-2 mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm
          hover:bg-teal-500 transition-all hover:scale-[1.03]"
                >
                  Get Started
                </Link>

                <Link
                  to="/services"
                  className="text-sm font-semibold text-gray-900 hover:text-teal-600 transition-colors flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <h2 className="reveal text-3xl font-bold text-gray-900 mb-6">
                Why choose KovAIdesk
              </h2>

              <p className="reveal reveal-delay-1 text-gray-600 max-w-3xl mb-10">
                Every process is managed with precision, documented workflows,
                and measurable outcomes. We combine automation with human
                expertise to deliver faster, more accurate, and scalable
                operations.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "Precision & Documented Processes",
                  "Automation with Human Oversight",
                  "Seamless CRM / ERP Integration",
                  "Cost-Efficient Delivery Models",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`reveal reveal-delay-${
                      idx + 1
                    } p-6 border border-gray-200 rounded-lg`}
                  >
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {item}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Designed for predictable outcomes and operational clarity.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="reveal reveal-delay-2">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[360px] rounded-xl border border-gray-200 overflow-hidden">
                <img
                  src={aipng}
                  alt="KovaiDesk platform preview"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR MODERN ENTERPRISE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-gray-900">
              Built for Modern Enterprises
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-6 sm:grid-cols-2">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`reveal reveal-delay-${(idx % 4) + 1}
                  p-6 border border-gray-200 rounded-lg text-center
                  hover:border-teal-600 hover:bg-teal-50
                  transition-all duration-300 hover:-translate-y-1`}
                >
                  <Icon className="text-teal-600 mb-3 mx-auto" size={28} />
                  <p className="text-sm font-medium text-gray-900">
                    {service.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="reveal text-3xl font-bold text-gray-900 text-center mb-16">
            Solutions That Scale With You
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`reveal reveal-delay-${idx + 1}
                p-8 bg-white rounded-lg border border-gray-200
                hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx + 1}`}>
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="reveal text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Operations?
          </h2>

          <p className="reveal reveal-delay-1 text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with KovAIdesk to achieve precision, performance, and
            predictable outcomes.
          </p>

          <Link
            to="/contact"
            className="reveal reveal-delay-2 inline-block rounded-md bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-sm
            hover:bg-teal-500 transition-all hover:scale-[1.04]"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
