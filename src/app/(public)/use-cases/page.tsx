import { Metadata } from "next";
import { UseCasesContent } from "@/components/use-cases";

export const metadata: Metadata = {
  title: "Use Cases - RKPi5 Marketing",
  description: "Explore real-world scenarios where RKPi5 provides value: home study, family preparation, underground churches, and mission fields. See how offline Biblical resources serve believers in any environment.",
};

/**
 * Use Cases Page
 * Displays 4 distinct use case scenarios with Problem → Solution → Results format
 */
export default function UseCasesPage() {
  return <UseCasesContent />;
}

