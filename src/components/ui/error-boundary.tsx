"use client";

import { Component, ReactNode } from "react";
import { Container } from "./container";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * 
 * Catches React errors in child components and displays a fallback UI.
 * Logs errors to console for debugging.
 * 
 * Usage:
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

/**
 * Default error fallback UI
 */
function DefaultErrorFallback({ error }: { error: Error | null }) {
  return (
    <Container className="py-section">
      <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Something went wrong</h2>
        <p className="mb-6 text-gray-600">
          We encountered an error while rendering this page. Please try refreshing.
        </p>

        {error && process.env.NODE_ENV === "development" && (
          <details className="mb-6 rounded-lg bg-white p-4 text-left">
            <summary className="cursor-pointer font-semibold text-red-600">
              Error Details (Development Only)
            </summary>
            <pre className="mt-4 overflow-auto text-xs text-gray-700">
              {error.toString()}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-primary-500 px-6 py-3 font-medium text-white hover:bg-primary-600 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </Container>
  );
}

/**
 * Simple error fallback for inline errors
 */
export function SimpleErrorFallback({ 
  message = "Something went wrong",
  onRetry,
}: { 
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <p className="text-sm font-medium text-red-800">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 text-sm font-medium text-red-600 hover:text-red-700 underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}

