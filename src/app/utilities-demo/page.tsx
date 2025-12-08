"use client";

import { useState } from "react";
import { Container, LoadingSpinner, ErrorBoundary, SimpleErrorFallback } from "@/components/ui";
import {
  formatDate,
  formatRelativeTime,
  formatCurrency,
  formatNumber,
  truncate,
  getInitials,
  isEmpty,
  cn,
} from "@/lib/utils";

export default function UtilitiesDemoPage() {
  const [showError, setShowError] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Utility Components Demo</h1>
        <p className="text-xl text-gray-600 mb-section">
          Story 2.2: Utility Components & Helper Functions Showcase
        </p>

        {/* Container Examples */}
        <section className="mb-section-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Container Component</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">size=&quot;content&quot; (65ch reading width)</p>
              <Container size="content" className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  This container is optimized for reading with a maximum width of 65 characters,
                  following typography best practices for optimal readability and reduced eye strain.
                </p>
              </Container>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">size=&quot;container&quot; (1280px - default)</p>
              <Container size="container" className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700">Standard container width for most page sections</p>
              </Container>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">size=&quot;wide&quot; (1536px)</p>
              <Container size="wide" className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700">Wide container for hero sections and feature grids</p>
              </Container>
            </div>
          </div>
        </section>

        {/* Loading Spinners */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Loading Spinners</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Small (sm)</p>
              <div className="flex justify-center">
                <LoadingSpinner size="sm" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Medium (md - default)</p>
              <div className="flex justify-center">
                <LoadingSpinner size="md" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Large (lg)</p>
              <div className="flex justify-center">
                <LoadingSpinner size="lg" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">In Buttons:</p>
              <button className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg">
                <LoadingSpinner size="sm" className="border-white border-t-transparent" />
                <span>Loading...</span>
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Custom Color:</p>
              <LoadingSpinner 
                size="md" 
                className="border-accent-purple border-t-transparent" 
              />
            </div>
          </div>
        </section>

        {/* Error Boundary */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Error Boundary</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Error boundaries catch JavaScript errors in child components
              </p>
              
              <ErrorBoundary>
                <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                  <p className="text-green-800">
                    ✓ This component is working fine - no errors caught
                  </p>
                </div>
              </ErrorBoundary>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-4">Simple error fallback</p>
              <SimpleErrorFallback 
                message="Failed to load user data" 
                onRetry={() => alert("Retrying...")}
              />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-4">
                Click button to trigger an error (demonstrates error boundary)
              </p>
              <button
                onClick={() => setShowError(true)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Trigger Error
              </button>
              
              {showError && (
                <ErrorBoundary>
                  <ThrowError />
                </ErrorBoundary>
              )}
            </div>
          </div>
        </section>

        {/* Helper Functions */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Helper Functions</h2>
          
          <div className="space-y-8">
            {/* Date Formatting */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Date Formatting</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Function</span>
                  <span className="text-gray-500">Result</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">formatDate(new Date())</code>
                  <code className="text-primary-600">{formatDate(new Date())}</code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">formatRelativeTime(Date.now() - 7200000)</code>
                  <code className="text-primary-600">{formatRelativeTime(Date.now() - 7200000)}</code>
                </div>
              </div>
            </div>

            {/* Currency & Numbers */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Currency & Numbers</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Function</span>
                  <span className="text-gray-500">Result</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">formatCurrency(299)</code>
                  <code className="text-primary-600">{formatCurrency(299)}</code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">formatCurrency(29900, true)</code>
                  <code className="text-primary-600">{formatCurrency(29900, true)}</code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">formatNumber(26000)</code>
                  <code className="text-primary-600">{formatNumber(26000)}</code>
                </div>
              </div>
            </div>

            {/* String Utilities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">String Utilities</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Function</span>
                  <span className="text-gray-500">Result</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">truncate(&quot;Biblical Resources...&quot;, 20)</code>
                  <code className="text-primary-600">{truncate("Biblical Resources When Networks Fail", 20)}</code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">getInitials(&quot;Scott Townsend&quot;)</code>
                  <code className="text-primary-600">{getInitials("Scott Townsend")}</code>
                </div>
              </div>
            </div>

            {/* Validation Utilities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Validation Utilities</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Function</span>
                  <span className="text-gray-500">Result</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">isEmpty(&quot;&quot;)</code>
                  <code className="text-primary-600">{isEmpty("").toString()}</code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">isEmpty(&quot;RKPi5&quot;)</code>
                  <code className="text-primary-600">{isEmpty("RKPi5").toString()}</code>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <code className="text-gray-700">isEmpty([])</code>
                  <code className="text-primary-600">{isEmpty([]).toString()}</code>
                </div>
              </div>
            </div>

            {/* cn() Utility */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">cn() - Class Name Merger</h3>
              <p className="text-sm text-gray-600 mb-4">
                Intelligently merges Tailwind classes, resolving conflicts
              </p>
              <div className="space-y-4">
                <div className={cn("p-4 rounded-lg", "bg-primary-500", "text-white")}>
                  cn(&quot;p-4 rounded-lg&quot;, &quot;bg-primary-500&quot;, &quot;text-white&quot;)
                </div>
                <div className={cn("px-4 py-2", "px-6", "bg-accent-purple text-white rounded-lg")}>
                  Conflict resolution: px-4 → px-6 (latest wins)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Story 2.2 Complete ✅</h2>
          <div className="space-y-2 text-primary-50">
            <p>✓ Task 2.2.1: Container component with 3 size variants</p>
            <p>✓ Task 2.2.2: LoadingSpinner with sm/md/lg sizes + variants</p>
            <p>✓ Task 2.2.3: ErrorBoundary with custom fallback support</p>
            <p>✓ Task 2.2.4: 10+ helper functions in lib/utils.ts</p>
          </div>
        </section>
      </Container>
    </div>
  );
}

// Component that throws an error for testing
function ThrowError(): null {
  throw new Error("Test error triggered by user action");
  return null; // unreachable, but satisfies TypeScript
}

