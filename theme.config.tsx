import { DocsThemeConfig } from 'nextra-theme-docs';
import Link from 'next/link';

// Custom Logo matching main site (no Link - Nextra wraps in anchor)
function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ 
        width: '36px', 
        height: '36px', 
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)'
      }}>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '18px' }}>R</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 700, color: '#111827', fontSize: '16px', lineHeight: 1.1 }}>
          RKPi5
        </span>
        <span style={{ fontSize: '10px', color: '#6b7280', lineHeight: 1 }}>
          Rapture Kit
        </span>
      </div>
    </div>
  );
}

// Navigation extra links for the navbar
function NavbarExtra() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginRight: '16px' }}>
      <Link href="/product" style={{ 
        fontSize: '14px', 
        fontWeight: 500, 
        color: '#4b5563',
        textDecoration: 'none',
        transition: 'color 0.15s'
      }}>
        Product
      </Link>
      <Link href="/pricing" style={{ 
        fontSize: '14px', 
        fontWeight: 500, 
        color: '#4b5563',
        textDecoration: 'none'
      }}>
        Estimates
      </Link>
      <Link href="/use-cases" style={{ 
        fontSize: '14px', 
        fontWeight: 500, 
        color: '#4b5563',
        textDecoration: 'none'
      }}>
        Use Cases
      </Link>
      <Link href="/about" style={{ 
        fontSize: '14px', 
        fontWeight: 500, 
        color: '#4b5563',
        textDecoration: 'none'
      }}>
        About
      </Link>
      <Link href="/waitlist" style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '14px',
        backgroundColor: '#0ea5e9',
        color: 'white',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)',
        transition: 'all 0.15s'
      }}>
        Join Waitlist
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}

const config: DocsThemeConfig = {
  logo: <Logo />,
  navbar: {
    extraContent: <NavbarExtra />
  },
  project: {
    link: undefined // Remove GitHub icon
  },
  docsRepositoryBase: 'https://github.com/yourusername/rkpi5-marketing/tree/main/pages/support',
  footer: {
    text: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '8px',
        width: '100%'
      }}>
        <span style={{ color: '#6b7280' }}>© {new Date().getFullYear()} RKPi5. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
          <Link href="/privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms</Link>
          <Link href="/contact" style={{ color: '#6b7280', textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>
    )
  },
  primaryHue: 200,
  primarySaturation: 90,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – RKPi5 Support'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="RKPi5 Support Documentation" />
    </>
  ),
  navigation: true,
  toc: {
    backToTop: true
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  }
};

export default config;

