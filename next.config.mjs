import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only include mdx (not md) to avoid duplicate page detection
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

export default withNextra(nextConfig);

