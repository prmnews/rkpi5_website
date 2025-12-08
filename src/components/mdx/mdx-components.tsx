import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Custom MDX Components for Support Documentation
 * These components provide enhanced styling for MDX content
 */

export const MDXComponents = {
  // Headings
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-8 mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-8 mb-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-6 mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-4 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    />
  ),

  // Paragraphs and text
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('mb-4 leading-7 text-gray-700 dark:text-gray-300', className)}
      {...props}
    />
  ),

  // Links
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 underline underline-offset-4',
        className
      )}
      {...props}
    />
  ),

  // Lists
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn('mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300', className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn('mb-4 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300', className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('leading-7', className)} {...props} />
  ),

  // Code blocks
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className;
    return (
      <code
        className={cn(
          isInline
            ? 'relative rounded bg-gray-100 dark:bg-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-sm text-gray-900 dark:text-gray-100'
            : 'block rounded-lg bg-slate-800 p-4 font-mono text-sm text-white overflow-x-auto',
          className
        )}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mb-4 mt-2 overflow-x-auto rounded-lg bg-slate-800 p-4 text-white',
        className
      )}
      {...props}
    />
  ),

  // Blockquotes
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'mb-4 mt-2 border-l-4 border-sky-500 pl-4 italic text-gray-700 dark:text-gray-300',
        className
      )}
      {...props}
    />
  ),

  // Tables
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 w-full overflow-x-auto">
      <table
        className={cn('w-full border-collapse text-sm text-gray-700 dark:text-gray-300', className)}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      className={cn('bg-gray-100 dark:bg-gray-800', className)}
      {...props}
    />
  ),
  tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={cn('divide-y divide-gray-200 dark:divide-gray-700', className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('border-b border-gray-200 dark:border-gray-700', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn('px-4 py-2', className)} {...props} />
  ),

  // Horizontal rule
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn('my-8 border-t border-gray-200 dark:border-gray-800', className)}
      {...props}
    />
  ),
};

/**
 * Callout Component
 * Usage in MDX: <Callout type="info">Content here</Callout>
 */
interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
}

export const Callout: React.FC<CalloutProps> = ({ 
  children, 
  type = 'info',
  title 
}) => {
  const styles = {
    info: 'bg-sky-50 dark:bg-sky-950 border-sky-500 text-sky-900 dark:text-sky-100',
    warning: 'bg-amber-50 dark:bg-amber-950 border-amber-500 text-amber-900 dark:text-amber-100',
    error: 'bg-red-50 dark:bg-red-950 border-red-500 text-red-900 dark:text-red-100',
    success: 'bg-green-50 dark:bg-green-950 border-green-500 text-green-900 dark:text-green-100',
  };

  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    error: '❌',
    success: '✅',
  };

  return (
    <div className={cn('mb-4 border-l-4 p-4 rounded-r-lg', styles[type])}>
      {title && (
        <div className="mb-2 flex items-center gap-2 font-semibold">
          <span>{icons[type]}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

/**
 * CodeBlock Component with title
 * Usage in MDX: <CodeBlock title="config.js">code here</CodeBlock>
 */
interface CodeBlockProps {
  children: React.ReactNode;
  title?: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  title,
  language 
}) => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      {title && (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <span>{title}</span>
          {language && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {language}
            </span>
          )}
        </div>
      )}
      <div className="bg-slate-800 p-4">
        <code className="font-mono text-sm text-white">{children}</code>
      </div>
    </div>
  );
};

// Export ONLY custom components (not HTML element overrides)
// HTML elements will be styled via Tailwind Prose in the layout
export const customMDXComponents = {
  Callout,
  CodeBlock,
};

