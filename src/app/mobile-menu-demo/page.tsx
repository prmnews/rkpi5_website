import { Header } from "@/components/layout";
import { Container } from "@/components/ui";

export default function MobileMenuDemoPage() {
  return (
    <>
      <Header />
      
      {/* Page content */}
      <main className="pt-24">
        <Container>
          <div className="py-section">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mobile Menu Demo
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Resize your browser or open on mobile to test the mobile navigation menu
            </p>
            
            <div className="space-y-8">
              {/* Instructions */}
              <section className="bg-primary-50 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  📱 Testing Instructions
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-1">1.</span>
                    <span>Resize your browser window to mobile size (below 1024px width)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-1">2.</span>
                    <span>Click the hamburger menu button in the top-right corner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-1">3.</span>
                    <span>Watch the smooth slide-in animation from the right</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-1">4.</span>
                    <span>Try pressing ESC key to close the menu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold mt-1">5.</span>
                    <span>Click the backdrop overlay to close</span>
                  </li>
                </ul>
              </section>

              {/* Features */}
              <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Mobile Menu Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Slide Animation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Smooth slide-in from right with spring physics using Framer Motion
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🍔</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Animated Icon
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Hamburger menu icon morphs into X with smooth rotation
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">♿</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Accessible
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Full ARIA labels, keyboard navigation (ESC to close), and semantic HTML
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Body Scroll Lock
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Prevents background scrolling when menu is open
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🌫️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Backdrop Blur
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Semi-transparent overlay with backdrop blur for modern feel
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Responsive
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Only shows on mobile/tablet (hidden on desktop screens)
                    </p>
                  </div>
                </div>
              </section>

              {/* Implementation Details */}
              <section className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Implementation Details
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Animation Library:</h3>
                    <p className="text-sm">Framer Motion with AnimatePresence for smooth mount/unmount animations</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accessibility Features:</h3>
                    <ul className="text-sm space-y-1 ml-4 list-disc">
                      <li>ARIA labels and roles (dialog, modal)</li>
                      <li>Keyboard navigation (ESC to close)</li>
                      <li>Focus management</li>
                      <li>Semantic HTML structure</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">User Experience:</h3>
                    <ul className="text-sm space-y-1 ml-4 list-disc">
                      <li>Smooth spring physics for natural feel</li>
                      <li>Staggered animation for navigation items</li>
                      <li>Click outside to close</li>
                      <li>Body scroll lock when open</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Scroll Content */}
              {[1, 2, 3].map((i) => (
                <section key={i} className="bg-gradient-to-br from-accent-purple/10 to-white rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Test Section {i}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    This content helps test the body scroll lock feature. When the mobile menu
                    is open, the background should not scroll.
                  </p>
                  <p className="text-gray-600">
                    Try opening the mobile menu and attempting to scroll the page. You should
                    find that only the menu itself is scrollable, not the background content.
                  </p>
                </section>
              ))}

              {/* Summary */}
              <section className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Story 3.2 Complete ✅</h2>
                <div className="space-y-2 text-primary-50">
                  <p>✓ Task 3.2.1: MobileMenu component created</p>
                  <p>✓ Task 3.2.2: Hamburger to X icon animation implemented</p>
                  <p>✓ Task 3.2.3: Slide-out menu with Framer Motion animations</p>
                  <p>✓ Task 3.2.4: Full accessibility (ARIA, keyboard, focus management)</p>
                  <p>✓ Task 3.2.5: Responsive and mobile-optimized</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

