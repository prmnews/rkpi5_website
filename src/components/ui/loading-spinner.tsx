import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

/**
 * Loading spinner component with size variants
 * 
 * Sizes:
 * - sm: 16px (inline loading)
 * - md: 32px (default, button loading)
 * - lg: 48px (page loading)
 */
export function LoadingSpinner({ 
  size = "md", 
  className,
  label = "Loading..."
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={cn(
          "animate-spin rounded-full border-primary-500 border-t-transparent",
          sizeClasses[size],
          className
        )}
        role="status"
        aria-label={label}
      >
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

/**
 * Full-page loading spinner
 */
export function LoadingPage({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingSpinner size="lg" label={label} />
    </div>
  );
}

/**
 * Loading overlay for sections
 */
export function LoadingOverlay({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <LoadingSpinner size="lg" label={label} />
    </div>
  );
}

