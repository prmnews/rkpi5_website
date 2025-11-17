import type { MDXComponents } from 'mdx/types';
import { Callout, CodeBlock } from './src/components/mdx';

/**
 * This file provides ONLY custom components for MDX files.
 * Standard HTML elements (h1, p, etc.) are NOT overridden globally
 * to avoid breaking non-MDX pages.
 */

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Only custom components, no HTML element overrides
    Callout,
    CodeBlock,
    ...components,
  };
}

