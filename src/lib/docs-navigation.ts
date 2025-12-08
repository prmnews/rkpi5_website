export interface NavItem {
  title: string;
  slug: string;
  icon?: string;
}

export interface NavSeparator {
  type: 'separator';
  title: string;
}

export type NavEntry = NavItem | NavSeparator;

export const docsNavigation: NavEntry[] = [
  { title: 'Rapture Kit', slug: '', icon: '📚' },
  { type: 'separator', title: 'Content Overview' },
  { title: 'Post Rapture Emergency Message', slug: 'post-rapture-emergency-message' },
  { title: 'Rapture Kit Content', slug: 'rapture-kit-content' },
  { type: 'separator', title: '🚀 Getting Started' },
  { title: 'Quick Start Guide', slug: 'quick-start' },
  { title: 'What You Will Need', slug: 'what-you-will-need' },
  { title: 'Install Instructions', slug: 'install-instructions' },
  { title: 'System Requirements', slug: 'system-requirements' },
  { type: 'separator', title: '🔧 Troubleshooting' },
  { title: 'Connection Issues', slug: 'connection-issues' },
  { title: 'Battery Problems', slug: 'battery-problems' },
  { title: 'Content Not Loading', slug: 'content-not-loading' },
  { type: 'separator', title: '❓ FAQs' },
  { title: 'General FAQs', slug: 'faqs' },
  { title: 'Technical FAQs', slug: 'technical-faqs' },
  { title: 'Pricing FAQs', slug: 'pricing-faqs' },
];

export function isNavSeparator(entry: NavEntry): entry is NavSeparator {
  return 'type' in entry && entry.type === 'separator';
}

export function getDocTitle(slug: string): string {
  const item = docsNavigation.find(
    (entry) => !isNavSeparator(entry) && entry.slug === slug
  ) as NavItem | undefined;
  return item?.title || 'Documentation';
}

