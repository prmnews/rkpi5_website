import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "content" | "container" | "wide";
  as?: "div" | "section" | "article" | "main";
}

/**
 * Container component with responsive max-width
 * 
 * Sizes:
 * - content: 65ch (optimal reading width)
 * - container: 1280px (standard content)
 * - wide: 1536px (full-width sections)
 */
export function Container({ 
  children, 
  className, 
  size = "container",
  as: Component = "div"
}: ContainerProps) {
  const sizeClasses = {
    content: "max-w-content",
    container: "max-w-container",
    wide: "max-w-wide",
  };

  return (
    <Component 
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}

