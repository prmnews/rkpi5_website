"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.string().min(1, "Please select an inquiry type"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submitContact = useMutation(api.contacts.submitContact);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await submitContact({
        name: data.name,
        email: data.email,
        company: data.company || undefined,
        phone: data.phone || undefined,
        message: data.message,
        type: data.type,
      });

      setSubmitStatus("success");
      reset();
      
      if (onSuccess) {
        onSuccess();
      }

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-green-700">
                Thank you for reaching out. We&apos;ll respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">
                Submission Failed
              </h3>
              <p className="text-sm text-red-700">
                {errorMessage || "An error occurred. Please try again or email us directly."}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            disabled={isSubmitting}
            className={cn(
              "w-full px-4 py-3 rounded-lg border transition-colors",
              errors.name
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
              "focus:outline-none focus:ring-2",
              isSubmitting && "bg-gray-50 cursor-not-allowed"
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
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            disabled={isSubmitting}
            className={cn(
              "w-full px-4 py-3 rounded-lg border transition-colors",
              errors.email
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
              "focus:outline-none focus:ring-2",
              isSubmitting && "bg-gray-50 cursor-not-allowed"
            )}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Company Field (Optional) */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            disabled={isSubmitting}
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-colors",
              "focus:outline-none focus:ring-2",
              isSubmitting && "bg-gray-50 cursor-not-allowed"
            )}
            placeholder="Your Organization"
          />
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            disabled={isSubmitting}
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-colors",
              "focus:outline-none focus:ring-2",
              isSubmitting && "bg-gray-50 cursor-not-allowed"
            )}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Type Dropdown */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            {...register("type")}
            disabled={isSubmitting}
            className={cn(
              "w-full px-4 py-3 rounded-lg border transition-colors",
              errors.type
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
              "focus:outline-none focus:ring-2",
              isSubmitting && "bg-gray-50 cursor-not-allowed"
            )}
          >
            <option value="">Select an inquiry type...</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
          )}
        </div>

        {/* Message Field (Textarea) */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message")}
            disabled={isSubmitting}
            className={cn(
              "w-full px-4 py-3 rounded-lg border transition-colors resize-none",
              errors.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
              "focus:outline-none focus:ring-2",
              isSubmitting && "bg-gray-50 cursor-not-allowed"
            )}
            placeholder="Tell us how we can help you..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full px-6 py-3 rounded-lg font-semibold transition-colors",
              "bg-primary-600 text-white hover:bg-primary-700",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              "disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300",
              "flex items-center justify-center gap-2"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 text-center">
          We typically respond within 24-48 hours during business days
        </p>
      </form>
    </div>
  );
}

