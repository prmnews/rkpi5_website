import type { MDXComponents } from 'mdx/types';
import { Callout } from 'nextra/components';

/**
 * Custom MDX Components for Nextra 3.x
 * Nextra automatically provides styled components
 */

// Custom CodeBlock component with title support
export function CodeBlock({ children, title, language }: any) {
  return (
    <div className="my-4">
      {title && (
        <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-800 border border-b-0 border-gray-200 dark:border-gray-700 rounded-t-lg">
          {title}
          {language && <span className="ml-2 text-gray-400">({language})</span>}
        </div>
      )}
      <pre className={`${title ? 'rounded-t-none' : ''}`}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    CodeBlock,
    ...components,
  };
}

