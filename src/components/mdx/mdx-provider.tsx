'use client';

import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import { customMDXComponents } from './mdx-components';

/**
 * MDX Provider Component
 * Wraps MDX content with custom components
 */
export default function MDXProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseMDXProvider components={customMDXComponents}>
      {children}
    </BaseMDXProvider>
  );
}

