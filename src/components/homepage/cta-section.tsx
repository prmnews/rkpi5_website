"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { WaitlistModal } from "./waitlist-modal";
import { SHOW_WAITLIST } from "@/lib/constants";

export function CTASection() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="relative py-section-lg overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Prepare for What&apos;s Coming?
            </h2>

            {/* Supporting Text */}
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Join the waitlist today and be among the first to receive your RKPi5. 
              Limited beta units available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {SHOW_WAITLIST && (
                <button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="group px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2">
                    Join the Waitlist
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              )}

              <Link
                href="/product"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all"
              >
                Learn More
              </Link>
            </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/90">
              <div>
                <div className="text-3xl font-bold text-white mb-1">26GB+</div>
                <div className="text-sm text-primary-100">Biblical Content</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-primary-100">Concurrent Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">&lt;5min</div>
                <div className="text-sm text-primary-100">Setup Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>

    {/* Waitlist Modal */}
    <WaitlistModal
      isOpen={isWaitlistOpen}
      onClose={() => setIsWaitlistOpen(false)}
    />
  </>
  );
}

