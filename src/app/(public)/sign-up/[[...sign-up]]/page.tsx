import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - RKPi5",
  description: "Create your RKPi5 account to get started with the Rapture Kit portable biblical resource platform.",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-12">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-xl rounded-lg border border-gray-200",
            headerTitle: "text-2xl font-bold text-gray-900",
            headerSubtitle: "text-sm text-gray-600",
            socialButtonsBlockButton:
              "border border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-all rounded-lg shadow-sm",
            socialButtonsBlockButtonText: "font-medium text-gray-700",
            formButtonPrimary:
              "bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5",
            formFieldInput:
              "rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 focus:ring-2",
            formFieldLabel: "text-sm font-medium text-gray-700",
            footerActionLink: "text-primary-500 hover:text-primary-600 font-medium",
            identityPreviewText: "text-gray-700",
            identityPreviewEditButton: "text-primary-500 hover:text-primary-600",
            formFieldErrorText: "text-red-600 text-sm",
            formFieldSuccessText: "text-green-600 text-sm",
            formFieldWarningText: "text-orange-600 text-sm",
            dividerLine: "bg-gray-300",
            dividerText: "text-gray-500",
            formResendCodeLink: "text-primary-500 hover:text-primary-600",
            otpCodeFieldInput: "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
          },
          variables: {
            colorPrimary: "#0ea5e9",
            colorBackground: "#ffffff",
            colorText: "#1e293b",
            colorTextSecondary: "#64748b",
            colorDanger: "#dc2626",
            colorSuccess: "#16a34a",
            colorWarning: "#ea580c",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "0.875rem",
            fontWeight: {
              normal: 400,
              medium: 500,
              semibold: 600,
              bold: 700,
            },
            borderRadius: "0.5rem",
            spacingUnit: "0.5rem",
          },
        }}
      />
    </div>
  );
}

