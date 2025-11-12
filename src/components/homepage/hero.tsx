"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Waitlist form validation schema
const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  useCase: z.string().min(10, "Please tell us more (at least 10 characters)"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call (will be replaced with Convex mutation later)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Waitlist submission:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-purple/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Now Accepting Beta Testers
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Biblical Resources When{" "}
              <span className="text-primary-500">Networks Fail</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              26GB+ of Rapture Kit content delivered via offline WiFi portal. 
              Reach loved ones before the Rapture. Equip saints after. 
              Setup in less than 5 minutes.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "130+ hours of audio teaching",
                "39+ hours of video content",
                "Multiple Bible translations",
                "Serves 15+ users simultaneously",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Product Image Placeholder - Mobile */}
            <div className="lg:hidden mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-purple/20 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-white font-bold text-4xl">R</span>
                    </div>
                    <p className="text-gray-600 font-medium">Product Image Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Product Image Placeholder - Desktop */}
            <div className="hidden lg:block mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-purple/20 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-white font-bold text-5xl">R</span>
                    </div>
                    <p className="text-gray-600 font-medium text-lg">Product Image Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Join the Waitlist
              </h2>
              <p className="text-gray-600 mb-6">
                Be first to know when we launch. Limited beta spots available.
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-green-800 font-medium">Success!</p>
                      <p className="text-green-700 text-sm">You&apos;re on the waitlist. Check your email for confirmation.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-colors",
                      errors.name
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
                      "focus:outline-none focus:ring-2"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-colors",
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
                      "focus:outline-none focus:ring-2"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field (Optional) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Use Case Field */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                    How will you use RKPi5? *
                  </label>
                  <textarea
                    id="useCase"
                    {...register("useCase")}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-colors resize-none",
                      errors.useCase
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
                      "focus:outline-none focus:ring-2"
                    )}
                    placeholder="Tell us about your use case..."
                  />
                  {errors.useCase && (
                    <p className="mt-1 text-sm text-red-600">{errors.useCase.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 px-6 rounded-lg font-semibold text-white transition-all",
                    "bg-primary-500 hover:bg-primary-600",
                    "shadow-lg hover:shadow-xl",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    <span>Join Waitlist</span>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  By joining, you agree to our{" "}
                  <a href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-primary-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

