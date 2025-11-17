import { Callout, CodeBlock } from './src/components/mdx';

/**
 * This file provides ONLY custom components for MDX files.
 * Standard HTML elements (h1, p, etc.) are NOT overridden globally
 * to avoid breaking non-MDX pages.
 * 
 * Note: Type is inferred from return value to avoid MDX type dependency issues
 */

export function useMDXComponents(components: Record<string, React.ComponentType<any>> = {}) {
  return {
    // Only custom components, no HTML element overrides
    Callout,
    CodeBlock,
    ...components,
  };
}

