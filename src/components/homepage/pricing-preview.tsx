"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Bare Bones",
    price: 99,
    description: "Perfect for existing Pi5 owners",
    features: [
      "2x 128GB microSD cards",
      "Complete Rapture Kit content",
      "Use with your Pi5 (8GB+ RAM)",
      "Quick start guide",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Solo Starter Kit",
    price: 299,
    description: "Our most popular option",
    features: [
      "Raspberry Pi 5 (8GB)",
      "2x 128GB microSD cards",
      "25,000 mAh battery pack",
      "Protective carry case",
      "6-hour runtime",
      "Email support",
    ],
    popular: true,
  },
  {
    name: "Field Kit",
    price: 499,
    description: "Complete off-grid solution",
    features: [
      "Everything in Solo Kit",
      "5\" touchscreen display",
      "Built-in speakers",
      "Solar panel (50W)",
      "Integrated case",
      "Priority support",
    ],
    popular: false,
  },
];

export function PricingPreview() {
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
            Choose Your Configuration
          </h2>
          <p className="text-lg text-gray-600">
            From basic to field-ready, we have a solution for every use case
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-primary-500 shadow-2xl"
                    : "border border-gray-200 shadow-lg hover:shadow-2xl hover:border-primary-200"
                }`}
              >
                {/* Tier Name & Price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {formatCurrency(tier.price)}
                    </span>
                    <span className="text-gray-500">one-time</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/waitlist"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-all ${
                    tier.popular
                      ? "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Join Waitlist
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Pricing Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
          >
            <span>View full pricing details</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Also available: Hobbyist (FREE DIY) and custom Church/Enterprise packages
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

