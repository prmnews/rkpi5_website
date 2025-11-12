"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Database, Wifi, Battery, Clock } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "26GB+ Biblical Resources",
    description: "130+ hours of audio teaching, 39+ hours of video content, multiple Bible translations, and comprehensive discipleship materials.",
    color: "from-primary-500 to-primary-700",
  },
  {
    icon: Wifi,
    title: "No Internet Required",
    description: "Complete offline WiFi portal with captive portal auto-popup. Works in any environment where networks may be unavailable or compromised.",
    color: "from-accent-purple to-purple-700",
  },
  {
    icon: Battery,
    title: "6-Hour Battery Runtime",
    description: "25,000 mAh battery pack provides extended operation. TSA carry-on approved. Optional solar panel for field deployment.",
    color: "from-accent-green to-green-700",
  },
  {
    icon: Clock,
    title: "5-Minute Setup",
    description: "Insert microSD, attach power, ready to serve 15+ users simultaneously. No IT expertise required. Works immediately out of the box.",
    color: "from-accent-orange to-orange-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

export function Features() {
  return (
    <section className="py-section-lg bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need, Offline
          </h2>
          <p className="text-lg text-gray-600">
            Designed for believers preparing for the Rapture and saints navigating the Tribulation
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:border-transparent">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/product"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
          >
            <span>Explore all features</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

