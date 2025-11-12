import { Header } from "@/components/layout";
import { Container } from "@/components/ui";

export default function HeaderDemoPage() {
  return (
    <>
      <Header />
      
      {/* Page content to test scroll behavior */}
      <main className="pt-24">
        <Container>
          <div className="py-section">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Header Component Demo
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Scroll down to see the header transition from transparent to solid background
            </p>
            
            <div className="space-y-section">
              {/* Feature Cards */}
              <section className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Header Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sticky Positioning
                    </h3>
                    <p className="text-gray-600">
                      Header stays at the top while scrolling with smooth transitions
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Scroll Detection
                    </h3>
                    <p className="text-gray-600">
                      Background opacity animates based on scroll position
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Navigation Links
                    </h3>
                    <p className="text-gray-600">
                      Animated underlines on hover for better UX
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Framer Motion
                    </h3>
                    <p className="text-gray-600">
                      Smooth animations powered by Framer Motion
                    </p>
                  </div>
                </div>
              </section>

              {/* Scroll Test Sections */}
              {[1, 2, 3, 4, 5].map((i) => (
                <section key={i} className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-12 shadow-sm">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Section {i}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Keep scrolling to see the header background transition. The header will:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 font-bold">•</span>
                      <span>Change from transparent to solid white background</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 font-bold">•</span>
                      <span>Add a subtle border and shadow for depth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 font-bold">•</span>
                      <span>Maintain smooth transitions using Framer Motion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 font-bold">•</span>
                      <span>Stay fixed at the top with backdrop blur effect</span>
                    </li>
                  </ul>

                  {i === 3 && (
                    <div className="mt-8 p-6 bg-white rounded-lg border border-primary-200">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        💡 Pro Tip
                      </h3>
                      <p className="text-gray-600">
                        Hover over the navigation links to see the animated underline effect, 
                        and try clicking the &quot;Join Waitlist&quot; button to see the hover animation!
                      </p>
                    </div>
                  )}
                </section>
              ))}

              {/* Summary */}
              <section className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Story 3.1 Features ✅</h2>
                <div className="space-y-2 text-primary-50">
                  <p>✓ Task 3.1.1: Header component skeleton created</p>
                  <p>✓ Task 3.1.2: Sticky header with scroll behavior using Framer Motion</p>
                  <p>✓ Task 3.1.3: Logo placeholder and navigation links added</p>
                  <p>✓ Task 3.1.4: CTA button with hover effects and icon</p>
                  <p>✓ Task 3.1.5: Fully styled for desktop with Tailwind</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

