"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface DocsTocProps {
  className?: string;
}

export function DocsToc({ className }: DocsTocProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the document
    const elements = document.querySelectorAll("article h2, article h3");
    const items: TocItem[] = [];

    elements.forEach((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      if (!element.id) {
        element.id = id;
      }
      items.push({
        id,
        text: element.textContent || "",
        level: element.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    // Scroll spy to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className={cn("w-56 shrink-0 hidden xl:block", className)}>
      <nav className="sticky top-24 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
          On This Page
        </p>
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block text-sm py-1 transition-colors duration-150",
              heading.level === 3 && "pl-4",
              activeId === heading.id
                ? "text-sky-600 font-medium"
                : "text-gray-500 hover:text-gray-900"
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}

