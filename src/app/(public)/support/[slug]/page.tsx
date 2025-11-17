import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { Callout, CodeBlock } from '@/components/mdx';

/**
 * Support Documentation Page
 * Dynamically renders MDX content from /content/support directory
 * 
 * Note: This uses dynamic import of MDX files. For production, consider
 * using next-mdx-remote or similar for better performance.
 */

interface PageProps {
  params: {
    slug: string;
  };
}

// Check if MDX file exists
async function checkMDXExists(slug: string) {
  try {
    const contentPath = path.join(process.cwd(), 'content', 'support', `${slug}.mdx`);
    return fs.existsSync(contentPath);
  } catch (error) {
    console.error(`Error checking MDX file for slug: ${slug}`, error);
    return false;
  }
}

// Generate static params for all MDX files
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'support');
  
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
      return [];
    }

    const files = fs.readdirSync(contentDir);
    
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({
        slug: file.replace('.mdx', ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  
  // Convert slug to title (e.g., "getting-started" -> "Getting Started")
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} - Support - RKPi5`,
    description: `${title} support documentation for RKPi5`,
  };
}

export default async function SupportPage({ params }: PageProps) {
  const { slug } = params;
  const exists = await checkMDXExists(slug);

  if (!exists) {
    notFound();
  }

  // Import the MDX file dynamically
  let MDXContent;
  try {
    const mdxModule = await import(`@/../../content/support/${slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch (error) {
    console.error(`Error importing MDX file: ${slug}`, error);
    notFound();
  }

  return (
    <article className="prose prose-slate dark:prose-invert max-w-4xl mx-auto prose-headings:font-bold prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-code:text-sm">
      <MDXContent components={{ Callout, CodeBlock }} />
    </article>
  );
}

