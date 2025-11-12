export default function DesignTokensPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-container px-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Design System</h1>
        <p className="text-xl text-gray-600 mb-section">
          RKPi5 Marketing Website - Design Tokens Showcase
        </p>

        {/* Typography Scale */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Typography</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-6xl</p>
              <p className="text-6xl font-bold text-gray-900">Biblical Resources When Networks Fail</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-5xl</p>
              <p className="text-5xl font-bold text-gray-900">Design System Complete</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-4xl</p>
              <p className="text-4xl font-semibold text-gray-900">Section Heading</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-3xl</p>
              <p className="text-3xl font-semibold text-gray-900">Subsection Heading</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-2xl</p>
              <p className="text-2xl font-medium text-gray-900">Card Title</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-xl</p>
              <p className="text-xl text-gray-900">Large Body Text</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-base</p>
              <p className="text-base text-gray-900">Body text - The quick brown fox jumps over the lazy dog</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-2">text-sm</p>
              <p className="text-sm text-gray-600">Small text - Helper text and captions</p>
            </div>
            
            <div className="pb-4">
              <p className="text-sm text-gray-500 mb-2">text-xs</p>
              <p className="text-xs text-gray-500">Extra small - Metadata and labels</p>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <p className="text-sm text-gray-500 mb-2">Monospace font (font-mono)</p>
              <code className="font-mono text-base text-primary-600 bg-gray-100 px-3 py-1 rounded">
                const config = &#123; name: &quot;RKPi5&quot; &#125;;
              </code>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Color Palette</h2>
          
          {/* Primary Blues */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primary (Blues)</h3>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <div className="h-20 bg-primary-50 rounded-lg mb-2 border border-gray-200"></div>
                <p className="text-xs text-gray-600">50</p>
              </div>
              <div>
                <div className="h-20 bg-primary-200 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">200</p>
              </div>
              <div>
                <div className="h-20 bg-primary-400 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">400</p>
              </div>
              <div>
                <div className="h-20 bg-primary-500 rounded-lg mb-2 ring-2 ring-primary-700"></div>
                <p className="text-xs font-semibold text-gray-900">500 (Main)</p>
              </div>
              <div>
                <div className="h-20 bg-primary-600 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">600</p>
              </div>
              <div>
                <div className="h-20 bg-primary-700 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">700</p>
              </div>
              <div>
                <div className="h-20 bg-primary-800 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">800</p>
              </div>
              <div>
                <div className="h-20 bg-primary-900 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">900</p>
              </div>
              <div>
                <div className="h-20 bg-primary-950 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">950</p>
              </div>
            </div>
          </div>

          {/* Gray Scale */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gray Scale</h3>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <div className="h-20 bg-gray-50 rounded-lg mb-2 border border-gray-200"></div>
                <p className="text-xs text-gray-600">50</p>
              </div>
              <div>
                <div className="h-20 bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">100</p>
              </div>
              <div>
                <div className="h-20 bg-gray-200 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">200</p>
              </div>
              <div>
                <div className="h-20 bg-gray-300 rounded-lg mb-2"></div>
                <p className="text-xs text-gray-600">300</p>
              </div>
              <div>
                <div className="h-20 bg-gray-400 rounded-lg mb-2"></div>
                <p className="text-xs text-white">400</p>
              </div>
              <div>
                <div className="h-20 bg-gray-500 rounded-lg mb-2"></div>
                <p className="text-xs text-white">500</p>
              </div>
              <div>
                <div className="h-20 bg-gray-600 rounded-lg mb-2"></div>
                <p className="text-xs text-white">600</p>
              </div>
              <div>
                <div className="h-20 bg-gray-700 rounded-lg mb-2"></div>
                <p className="text-xs text-white">700</p>
              </div>
              <div>
                <div className="h-20 bg-gray-800 rounded-lg mb-2"></div>
                <p className="text-xs text-white">800</p>
              </div>
              <div>
                <div className="h-20 bg-gray-900 rounded-lg mb-2"></div>
                <p className="text-xs text-white">900</p>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accent Colors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Purple</h4>
                <div className="space-y-2">
                  <div className="h-16 bg-accent-purple-light rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-mono">light</span>
                  </div>
                  <div className="h-16 bg-accent-purple rounded-lg flex items-center justify-center ring-2 ring-purple-700">
                    <span className="text-xs text-white font-mono font-semibold">DEFAULT</span>
                  </div>
                  <div className="h-16 bg-accent-purple-dark rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-mono">dark</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Green</h4>
                <div className="space-y-2">
                  <div className="h-16 bg-accent-green-light rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-mono">light</span>
                  </div>
                  <div className="h-16 bg-accent-green rounded-lg flex items-center justify-center ring-2 ring-green-700">
                    <span className="text-xs text-white font-mono font-semibold">DEFAULT</span>
                  </div>
                  <div className="h-16 bg-accent-green-dark rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-mono">dark</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Orange</h4>
                <div className="space-y-2">
                  <div className="h-16 bg-accent-orange-light rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-mono">light</span>
                  </div>
                  <div className="h-16 bg-accent-orange rounded-lg flex items-center justify-center ring-2 ring-orange-700">
                    <span className="text-xs text-white font-mono font-semibold">DEFAULT</span>
                  </div>
                  <div className="h-16 bg-accent-orange-dark rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-mono">dark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Spacing & Layout</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">max-w-content (65ch) - Optimal reading width</p>
              <div className="max-w-content bg-primary-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  This container is optimized for reading text content with a comfortable line length.
                  Approximately 65 characters per line ensures optimal readability according to typography best practices.
                </p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">max-w-container (1280px) - Standard container</p>
              <div className="max-w-container bg-primary-50 p-4 rounded-lg">
                <p className="text-gray-700">Standard content container for most page sections</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">max-w-wide (1536px) - Wide container</p>
              <div className="max-w-wide bg-primary-50 p-4 rounded-lg">
                <p className="text-gray-700">Wide container for hero sections and feature grids</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Section Spacing</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">section-sm (4rem / 64px)</p>
                  <div className="h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-primary-900">Small vertical spacing</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">section (6rem / 96px)</p>
                  <div className="h-24 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-primary-900">Standard vertical spacing</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">section-lg (8rem / 128px)</p>
                  <div className="h-32 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-primary-900">Large vertical spacing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section className="mb-section-lg bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Usage Examples</h2>
          
          <div className="space-y-8">
            {/* Button Variants */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors">
                  Primary Button
                </button>
                <button className="px-6 py-3 bg-accent-purple hover:bg-accent-purple-dark text-white font-medium rounded-lg transition-colors">
                  Purple Accent
                </button>
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors">
                  Dark Button
                </button>
                <button className="px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-medium rounded-lg transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Card Example */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Feature Card</h4>
                  <p className="text-gray-600">Clean card design with primary color accent</p>
                </div>
                
                <div className="bg-gradient-to-br from-accent-purple/10 to-white border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent-purple rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Purple Accent</h4>
                  <p className="text-gray-600">Using accent colors for variety</p>
                </div>
                
                <div className="bg-gradient-to-br from-accent-green/10 to-white border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent-green rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Green Accent</h4>
                  <p className="text-gray-600">Success states and confirmations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Story 2.1 Complete ✅</h2>
          <div className="space-y-2 text-primary-50">
            <p>✓ Custom color palette with Primary Blues, Accent colors, and Gray scale</p>
            <p>✓ Typography scale configured (xs to 6xl)</p>
            <p>✓ Inter + JetBrains Mono fonts loaded with Next.js optimization</p>
            <p>✓ Custom spacing/layout tokens (section spacing, max-widths)</p>
          </div>
        </section>
      </div>
    </div>
  );
}

