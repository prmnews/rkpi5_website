"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const testimonials = [
  {
    quote: "The RKPi5 has been a game-changer for our home group. We can share biblical teaching with friends and family who need to understand what's coming.",
    author: "Beta Tester 1",
    role: "Home Group Leader",
    initials: "BT",
  },
  {
    quote: "I'm leaving multiple units with loved ones. When the Rapture happens, they'll have everything they need to understand what occurred and find salvation.",
    author: "Beta Tester 2",
    role: "Watchman",
    initials: "BT",
  },
  {
    quote: "The setup was incredibly simple. Even my non-technical family members were able to access the content immediately. This is exactly what we need.",
    author: "Beta Tester 3",
    role: "Family Preparedness",
    initials: "BT",
  },
];

export function Testimonials() {
  return (
    <section className="py-section-lg bg-gradient-to-br from-gray-50 to-primary-50/30">
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
            Trusted by Believers Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our beta testers who are already preparing
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl border border-gray-100">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beta Program Notice */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500">
            These are mock testimonials from our beta testing program. Real stories coming soon.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

