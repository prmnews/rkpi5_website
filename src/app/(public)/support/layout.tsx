import { DocsLayout } from "@/components/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s – RKPi5 Support",
    default: "Support Documentation – RKPi5",
  },
  description: "Find guides, troubleshooting tips, and answers to common questions about RKPi5.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}

