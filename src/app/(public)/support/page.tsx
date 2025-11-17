import Link from 'next/link';
import { Container } from '@/components/ui';

export const metadata = {
  title: 'Support - RKPi5 Marketing',
  description: 'Browse support documentation and guides',
};

/**
 * Support Hub Page
 * Landing page for support documentation
 */
export default function SupportPage() {
  const sections = [
    {
      title: 'Getting Started',
      description: 'Quick setup guides and initial configuration',
      links: [
        { title: 'Quick Start Guide', href: '/support/quick-start', available: true },
        { title: 'First Time Setup', href: '/support/first-time-setup', available: true },
        { title: 'System Requirements', href: '/support/system-requirements', available: true },
      ],
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      links: [
        { title: 'Connection Issues', href: '/support/connection-issues', available: true },
        { title: 'Battery Problems', href: '/support/battery-problems', available: true },
        { title: 'Content Not Loading', href: '/support/content-not-loading', available: true },
      ],
    },
    {
      title: 'FAQs',
      description: 'Frequently asked questions',
      links: [
        { title: 'General FAQs', href: '/support/faqs', available: true },
        { title: 'Technical FAQs', href: '/support/technical-faqs', available: true },
        { title: 'Pricing FAQs', href: '/support/pricing-faqs', available: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Container>
        <div className="py-16">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Support Documentation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find guides, troubleshooting tips, and answers to common questions about RKPi5.
            </p>
          </div>

          {/* Beta Notice */}
          <div className="mb-12 rounded-lg bg-sky-50 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-100 mb-2">
                  Documentation Coming Soon
                </h3>
                <p className="text-sm text-sky-700 dark:text-sky-300">
                  We&apos;re currently building comprehensive documentation based on feedback from our beta program. 
                  Placeholder articles are available below and will be populated with detailed content during the beta testing phase.
                </p>
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:border-sky-500 dark:hover:border-sky-500 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline"
                      >
                        {link.title}
                        {!link.available && (
                          <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Need More Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-sky-600 px-6 py-3 text-sm font-medium text-white hover:bg-sky-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

