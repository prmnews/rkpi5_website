import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKPi5 - Biblical Resources When Networks Fail",
  description: "26GB+ Rapture Kit content delivered via offline WiFi portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only use ClerkProvider if valid publishable key exists
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const hasValidClerkKey = clerkPublishableKey && clerkPublishableKey.startsWith('pk_');

  if (hasValidClerkKey) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ClerkProvider>
    );
  }

  // Fallback without Clerk for CI builds with placeholder keys
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
