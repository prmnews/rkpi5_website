import { Container } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { MapPin, Clock, Twitter, Youtube, Facebook } from "lucide-react";

export const metadata = {
  title: "Contact - RKPi5 | Get in Touch",
  description: "Contact the RKPi5 team for inquiries about orders, support, partnerships, or general questions. We typically respond within 24-48 hours.",
};

// Force dynamic rendering since ContactForm uses Convex hooks
export const dynamic = 'force-dynamic';

/**
 * Contact Page
 * Contact form for inquiries, support, sales, and partnerships
 */
export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-100">
              Have questions? We&apos;re here to help. Send us a message and we&apos;ll respond promptly.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information Sidebar */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Response Time */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We typically respond within 24-48 hours during business days
                    </p>
                  </div>

                  {/* Office Hours Note */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">Note:</strong> We&apos;re a small team 
                      committed to providing quality support. Thank you for your patience.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                    <div className="flex gap-4">
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

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-gray-600 mb-8">
              Prefer a different communication method? We&apos;re happy to connect in the way that works best for you.
            </p>
            
            <div className="max-w-md mx-auto">
              {/* About Page */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Learn More About Us</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Read about our mission and founder story
                </p>
                <a
                  href="/about"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Visit About Page →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

