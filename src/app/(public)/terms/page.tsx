import { Container } from "@/components/ui";

export const metadata = {
  title: "Terms of Service - RKPi5",
  description: "RKPi5 Terms of Service - Legal terms and conditions",
};

export default function TermsPage() {
  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 25, 2025</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using the RKPi5 website and services, you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 mb-4">
                RKPi5 provides information about offline biblical resource platforms built on Raspberry Pi 5 hardware. 
                Our website offers:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Product information and specifications</li>
                <li>DIY build configurations and cost estimates</li>
                <li>Support documentation and guides</li>
                <li>Waitlist registration for future product availability</li>
                <li>Contact and inquiry forms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <p className="text-gray-700 mb-4">You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful code, viruses, or malware</li>
                <li>Attempt unauthorized access to our systems</li>
                <li>Scrape, harvest, or collect user data without permission</li>
                <li>Use our services for spam or unsolicited communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DIY Build Information</h2>
              <p className="text-gray-700 mb-4">
                Information provided about DIY builds, configurations, and cost estimates is for informational purposes only. 
                We make no guarantees about:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Accuracy of cost estimates (prices may vary)</li>
                <li>Compatibility of components from different vendors</li>
                <li>Success of DIY builds (technical knowledge required)</li>
                <li>Performance of self-built systems</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Build scripts and documentation are provided "as-is" without warranties of any kind.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of RKPi5 or its content 
                suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                Build scripts and documentation may be used for personal, non-commercial purposes only. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Resell or commercially distribute our build scripts</li>
                <li>Claim ownership of our documentation</li>
                <li>Remove copyright notices or attributions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Waitlist</h2>
              <p className="text-gray-700 mb-4">
                Joining the waitlist does not guarantee product availability or create any contractual obligation. 
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Modify or discontinue the waitlist at any time</li>
                <li>Limit quantities or configurations</li>
                <li>Change pricing and specifications</li>
                <li>Remove users from the waitlist for any reason</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Content and Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites or resources. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Content, products, or services of third parties</li>
                <li>Accuracy or availability of external resources</li>
                <li>Privacy practices of third-party sites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <p className="text-gray-900 font-semibold mb-2">IMPORTANT DISCLAIMERS:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Our website and services are provided "AS IS" without warranties of any kind</li>
                  <li>We make no guarantees about accuracy, reliability, or availability of our services</li>
                  <li>DIY builds carry inherent risks - proceed at your own risk</li>
                  <li>We are not responsible for damage, data loss, or injury resulting from use of our information</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, RKPi5 shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Loss of profits, data, or use</li>
                <li>Hardware damage or malfunction</li>
                <li>Personal injury resulting from DIY builds</li>
                <li>Costs of obtaining substitute products or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold RKPi5 harmless from any claims, damages, losses, or expenses (including legal fees) 
                arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
                Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our services at any time, without prior notice or liability, 
                for any reason, including breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by and construed in accordance with applicable laws, without regard to conflict of law principles. 
                Any disputes shall be resolved in the appropriate courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@rkpi5.com
                </p>
                <p className="text-gray-700">
                  <strong>Contact Form:</strong> <a href="/contact" className="text-primary-600 hover:text-primary-700 underline">Submit an inquiry</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated 
                to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

