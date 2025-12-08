type FAQ = {
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    q: "Can I upgrade later?",
    a: "Yes. All microSD cards that run the RKPi5 solution are identical. To upgrade simply purchase a 20,000 mAh battery pack and a 50W foldable solar panel.",
  },
  {
    q: "What’s included in the Hobbyist (FREE) tier?",
    a: "Downloadable install scripts and documentation to set up your own Raspberry Pi 5 (8GB+). You provide the hardware and complete a ~45-minute setup.",
  },
  {
    q: "Do I need internet access for this to work?",
    a: "Not if you already have the golden master microSD card. The Hobbyist tier requires internet access to download the install scripts and documentation. When the RKPi5 is powred, it is a fully offline WiFi portal. It creates its own local network and hosts all content locally. It does not require an internet connection.",
  },
  {
    q: "How many users can connect at once?",
    a: "Typical scenarios support 10+ simultaneous users on the captive WiFi portal. NOTE: We will have definitive estimates after beta testing.",
  },
  {
    q: "Can I add my own ministry content?",
    a: "No. The RKPi5 is a pre-configured static website. It is identical to the Rapture Kit 3.1 USB. It is ideal for offline evangelism and discipleship. It is not designed for custom content. To see an example of what the Rapture Kit 3.1 will look like, please visit: https://didmillionsdissapear.com",
  },
  {
    q: "What devices are supported?",
    a: "Any modern device with WiFi and a web browser: iOS, Android, Windows, macOS, Chromebook, etc.",
  },
  {
    q: "What is the setup time?",
    a: "Bare Bones, Solo, and Field boot into a ready-to-use captive portal in under 5 minutes. The Hobbyist tier involves a one-time DIY setup (~45 minutes).",
  },
];

export function PricingFAQs() {
  return (
    <div className="space-y-3">
      {faqs.map((item) => (
        <details
          key={item.q}
          className="group rounded-xl border border-gray-200 p-4 open:bg-gray-50 transition-colors"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="text-sm font-medium text-gray-900">{item.q}</span>
            <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-3 pl-0.5 text-sm leading-6 text-gray-700">{item.a}</div>
        </details>
      ))}
    </div>
  );
}


