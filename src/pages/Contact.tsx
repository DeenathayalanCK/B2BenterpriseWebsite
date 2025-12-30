import { Mail, Phone, MapPin, Clock, Globe, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team — whether you need a pilot, a demo, or
              help designing an audit-ready process.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              We typically respond within 1 business day. For urgent inquiries,
              call us.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h2>

              <form className="space-y-6" action="/contact" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Inquiry type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    >
                      <option>General enquiry</option>
                      <option>Request demo / pilot</option>
                      <option>Finance & Accounting</option>
                      <option>AI & Automation</option>
                      <option>Creative & E-commerce</option>
                      <option>HR managed services</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Estimated monthly budget (optional)
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder="eg. $2,000 - $5,000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your needs"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="case-study"
                    name="caseStudy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="case-study" className="text-sm text-gray-600">
                    Please send a detailed case study relevant to my industry
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-500 transition-colors"
                  >
                    Send Message
                  </button>

                  <a
                    href="mailto:info@kovaidesk.com?subject=Request%20a%20Process%20Assessment"
                    className="inline-flex items-center justify-center w-full rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                  >
                    <Calendar className="mr-2" size={16} /> Schedule a free
                    assessment
                  </a>
                </div>
              </form>
            </div>

            {/* Contact details + map placeholder */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Get in touch
              </h2>

              <div className="flex gap-4">
                <Mail className="text-teal-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@kovaidesk.com"
                      className="hover:text-teal-600"
                    >
                      info@kovaidesk.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-teal-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919345912889" className="hover:text-teal-600">
                      +91 93459 12889
                    </a>
                    <span className="text-gray-400 text-xs ml-2">
                      {" "}
                      (Mon–Fri 9AM–6PM IST)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin
                  className="text-teal-600 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">
                    KovaiDesk — Global Delivery Center
                    <br />
                    (Address available on request)
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    Visit:{" "}
                    <a
                      href="https://www.kovaidesk.com"
                      className="hover:text-teal-600"
                    >
                      www.kovaidesk.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <Clock className="text-teal-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 9AM - 6PM IST
                    <br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>

              {/* Map / image placeholder */}
              <div className="mt-2 rounded-lg overflow-hidden border border-gray-100">
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100">
                  <Globe className="h-10 w-10 text-teal-600 opacity-90" />
                  <span className="ml-3 text-sm text-gray-500">
                    Map / location placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA + trust bar */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner with KovaiDesk
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises transforming operations with SLA-backed
            delivery and measurable outcomes.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="/contact"
              className="inline-block rounded-md bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
            >
              Schedule Demo
            </a>
            <a
              href="mailto:info@kovaidesk.com"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              <Mail /> Email Sales
            </a>
          </div>

          {/* Trust metrics */}
          <div className="mt-6 flex flex-col gap-6 items-center sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">30+</span>
              <span className="text-xs text-gray-500">Years of experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">9.5+</span>
              <span className="text-xs text-gray-500">
                NPS client satisfaction
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">90%+</span>
              <span className="text-xs text-gray-500">Employee engagement</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
