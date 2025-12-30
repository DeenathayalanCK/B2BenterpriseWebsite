import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assests/kovaidesk logo.png";
import Slogo from "../assests/simplelogo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  // Contact removed as requested
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow focus:ring-2 focus:ring-teal-200"
      >
        Skip to content
      </a>

      {/* Header */}
      <header
        className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top Navigation"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo / Brand */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                {/* Replace src with your actual logo later */}
                <img
                  src={Slogo}
                  alt="logo"
                  className="h-9 w-auto object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-semibold text-teal-600">
                    KovAiDesk
                  </span>
                  <span className="text-xs text-gray-500 -mt-0.5">
                    Precision-powered operations
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? location.pathname === item.href
                    : location.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative text-sm font-medium px-1 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-200 rounded ${
                      isActive
                        ? "text-teal-600"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.name}</span>
                    {/* underline indicator */}
                    <span
                      aria-hidden
                      className={`absolute left-0 -bottom-1 h-0.5 rounded bg-teal-600 transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA changed to "Contact Us" */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-200"
                onClick={() => setMobileMenuOpen((s) => !s)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu (overlay) */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-transform duration-200 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            {/* backdrop */}
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 bg-black/30 z-40"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden
              />
            )}

            <div className="relative z-50">
              <div className="mx-4 my-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5">
                <div className="space-y-2">
                  {navigation.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? location.pathname === item.href
                        : location.pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-200 ${
                          isActive
                            ? "bg-teal-50 text-teal-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                  {/* Mobile CTA changed to "Contact Us" */}
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-gray-700 hover:text-teal-600"
                  >
                    Insights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/insights"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Solutions</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:info@kovaidesk.com"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    info@kovaidesk.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919345912889"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    +91 93459 12889
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kovaidesk.com"
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    www.kovaidesk.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust + copyright + logo row */}
          <div className="mt-10 border-t border-gray-100 pt-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
              {/* Trust metrics (left) */}
              <div className="flex justify-center sm:justify-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-teal-600">30+</span>
                  <span className="text-xs text-gray-500">
                    Years experience
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-teal-600">9.5+</span>
                  <span className="text-xs text-gray-500">
                    NPS satisfaction
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-teal-600">90%+</span>
                  <span className="text-xs text-gray-500">
                    Employee engagement
                  </span>
                </div>
              </div>

              {/* Copyright (center) */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  © 2025 KovAiDesk. All rights reserved.
                </p>
              </div>

              {/* Logo (right) */}
              <div className="flex justify-center sm:justify-end">
                <img
                  src={logo}
                  alt="logo"
                  className="h-40 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
