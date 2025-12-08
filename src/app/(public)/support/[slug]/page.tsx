import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout, CodeBlock, Figure, VideoFigure } from "@/components/docs";
import { getDocTitle } from "@/lib/docs-navigation";

const components = {
  Callout,
  CodeBlock,
  Figure,
  VideoFigure,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Get all valid slugs for static generation
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content/support");
  const files = fs.readdirSync(contentDir);
  
  return files
    .filter((file) => file.endsWith(".mdx") && file !== "index.mdx")
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getDocContent(slug);
  
  if (!content) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: content.frontmatter.title || getDocTitle(slug),
    description: content.frontmatter.description,
  };
}

async function getDocContent(slug: string) {
  const filePath = path.join(process.cwd(), "content/support", `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, frontmatter: data };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = await getDocContent(slug);

  if (!doc) {
    notFound();
  }

  return (
    <MDXRemote 
      source={doc.content} 
      components={components}
    />
  );
}

