"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { MobileMenu, MobileMenuButton } from "./mobile-menu";
import { SHOW_WAITLIST } from "@/lib/constants";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Estimates", href: "/pricing" },
  { name: "Support", href: "/support" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth opacity transition for background
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 1]
  );

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-gray-200 shadow-sm"
          : "border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background with opacity transition */}
      <motion.div
        className="absolute inset-0 bg-white/95 backdrop-blur-sm"
        style={{ opacity: backgroundOpacity }}
      />

      <Container className="relative">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo_rkpi5_com.png"
              alt="RKPi5 Logo"
              width={40}
              height={40}
              className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-none">
                RKPi5
              </span>
              <span className="text-xs text-gray-500 leading-none">
                Rapture Kit
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  "text-gray-600 hover:text-gray-900"
                )}
              >
                {item.name}
                
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {SHOW_WAITLIST && (
              <Link
                href="/waitlist"
                className={cn(
                  "relative overflow-hidden group",
                  "px-6 py-2.5 rounded-lg font-semibold text-sm",
                  "bg-primary-500 text-white",
                  "shadow-md hover:shadow-lg",
                  "transition-all duration-300",
                  "hover:-translate-y-0.5"
                )}
              >
                {/* Button gradient overlay on hover */}
                <span className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="relative flex items-center gap-2">
                  Join Waitlist
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button - Visible on mobile */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </nav>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.header>
  );
}

