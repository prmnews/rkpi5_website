import { Container } from "@/components/ui";
import { EnterpriseContact, FeatureMatrix, PricingCard, PricingFAQs } from "@/components/pricing";
import { SHOW_WAITLIST } from "@/lib/constants";

export default function PricingPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Heading */}
      <Container as="section" className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Build Configurations & Estimates
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Choose the configuration that fits your mission. All build scripts are FREE to download.
        </p>
        {!SHOW_WAITLIST && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-gray-700">
              ℹ️ These are estimated DIY component costs. RKPi5 units are not currently for sale.
            </p>
          </div>
        )}
      </Container>

      {/* Pricing Cards */}
      <Container as="section" className="mt-10">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <PricingCard
            title="Hobbyist"
            price="FREE"
            description="DIY setup for technical users"
            features={[
              "Install scripts + documentation",
              "Requires Raspberry Pi 5 (8GB+)",
              "Self-guided ~45-minute setup",
              "Rapture Kit 3.1 USB included",
              "Create your own golden master",
              "Personal use only (no resale)",
            ]}
            ctaLabel="Join Waitlist for Hobbyist Downloads"
            ctaHref="/waitlist"
          />

          <PricingCard
            title="Bare Bones"
            price={99}
            description="Pre-configured microSD kit"
            features={[
              "1× 128GB microSD (for storage)",
              "1× 128GB microSD (redundant backup)",
              "microSD golden master included",
              "Rapture Kit 3.1 USB included",
              "Use with your Pi 5 (8GB+)",
              "Insert card, boot in < 5 minutes",
              "Quick start guide (PDF)",
              "Personal use only (no resale)",
              "Email support",
              "Shipping and Handling Included",
            ]}
            ctaLabel="Join Waitlist"
            ctaHref="/waitlist"
          />

          <PricingCard
            title="Solo"
            price={299}
            description="Complete portable starter kit"
            badge="Most Popular"
            highlighted
            features={[
              "Raspberry Pi 5 (8GB) included",
              "1× 128GB microSD (for storage)",
              "1× 128GB microSD (redundant backup)",
              "microSD golden master included",
              "Rapture Kit 3.1 USB included",
              "20,000 mAh battery pack",
              "Captive WiFi portal (< 5 min setup)",
              "Quick start guide",
              "Personal use only (no resale)",
              "Email support",
              "Shipping and Handling Included",
            ]}
            ctaLabel="Join Waitlist"
            ctaHref="/waitlist"
          />

          <PricingCard
            title="Field"
            price={399}
            description="Self-contained unit for the field"
            features={[
              "Raspberry Pi 5 (8GB) included",
              "1× 128GB microSD (for storage)",
              "1× 128GB microSD (redundant backup)",
              "microSD golden master included",
              "Rapture Kit 3.1 USB included",
              "Integrated 5\" display + speakers",
              "20,000 mAh battery pack",
              "50W foldable solar panel",
              "Captive WiFi portal (< 5 min setup)",
              "Personal use only (no resale)",
              "Email support",
              "Shipping and Handling Included",
            ]}
            ctaLabel="Join Waitlist"
            ctaHref="/waitlist"
          />
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Compare features across tiers below.
        </p>
      </Container>

      {/* Feature Matrix */}
      <Container as="section" size="wide" className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">Feature Comparison</h2>
        <p className="mt-1 text-sm text-gray-600">
          A quick glance at what’s included with each tier.
        </p>
        <div className="mt-4">
          <FeatureMatrix />
        </div>
      </Container>

      {/* FAQs */}
      <Container as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">FAQs</h2>
        <p className="mt-1 text-sm text-gray-600">
          Got questions? Here are some of the most common ones.
        </p>
        <div className="mt-4">
          <PricingFAQs />
        </div>
      </Container>

      {/* Enterprise / Church */}
      <div className="mt-12">
        <EnterpriseContact />
      </div>
    </div>
  );
}


