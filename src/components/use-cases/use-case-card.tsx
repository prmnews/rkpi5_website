"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  results: string;
  color: string;
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

export function UseCaseCard({
  icon: Icon,
  title,
  problem,
  solution,
  results,
  color,
}: UseCaseCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:border-transparent flex flex-col">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {title}
        </h3>

        {/* Problem Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Problem
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {problem}
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Solution
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {solution}
          </p>
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
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}

