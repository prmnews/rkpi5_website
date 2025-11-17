"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { UseCaseCard } from "@/components/use-cases";
import { BookOpen, Users, Church, Globe } from "lucide-react";

const useCases = [
  {
    icon: BookOpen,
    title: "Home Study",
    problem: "Individual believers seeking deeper Biblical knowledge often struggle with finding comprehensive, offline-accessible resources that don't require constant internet connectivity. Study materials are fragmented across multiple platforms and devices, making consistent learning challenging.",
    solution: "RKPi5 provides a complete offline library with 26GB+ of theological content, multiple Bible translations, and structured discipleship materials. Students can access everything from a single device without internet dependency, enabling focused study in any environment.",
    results: "Learners gain uninterrupted access to 130+ hours of audio teaching and comprehensive study materials. The portable nature allows study anywhere—during commutes, travel, or in areas with poor connectivity—creating consistent learning habits and deeper theological understanding.",
    color: "from-primary-500 to-primary-700",
  },
  {
    icon: Users,
    title: "Family Prep",
    problem: "Families preparing for uncertain times need reliable access to Biblical teaching that works for all ages, but coordinating multiple devices and ensuring age-appropriate content can be overwhelming. Parents want a simple solution that the whole family can use together.",
    solution: "With RKPi5's WiFi portal, up to 15 family members can connect simultaneously to the same content library. Parents can guide children through appropriate materials while accessing deeper theological resources themselves. No account management or complex setup required—just connect and access.",
    results: "Families establish regular Biblical learning routines without technical friction. The shared access model fosters discussion and accountability, while the offline nature ensures teaching continuity regardless of external circumstances. Multi-generational discipleship becomes practical and sustainable.",
    color: "from-accent-purple to-purple-700",
  },
  {
    icon: Church,
    title: "Underground Churches",
    problem: "Communities in restricted-access environments face severe challenges accessing Biblical resources. Internet monitoring, censorship, and network shutdowns make traditional online resources dangerous or impossible to access. Physical materials are bulky and raise security concerns.",
    solution: "RKPi5 operates completely offline with no internet trail or external connections. The device appears as a local WiFi network, with content accessible only to those physically present. Compact form factor enables discreet transport and rapid deployment when needed.",
    results: "Believers gain secure access to comprehensive teaching resources without digital footprints. Small groups can study together safely, and leaders can disciple others with professional-quality materials that would otherwise be unavailable. The offline nature provides protection and peace of mind.",
    color: "from-accent-green to-green-700",
  },
  {
    icon: Globe,
    title: "Mission Fields",
    problem: "Remote missionary work often means operating in areas with unreliable or non-existent internet infrastructure. Missionaries need comprehensive resources for teaching and discipleship but can't depend on connectivity. Shipping physical materials is expensive and logistically challenging.",
    solution: "RKPi5's battery-powered, solar-compatible design works in any environment. 6-hour battery runtime supports extended teaching sessions, and the captive portal auto-connects users without technical configuration. All content is pre-loaded and ready to serve multiple users simultaneously.",
    results: "Missionaries deploy rich Biblical content anywhere—jungle camps, mountain villages, or disaster zones. Solar charging extends operation indefinitely in remote locations. Teams can disciple new believers with the same quality resources available in developed regions, accelerating church planting and leadership development.",
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

export function UseCasesContent() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-16">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Real-World Use Cases
            </h1>
            <p className="text-lg text-gray-600">
              See how RKPi5 serves believers in diverse situations and environments
            </p>
          </motion.div>

          {/* Beta Notice */}
          <motion.div
            className="mb-12 rounded-lg bg-sky-50 border border-sky-200 p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <h3 className="font-semibold text-sky-900 mb-2">
                  Stories from Our Beta Program Coming Soon
                </h3>
                <p className="text-sm text-sky-700">
                  We&apos;re currently gathering real testimonials and case studies from our beta testers. 
                  The scenarios below represent the types of use cases we&apos;re designing for, and will be 
                  supplemented with actual user stories and metrics as our beta program progresses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Use Case Grid */}
          <motion.div
            className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {useCases.map((useCase) => (
              <UseCaseCard
                key={useCase.title}
                icon={useCase.icon}
                title={useCase.title}
                problem={useCase.problem}
                solution={useCase.solution}
                results={useCase.results}
                color={useCase.color}
              />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our waitlist to be among the first to receive RKPi5 when it launches. 
              Early supporters get priority access and exclusive beta program benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#waitlist"
                className="inline-block rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
              >
                Join Waitlist
              </a>
              <a
                href="/product"
                className="inline-block rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                View Product Details
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

