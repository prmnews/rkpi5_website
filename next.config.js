const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Configure MDX options here if needed
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

module.exports = withMDX(nextConfig)
