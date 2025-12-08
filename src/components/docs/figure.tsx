import Image from "next/image";
import { cn } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Figure Component for Images
 * Usage in MDX: <Figure src="/path/to/image.jpg" alt="Description" caption="Figure 1 - This is what a microSD card looks like" />
 */
export function Figure({ 
  src, 
  alt, 
  caption, 
  width = 800, 
  height = 600,
  className 
}: FigureProps) {
  // Check if image is from content/public (served via route handler)
  // Next.js Image optimization doesn't work with route handlers, so use unoptimized
  const isContentPublic = src.startsWith('/content/public');
  
  return (
    <figure className={cn("my-6", className)}>
      <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-[200px]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="max-w-full h-auto"
          style={{ objectFit: "contain" }}
          unoptimized={isContentPublic}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface VideoFigureProps {
  src: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

/**
 * VideoFigure Component for Videos
 * Usage in MDX: <VideoFigure src="/path/to/video.mp4" caption="Figure 2 - How to insert a microSD card" />
 */
export function VideoFigure({
  src,
  caption,
  width = 800,
  height = 450,
  className,
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}: VideoFigureProps) {
  return (
    <figure className={cn("my-6", className)}>
      <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <video
          src={src}
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          className="w-full h-auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
