import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  title?: string;
  language?: string;
}

export function CodeBlock({ children, title, language }: CodeBlockProps) {
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-200">
      {title && (
        <div className="px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
          <span>{title}</span>
          {language && (
            <span className="text-gray-400 uppercase">{language}</span>
          )}
        </div>
      )}
      <pre className={cn("p-4 overflow-x-auto bg-slate-800 text-white text-sm font-mono", title && "rounded-t-none")}>
        <code className="text-white">{children}</code>
      </pre>
    </div>
  );
}

