import type { MDXComponents } from 'mdx/types';
import { Callout, CodeBlock } from '@/components/docs';

/**
 * Custom MDX Components for App Router
 * These components are used when rendering MDX content
 */

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    CodeBlock,
    ...components,
  };
}

