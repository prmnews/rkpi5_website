import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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

  const LayoutContent = (
    <>
      <Header />
      <main className="min-h-screen pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );

  if (hasValidClerkKey) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
            {LayoutContent}
          </body>
        </html>
      </ClerkProvider>
    );
  }

  // Fallback without Clerk for CI builds with placeholder keys
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {LayoutContent}
      </body>
    </html>
  );
}
