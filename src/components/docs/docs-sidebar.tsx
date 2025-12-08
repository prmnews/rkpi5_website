"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsNavigation, isNavSeparator, type NavEntry } from "@/lib/docs-navigation";

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname();
  
  const isActive = (slug: string) => {
    if (slug === '') {
      return pathname === '/support';
    }
    return pathname === `/support/${slug}`;
  };

  return (
    <aside className={cn("w-64 shrink-0", className)}>
      <nav className="sticky top-24 space-y-1 pr-4">
        {docsNavigation.map((entry, index) => (
          <SidebarEntry 
            key={index} 
            entry={entry} 
            isActive={isActive} 
          />
        ))}
      </nav>
    </aside>
  );
}

interface SidebarEntryProps {
  entry: NavEntry;
  isActive: (slug: string) => boolean;
}

function SidebarEntry({ entry, isActive }: SidebarEntryProps) {
  if (isNavSeparator(entry)) {
    return (
      <div className="pt-6 pb-2 first:pt-0">
        <span className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-sky-700 bg-gradient-to-r from-sky-50 to-transparent border-l-3 border-sky-500 rounded-r-lg block">
          {entry.title}
        </span>
      </div>
    );
  }

  const href = entry.slug === '' ? '/support' : `/support/${entry.slug}`;
  const active = isActive(entry.slug);

  return (
    <Link
      href={href}
      className={cn(
        "block px-3 py-2 text-sm rounded-lg transition-all duration-150 border-l-3",
        active
          ? "bg-gradient-to-r from-sky-100 to-sky-50 text-sky-900 font-medium border-sky-500"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent hover:border-gray-300"
      )}
    >
      {entry.icon && <span className="mr-2">{entry.icon}</span>}
      {entry.title}
    </Link>
  );
}

