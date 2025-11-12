"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";
import { Check, X, ChevronDown, ChevronUp, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    id: "hobbyist",
    name: "Hobbyist",
    tagline: "FREE - DIY",
    price: 0,
    description: "For tech-savvy users with existing Raspberry Pi 5",
    features: [
      "Downloadable installation scripts",
      "Complete documentation",
      "Self-guided 45-minute setup",
      "Complete Rapture Kit content (26GB+)",
      "Create your own golden master",
      "Personal use only (no resale)",
    ],
    restrictions: ["Requires existing Pi5 (8GB+ RAM)", "Technical knowledge required"],
    cta: "Download Free",
    ctaLink: "/downloads",
    popular: false,
    color: "gray",
  },
  {
    id: "bare-bones",
    name: "Bare Bones",
    tagline: "Best Value",
    price: 99,
    description: "Perfect for existing Pi5 owners",
    features: [
      "2x 128GB microSD cards (SanDisk Extreme)",
      "Primary + backup card",
      "Pre-configured with Rapture Kit content",
      "Use with existing Pi5 (8GB+ RAM)",
      "Quick start guide (PDF)",
      "Email support",
      "Ready in <5 minutes",
    ],
    restrictions: ["Requires existing Pi5 with 8GB+ RAM"],
    cta: "Join Waitlist",
    ctaLink: "/waitlist",
    popular: false,
    color: "primary",
  },
  {
    id: "solo",
    name: "Solo Starter Kit",
    tagline: "Most Popular",
    price: 299,
    description: "Complete ready-to-use solution",
    features: [
      "Raspberry Pi 5 (8GB) included",
      "2x 128GB microSD cards",
      "25,000 mAh battery pack (6-hour runtime)",
      "Protective carry case",
      "WiFi captive portal pre-configured",
      "Complete Rapture Kit library",
      "TSA carry-on approved",
      "Quick start guide",
      "Email support",
    ],
    restrictions: [],
    cta: "Join Waitlist",
    ctaLink: "/waitlist",
    popular: true,
    color: "primary",
  },
  {
    id: "field",
    name: "Field Kit",
    tagline: "Off-Grid Ready",
    price: 499,
    description: "Self-contained for field deployment",
    features: [
      "Everything in Solo Kit",
      "Integrated case with cooling",
      "5\" touchscreen display built-in",
      "Built-in speakers",
      "50W solar panel (foldable, IP68)",
      "No external devices needed",
      "75GB available for custom content",
      "Priority email support",
      "Video setup tutorial",
    ],
    restrictions: [],
    cta: "Join Waitlist",
    ctaLink: "/waitlist",
    popular: false,
    color: "primary",
  },
];

const comparisonFeatures = [
  { category: "Hardware", features: [
    { name: "Raspberry Pi 5 (8GB)", hobbyist: "User provides", bare: "User provides", solo: "✓", field: "✓" },
    { name: "MicroSD Cards (128GB x2)", hobbyist: "User provides", bare: "✓", solo: "✓", field: "✓" },
    { name: "Battery Pack (25,000 mAh)", hobbyist: "User provides", bare: "✗", solo: "✓", field: "✓" },
    { name: "Integrated Display (5\")", hobbyist: "✗", bare: "✗", solo: "✗", field: "✓" },
    { name: "Solar Panel (50W)", hobbyist: "✗", bare: "✗", solo: "✗", field: "✓" },
  ]},
  { category: "Content", features: [
    { name: "Rapture Kit Content (26GB+)", hobbyist: "✓", bare: "✓", solo: "✓", field: "✓" },
    { name: "130+ Hours Audio", hobbyist: "✓", bare: "✓", solo: "✓", field: "✓" },
    { name: "39+ Hours Video", hobbyist: "✓", bare: "✓", solo: "✓", field: "✓" },
    { name: "Custom Content Space", hobbyist: "Limited", bare: "Limited", solo: "Limited", field: "75GB" },
  ]},
  { category: "Support", features: [
    { name: "Documentation", hobbyist: "✓", bare: "✓", solo: "✓", field: "✓" },
    { name: "Email Support", hobbyist: "✗", bare: "✓", solo: "✓", field: "✓" },
    { name: "Video Tutorial", hobbyist: "✗", bare: "✗", solo: "✗", field: "✓" },
    { name: "Priority Support", hobbyist: "✗", bare: "✗", solo: "✗", field: "✓" },
  ]},
  { category: "Setup", features: [
    { name: "Setup Time", hobbyist: "45 min", bare: "<5 min", solo: "<5 min", field: "<5 min" },
    { name: "Technical Skills Required", hobbyist: "✓", bare: "✗", solo: "✗", field: "✗" },
    { name: "Pre-Configured", hobbyist: "✗", bare: "✓", solo: "✓", field: "✓" },
  ]},
];

