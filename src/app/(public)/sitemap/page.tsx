import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Sitemap - RKPi5",
  description: "Complete sitemap of all RKPi5 pages and resources",
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/", description: "Welcome to RKPi5 - Biblical resources when networks fail" },
      { name: "Product", href: "/product", description: "Explore RKPi5 features, specifications, and capabilities" },
      { name: "Estimates", href: "/pricing", description: "Build configurations and DIY cost estimates" },
      { name: "Use Cases", href: "/use-cases", description: "Real-world applications and scenarios for RKPi5" },
      { name: "About", href: "/about", description: "Learn about our mission and vision" },
      { name: "Contact", href: "/contact", description: "Get in touch with our team" },
    ],
  },
  {
    title: "Support & Documentation",
    links: [
      { name: "Support Hub", href: "/support", description: "Complete support documentation and resources" },
      { name: "Quick Start Guide", href: "/support/quick-start", description: "Get started with RKPi5 in minutes" },
      { name: "First Time Setup", href: "/support/first-time-setup", description: "Detailed setup instructions for new users" },
      { name: "System Requirements", href: "/support/system-requirements", description: "Hardware and software requirements" },
      { name: "FAQs", href: "/support/faqs", description: "Frequently asked questions" },
      { name: "Estimate FAQs", href: "/support/pricing-faqs", description: "Questions about estimates and configurations" },
      { name: "Technical FAQs", href: "/support/technical-faqs", description: "Technical questions and troubleshooting" },
      { name: "Battery Problems", href: "/support/battery-problems", description: "Troubleshooting battery issues" },
      { name: "Connection Issues", href: "/support/connection-issues", description: "WiFi and network troubleshooting" },
      { name: "Content Not Loading", href: "/support/content-not-loading", description: "Fix content loading problems" },
    ],
  },
  {
    title: "Build Configurations",
    links: [
      { name: "Hobbyist", href: "/pricing#hobbyist", description: "FREE DIY setup for technical users" },
      { name: "Bare Bones", href: "/pricing#bare-bones", description: "Pre-configured microSD kit (~$80-$120)" },
      { name: "Solo", href: "/pricing#solo", description: "Complete portable starter kit (~$280-$320)" },
      { name: "Field", href: "/pricing#field", description: "Self-contained field unit (~$450-$550)" },
    ],
  },
  {
    title: "Legal & Information",
    links: [
      { name: "Privacy Policy", href: "/privacy", description: "How we handle your information" },
      { name: "Terms of Service", href: "/terms", description: "Legal terms and conditions" },
      { name: "Sitemap", href: "/sitemap", description: "This page - complete site structure" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-lg text-gray-600">
              Complete overview of all pages and resources available on RKPi5
            </p>
          </div>

          {/* Sitemap Sections */}
          <div className="space-y-12">
            {sitemapSections.map((section) => (
              <section key={section.title} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {link.name}
                        </h3>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">{link.description}</p>
                      <p className="text-xs text-gray-400 mt-2 font-mono">{link.href}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              Can&apos;t find what you&apos;re looking for? Our support documentation covers a wide range of topics, 
              or you can reach out to us directly.
            </p>
            <div className="flex gap-4">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Browse Documentation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Pages", value: sitemapSections.reduce((acc, section) => acc + section.links.length, 0) },
              { label: "Support Docs", value: sitemapSections.find(s => s.title === "Support & Documentation")?.links.length || 0 },
              { label: "Configurations", value: 4 },
              { label: "Always Updated", value: "✓" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://x.com/rkpi5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@rkpi5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com/rkpi5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

