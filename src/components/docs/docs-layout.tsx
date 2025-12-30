"use client";

import { DocsSidebar } from "./docs-sidebar";
import { DocsToc } from "./docs-toc";
import { DocsMobileNav } from "./docs-mobile-nav";
import { Container } from "@/components/ui";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <Container className="py-8">
      {/* Mobile Navigation Toggle */}
      <div className="mb-4 lg:hidden">
        <DocsMobileNav />
      </div>

      <div className="flex gap-8">
        {/* Sidebar Navigation */}
        <DocsSidebar className="hidden lg:block" />
        
        {/* Main Content */}
        <article className="flex-1 min-w-0 prose prose-gray max-w-none prose-headings:scroll-mt-24 prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-slate-800 prose-pre:text-white prose-code:before:content-none prose-code:after:content-none">
          {children}
        </article>
        
        {/* Table of Contents */}
        <DocsToc />
      </div>
    </Container>
  );
}

