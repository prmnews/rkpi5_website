import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout, CodeBlock, Figure, VideoFigure } from "@/components/docs";

export const metadata: Metadata = {
  title: "Support Documentation",
  description: "Find guides, troubleshooting tips, and answers to common questions about RKPi5.",
};

const components = {
  Callout,
  CodeBlock,
  Figure,
  VideoFigure,
};

async function getSupportContent() {
  const filePath = path.join(process.cwd(), "content/support/index.mdx");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, frontmatter: data };
}

export default async function SupportPage() {
  const { content } = await getSupportContent();

  return (
    <MDXRemote 
      source={content} 
      components={components}
    />
  );
}