const faqs = [
  {
    question: "Can I upgrade from one tier to another later?",
    answer: "Yes! You can upgrade at any time. The price difference will be applied as a credit toward your upgrade. Contact our support team to arrange an upgrade.",
  },
  {
    question: "What's included in the Hobbyist (FREE) tier?",
    answer: "The Hobbyist tier provides downloadable installation scripts, complete documentation, and access to the full 26GB+ Rapture Kit content library. You'll need your own Raspberry Pi 5 (8GB+ RAM) and microSD cards. Setup takes about 45 minutes and requires basic technical knowledge.",
  },
  {
    question: "Is the battery pack TSA-approved for air travel?",
    answer: "Yes! The 25,000 mAh battery pack included in the Solo and Field kits is TSA carry-on approved. It's under the 100Wh limit for airline travel, making it perfect for missionaries and travelers.",
  },
  {
    question: "How long does the battery last?",
    answer: "The 25,000 mAh battery provides approximately 6 hours of continuous operation. The Field Kit includes a 50W solar panel for extended off-grid deployment and can recharge in 4-6 hours of direct sunlight.",
  },
  {
    question: "Can I add my own content?",
    answer: "Yes! All tiers support custom content. The Field Kit offers 75GB of additional storage specifically for your ministry materials, sermons, or church-specific content. Contact us about Church/Enterprise packages for golden master duplication.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and wire transfers for bulk orders. Church and enterprise customers can request NET-30 payment terms.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied for any reason, return the unit in original condition for a full refund (minus shipping).",
  },
  {
    question: "Is there a warranty?",
    answer: "All hardware comes with a 1-year manufacturer's warranty. Extended warranties and replacement plans are available for Church/Enterprise customers.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              From free DIY to field-ready solutions. Choose the option that fits your mission.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-section-lg">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-primary-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      {tier.tagline}
                    </div>
                  </div>
                )}

                <div
                  className={`relative bg-white rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${
                    tier.popular
                      ? "border-2 border-primary-500 shadow-2xl scale-105"
                      : "border border-gray-200 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                      {!tier.popular && (
                        <span className="text-xs font-semibold text-gray-500 uppercase">{tier.tagline}</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                    
                    <div className="flex items-baseline gap-2">
                      {tier.price === 0 ? (
                        <span className="text-5xl font-bold text-gray-900">FREE</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-gray-900">
                            {formatCurrency(tier.price)}
                          </span>
                          <span className="text-gray-500">one-time</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Restrictions */}
                  {tier.restrictions.length > 0 && (
                    <div className="mb-6 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-xs font-semibold text-amber-800 mb-2">Requirements:</p>
                      {tier.restrictions.map((restriction) => (
                        <p key={restriction} className="text-xs text-amber-700">• {restriction}</p>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href={tier.ctaLink}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-primary-500 text-white hover:bg-primary-600 shadow-lg"
                        : tier.price === 0
                        ? "bg-gray-800 text-white hover:bg-gray-900"
                        : "bg-primary-500 text-white hover:bg-primary-600"
                    }`}
                  >
                    {tier.price === 0 ? <Download className="w-5 h-5" /> : null}
                    <span>{tier.cta}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-section-lg bg-gray-50">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Detailed Comparison
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            See exactly what&apos;s included in each tier
          </p>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 font-bold text-gray-900 min-w-[200px]">Feature</th>
                  <th className="text-center p-4 font-bold text-gray-900 min-w-[120px]">Hobbyist</th>
                  <th className="text-center p-4 font-bold text-gray-900 min-w-[120px]">Bare Bones</th>
                  <th className="text-center p-4 font-bold text-primary-600 bg-primary-50 min-w-[120px]">Solo</th>
                  <th className="text-center p-4 font-bold text-gray-900 min-w-[120px]">Field</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <>
                    <tr key={category.category} className="bg-gray-100">
                      <td colSpan={5} className="p-3 font-bold text-gray-900 text-sm uppercase tracking-wider">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, idx) => (
                      <tr key={feature.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 text-gray-900">{feature.name}</td>
                        <td className="p-4 text-center text-sm">{feature.hobbyist}</td>
                        <td className="p-4 text-center text-sm">{feature.bare}</td>
                        <td className="p-4 text-center text-sm bg-primary-50/50 font-semibold">{feature.solo}</td>
                        <td className="p-4 text-center text-sm">{feature.field}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-section-lg">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Common questions about our pricing and products
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Church/Enterprise Section */}
      <section className="py-section-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Church & Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Custom deployments for organizations and ministries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Church Packages</h3>
                <p className="text-gray-300 mb-6">
                  Perfect for congregational distribution, mission fields, and ministry deployment
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Custom branding (SSID, logos, splash page)",
                    "Your ministry content alongside Rapture Kit",
                    "Golden master for duplication",
                    "Installation consultation",
                    "Starting at $1,000",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400">
                  Available after public launch
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Enterprise Packages</h3>
                <p className="text-gray-300 mb-6">
                  Large-scale deployments for organizations and training centers
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Multiple units (10-100+)",
                    "Fleet management & duplication",
                    "Custom content integration",
                    "Dedicated support channel",
                    "Custom quote via RFP",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400">
                  RFP process not yet established
                </p>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Discuss Your Needs?</h3>
              <p className="text-gray-300 mb-6">
                Contact us to discuss custom packages for your church or organization
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Request Quote</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-section-lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join the waitlist and be among the first to receive your RKPi5
            </p>
            <a
              href="/waitlist"
              className="inline-block px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Join Waitlist Now
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

