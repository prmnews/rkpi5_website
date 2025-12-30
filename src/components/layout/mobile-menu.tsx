"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SHOW_WAITLIST } from "@/lib/constants";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Estimates", href: "/pricing" },
  { name: "Support", href: "/support" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "About", href: "/about" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {

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
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-out Menu */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo_rkpi5_com.png"
                    alt="RKPi5 Logo"
                    width={40}
                    height={40}
                    className="rounded-lg shadow-md"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-lg leading-none">
                      RKPi5
                    </span>
                    <span className="text-xs text-gray-500 leading-none">
                      Rapture Kit
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg",
                          "text-gray-700 hover:text-primary-600",
                          "hover:bg-primary-50",
                          "transition-colors font-medium",
                          "group"
                        )}
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                {SHOW_WAITLIST && (
                  <Link
                    href="/waitlist"
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-center gap-2 w-full",
                      "px-6 py-4 rounded-lg font-semibold",
                      "bg-primary-500 text-white",
                      "shadow-md hover:shadow-lg",
                      "hover:bg-primary-600",
                      "transition-all duration-300",
                      "group"
                    )}
                  >
                    <span>Join Waitlist</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                )}

                {/* Additional Links */}
                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                    Privacy
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Hamburger Menu Button Component
 * Animates between hamburger and X icon
 */
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center relative">
        {/* Top Line */}
        <motion.span
          className="absolute w-6 h-0.5 bg-current"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Middle Line */}
        <motion.span
          className="absolute w-6 h-0.5 bg-current"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.1 }}
        />

        {/* Bottom Line */}
        <motion.span
          className="absolute w-6 h-0.5 bg-current"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 6,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </button>
  );
}

