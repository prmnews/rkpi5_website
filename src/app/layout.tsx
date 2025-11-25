import { ConvexProvider } from "@/providers/convex-provider";
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
  return (
    <ConvexProvider>
      <html lang="en">
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          <Header />
          <main className="min-h-screen pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ConvexProvider>
  );
}
