import { Container } from "@/components/ui";
import { Mail, Clock, Heart, Cpu, Database, Wifi, Battery, Zap, Twitter, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About - RKPi5 | Our Mission & Story",
  description: "Learn about Scott E. Townsend and the mission behind RKPi5: empowering believers with offline Biblical resources for uncertain times. Raspberry Pi 5 technology meets faith-based innovation.",
};

/**
 * About Page
 * Mission, founder story, technology overview, and contact information
 */
export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About RKPi5
            </h1>
            <p className="text-xl text-primary-100">
              Empowering believers with offline Biblical resources for uncertain times
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-20">
        <Container size="content">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                RKPi5 exists to equip believers with comprehensive Biblical resources that work 
                anywhere, anytime—regardless of internet availability or infrastructure conditions.
              </p>
              <p>
                We believe that access to Scripture, sound theological teaching, and discipleship 
                materials shouldn&apos;t depend on the grid staying up or networks remaining accessible. 
                Whether you&apos;re preparing for the Rapture, serving in restricted-access areas, 
                or ministering in remote mission fields, RKPi5 ensures God&apos;s Word is always within reach.
              </p>
              <p>
                Our vision is a world where every believer has offline access to the resources 
                they need to grow in faith, make disciples, and remain faithful in any circumstance—
                from comfortable home study to the most challenging field conditions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Bio */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container size="content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Founder Story
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Scott E. Townsend
              </h3>
              <p className="text-lg text-primary-600 mb-6 font-semibold">
                Founder & Creator
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Scott is a technology innovator and devoted believer who saw the critical need for 
                  reliable offline Biblical resources in an increasingly uncertain world. With a background 
                  in software engineering and systems architecture, Scott recognized that believers preparing 
                  for the Rapture and the Tribulation needed more than just digital files—they needed a 
                  complete, turnkey solution that works without infrastructure dependencies.
                </p>
                <p>
                  The vision for RKPi5 emerged from Scott&apos;s personal conviction that the time is short 
                  and believers must be equipped with the tools they need to remain faithful. Having spent 
                  years studying end-times theology and watching global events unfold, Scott understood that 
                  traditional online resources would fail when networks go down or access is restricted.
                </p>
                <p>
                  &ldquo;I wanted to create something that would work in a basement bunker, an underground 
                  church, or a jungle mission station with the same reliability,&rdquo; Scott explains. 
                  &ldquo;RKPi5 isn&apos;t just a product—it&apos;s a tool for the body of Christ to remain 
                  connected to sound teaching and Scripture when everything else fails.&rdquo;
                </p>
                <p>
                  By combining his technical expertise with a heart for ministry, Scott has developed 
                  RKPi5 as a practical solution that bridges the gap between digital convenience and 
                  infrastructure independence. His goal is to equip 10,000+ believers with offline 
                  Biblical libraries before the Rapture or widespread network disruptions occur.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Overview */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Technology & Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Raspberry Pi 5 engineering meets comprehensive Biblical content delivery
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Raspberry Pi 5 Platform */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Raspberry Pi 5 Platform
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Built on the latest Raspberry Pi 5 with 8GB RAM, RKPi5 leverages enterprise-grade 
                  ARM processing power to serve multiple users simultaneously. The platform provides 
                  server-class performance in a compact, portable form factor.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Quad-core ARM Cortex-A76 processor (2.4GHz)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>8GB LPDDR4X RAM for smooth multi-user performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Dual microSD slots (2x 128GB) for content redundancy</span>
                  </li>
                </ul>
              </div>

              {/* Content Library */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple to-purple-700 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  26GB+ Content Library
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pre-loaded with comprehensive Biblical resources: multiple Bible translations, 
                  130+ hours of audio teaching, 39+ hours of video content, PDF library, and 
                  survival preparation materials—all ready to access from day one.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Multiple Bible translations and study resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Video and audio sermons from trusted teachers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Discipleship materials and theological books</span>
                  </li>
                </ul>
              </div>

              {/* Offline WiFi Portal */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-green to-green-700 flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Offline WiFi Portal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RKPi5 creates a local WiFi network with captive portal auto-popup (like hotel WiFi). 
                  Users simply connect to the network and the content portal appears automatically. 
                  No internet required, no complex configuration.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Serves 15+ users simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Auto-popup captive portal (iOS, Android, all platforms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Standard WiFi range (50-100ft in typical environments)</span>
                  </li>
                </ul>
              </div>

              {/* Battery & Solar */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-orange to-orange-700 flex items-center justify-center mb-4">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Battery & Solar Power
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Equipped with a 25,000 mAh battery pack providing 6-hour runtime for extended 
                  operation. TSA carry-on approved for travel. Field Kit includes optional solar 
                  panel for indefinite off-grid deployment.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>6-hour continuous operation on battery power</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Optional 60W solar panel for field deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>TSA-approved for air travel (Field Kit configuration)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Questions about RKPi5? We&apos;re here to help.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              {/* Email Contact */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                </div>
                <a
                  href="mailto:info@rapturekit.com"
                  className="text-primary-600 hover:text-primary-700 font-medium text-lg"
                >
                  info@rapturekit.com
                </a>
              </div>

              {/* Response Time */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Response Time</h3>
                </div>
                <p className="text-gray-600">
                  We typically respond within 24-48 hours during business days
                </p>
              </div>

              {/* Contact Form Link */}
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Prefer a form? Send us a detailed message and we&apos;ll get back to you promptly.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                >
                  Contact Form
                </Link>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://x.com/rkpi5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Follow us on X"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-primary-600" />
                  </a>
                  <a 
                    href="https://youtube.com/@rkpi5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Subscribe on YouTube"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-gray-600 hover:text-primary-600" />
                  </a>
                  <a 
                    href="https://facebook.com/rkpi5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Like us on Facebook"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-gray-600 hover:text-primary-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Be among the first to receive RKPi5 when it launches. Join our waitlist for 
              priority access and exclusive early adopter benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#waitlist"
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

