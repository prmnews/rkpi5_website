import { Container } from "@/components/ui";
import { 
  Database, 
  Wifi, 
  Battery, 
  Clock,
  Users,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export const metadata = {
  title: "Product - RKPi5 | Biblical Resources Offline",
  description: "Explore the RKPi5: 26GB+ biblical content, WiFi portal, 6-hour battery, serves 15+ users. Perfect for believers preparing for uncertain times.",
};

export default function ProductPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              RKPi5 + Rapture Kit Content Platform
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-10">
              Offline WiFi portal preloaded with 26GB+ of biblical resources. 
              Serves 15+ users simultaneously. Setup in less than 5 minutes.
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "26GB+", label: "Content Library" },
                { value: "15+", label: "Concurrent Users" },
                { value: "6hrs", label: "Battery Life" },
                { value: "<5min", label: "Setup Time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Specifications */}
      <section className="py-section-lg bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Enterprise-grade hardware meets biblical content delivery
            </p>

            <div className="space-y-6">
              {/* Hardware Specs */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-600" />
                  Hardware Specifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="font-semibold">Processor:</span> Raspberry Pi 5 (8GB RAM)
                  </div>
                  <div>
                    <span className="font-semibold">Storage:</span> 2x 128GB microSD (SanDisk Extreme)
                  </div>
                  <div>
                    <span className="font-semibold">Battery:</span> 25,000 mAh (6-hour runtime)
                  </div>
                  <div>
                    <span className="font-semibold">Display:</span> Optional 5&quot; touchscreen (Field Kit)
                  </div>
                </div>
              </div>

              {/* Content Specs */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary-600" />
                  Content Library
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="font-semibold">Audio:</span> 130+ hours of sermons/teaching
                  </div>
                  <div>
                    <span className="font-semibold">Video:</span> 39+ hours of video content
                  </div>
                  <div>
                    <span className="font-semibold">Bibles:</span> Multiple translations
                  </div>
                  <div>
                    <span className="font-semibold">Books:</span> PDF library + survival guides
                  </div>
                </div>
              </div>

              {/* Network Specs */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-primary-600" />
                  Network Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="font-semibold">Concurrent Users:</span> 15+ simultaneous
                  </div>
                  <div>
                    <span className="font-semibold">Range:</span> Standard WiFi (50-100ft)
                  </div>
                  <div>
                    <span className="font-semibold">Portal:</span> Auto-popup captive portal
                  </div>
                  <div>
                    <span className="font-semibold">Platforms:</span> iOS, Android, Windows, macOS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-section-lg">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why RKPi5?
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Purpose-built for believers preparing for uncertain times
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Complete Content Library",
                description: "26GB+ of pre-loaded biblical resources. No downloading, no internet required. Everything you need from day one.",
                color: "from-primary-500 to-primary-700",
              },
              {
                icon: Users,
                title: "Multi-User Access",
                description: "Serve 15+ users simultaneously. Perfect for home groups, underground churches, or families preparing together.",
                color: "from-accent-purple to-purple-700",
              },
              {
                icon: Battery,
                title: "Portable & Powered",
                description: "6-hour battery runtime. TSA carry-on approved. Optional solar panel for extended field deployment.",
                color: "from-accent-green to-green-700",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "No internet connection means no tracking. Ideal for sensitive environments or areas under surveillance.",
                color: "from-accent-orange to-orange-700",
              },
              {
                icon: Clock,
                title: "Instant Setup",
                description: "Insert microSD, attach power, connect devices. No IT expertise required. Works in less than 5 minutes.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: Globe,
                title: "Universal Compatibility",
                description: "Works with iOS, Android, Windows, macOS. Captive portal auto-popup like hotel WiFi for seamless access.",
                color: "from-indigo-500 to-indigo-700",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-section-lg bg-gray-50">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            RKPi5 vs. Alternatives
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            See how we compare to traditional USB drives and DIY solutions
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-bold text-primary-600 bg-primary-50">RKPi5</th>
                  <th className="text-center p-4 font-bold text-gray-900">USB Drive</th>
                  <th className="text-center p-4 font-bold text-gray-900">DIY Pi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: "Content Included", rkpi5: "✅", usb: "✅", diy: "❌" },
                  { feature: "Multi-User (15+)", rkpi5: "✅", usb: "❌", diy: "⚠️" },
                  { feature: "Setup < 5 min", rkpi5: "✅", usb: "✅", diy: "❌" },
                  { feature: "Captive Portal UX", rkpi5: "✅", usb: "❌", diy: "❌" },
                  { feature: "Video Streaming", rkpi5: "✅", usb: "⚠️", diy: "⚠️" },
                  { feature: "All Platforms", rkpi5: "✅", usb: "✅", diy: "⚠️" },
                  { feature: "Battery Powered", rkpi5: "✅", usb: "❌", diy: "⚠️" },
                  { feature: "No IT Skills", rkpi5: "✅", usb: "✅", diy: "❌" },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center bg-primary-50/50 text-2xl">{row.rkpi5}</td>
                    <td className="p-4 text-center text-2xl">{row.usb}</td>
                    <td className="p-4 text-center text-2xl">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-8">
            <strong>Key Differentiator:</strong> RKPi5 transforms static USB content into a multi-user WiFi portal 
            with hotel-grade UX, ideal for group study and post-Rapture scenarios.
          </p>
        </Container>
      </section>

      {/* Video Demo Placeholder */}
      <section className="py-section-lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              See It In Action
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Watch how easy it is to set up and use RKPi5
            </p>

            {/* Video Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-600 transition-colors cursor-pointer">
                    <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold mb-2">Product Demo Video</p>
                  <p className="text-gray-400">Coming Soon - Beta Program</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Prepare?
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Join the waitlist and be among the first to receive your RKPi5
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/waitlist"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Join Waitlist
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Estimates
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

