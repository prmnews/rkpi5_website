"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsNavigation, isNavSeparator, type NavEntry } from "@/lib/docs-navigation";

interface DocsMobileNavProps {
  className?: string;
}

export function DocsMobileNav({ className }: DocsMobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (slug: string) => {
    if (slug === "") {
      return pathname === "/support";
    }
    return pathname === `/support/${slug}`;
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Close when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        aria-label="Open documentation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-4 h-4" />
        <span>Menu</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Menu */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 overflow-hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="Documentation navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span className="font-semibold text-gray-900">
                      Documentation
                    </span>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {docsNavigation.map((entry, index) => (
                      <MobileNavEntry
                        key={index}
                        entry={entry}
                        isActive={isActive}
                        index={index}
                      />
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Need help? Contact Support
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileNavEntryProps {
  entry: NavEntry;
  isActive: (slug: string) => boolean;
  index: number;
}

function MobileNavEntry({ entry, isActive, index }: MobileNavEntryProps) {
  if (isNavSeparator(entry)) {
    return (
      <div className="pt-4 pb-2 first:pt-0">
        <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700 bg-gradient-to-r from-sky-50 to-transparent border-l-2 border-sky-500 rounded-r block">
          {entry.title}
        </span>
      </div>
    );
  }

  const href = entry.slug === "" ? "/support" : `/support/${entry.slug}`;
  const active = isActive(entry.slug);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <Link
        href={href}
        className={cn(
          "block px-3 py-2.5 text-sm rounded-lg transition-all duration-150 border-l-2",
          active
            ? "bg-gradient-to-r from-sky-100 to-sky-50 text-sky-900 font-medium border-sky-500"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent hover:border-gray-300"
        )}
      >
        {entry.icon && <span className="mr-2">{entry.icon}</span>}
        {entry.title}
      </Link>
    </motion.div>
  );
}
