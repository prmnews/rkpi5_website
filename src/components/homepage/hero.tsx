"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { WaitlistModal } from "./waitlist-modal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Hero Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/85 to-accent-purple/90 z-10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          
          {/* Placeholder for actual hero image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/20">
              <div className="w-64 h-64 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <span className="text-8xl font-bold">R</span>
              </div>
              <p className="text-2xl font-medium">Hero Image Placeholder</p>
              <p className="text-sm mt-2">1920x1080 recommended</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <Container className="relative z-20 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now Accepting Beta Testers
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Biblical Resources When{" "}
              <span className="text-primary-200">Networks Fail</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl sm:text-2xl text-primary-100 mb-10 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              26GB+ of Rapture Kit content delivered via offline WiFi portal. 
              Reach loved ones before the Rapture. Equip saints after.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="group px-8 py-5 bg-white text-primary-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/product"
                className="px-8 py-5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2 text-lg backdrop-blur-sm"
              >
                <span>Learn More</span>
              </a>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "26GB+", label: "Content" },
                { value: "10+", label: "Users" },
                { value: "6hrs", label: "Battery" },
                { value: "<5min", label: "Setup" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}
