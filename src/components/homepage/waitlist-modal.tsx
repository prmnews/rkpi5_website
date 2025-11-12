"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Waitlist form validation schema
const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  useCase: z.string().min(10, "Please tell us more (at least 10 characters)"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
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
    
    // Close modal and reset after success
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  // Close on Escape key
  useState(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Join the Waitlist
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Be first to know when we launch. Limited beta spots available.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 py-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">You&apos;re on the list!</h3>
                    <p className="text-gray-600 mb-6">
                      Check your email for confirmation. We&apos;ll be in touch soon.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

