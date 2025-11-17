"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

interface BetaTesterCardProps {
  name: string;
  role?: string;
  quote: string;
  results: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function BetaTesterCard({
  name,
  role,
  quote,
  results,
}: BetaTesterCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:border-transparent flex flex-col">
        {/* Avatar Placeholder */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {name}
            </h3>
            {role && (
              <p className="text-sm text-gray-500">
                {role}
              </p>
            )}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Testimonial
          </h4>
          <blockquote className="text-gray-700 leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>

        {/* Results Section */}
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Results
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {results}
          </p>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

