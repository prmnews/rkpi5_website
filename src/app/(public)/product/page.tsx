import { Container } from "@/components/ui";
import { 
  Wifi, 
  Battery, 
  Zap
} from "lucide-react";

export const metadata = {
  title: "Product - RKPi5 | Biblical Resources Offline",
  description: "Explore the RKPi5: 26GB+ biblical content, WiFi portal, 6-hour battery, serves 10+ users. Perfect for believers preparing for uncertain times.",
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
              Serves 10+ users simultaneously. Setup in less than 5 minutes.
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "26GB+", label: "Content Library" },
                { value: "10+", label: "Concurrent Users" },
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

              {/* Network Specs */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-primary-600" />
                  Network Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="font-semibold">Concurrent Users:</span> 10+ simultaneous
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

      {/* Detailed Content Breakdown */}
      <section className="py-section-lg bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Complete Content Breakdown
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              26GB+ of carefully curated biblical resources organized into 9 sections
            </p>

            <div className="space-y-8">
              {/* Section 01 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">01</span>
                  Information for the Rapture Kit Sender
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  An 11-page PDF document explaining what the Rapture Kit is, how to use it before the Rapture, 
                  important links to legal resources for including legal documents, and five (5) sample letters to 
                  introduce the Rapture Kit resource to recipients.
                </p>
              </div>

              {/* Section 02 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">02</span>
                  First Things First
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The recommended starting point for discovering what just happened and why. Two critical video presentations:
                </p>
                <ul className="space-y-3 text-gray-700 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Did Many People Just Disappear</strong> (15 min, Lamb & Lion Ministries) - Docudrama revealing what happened and the desire for you to come to salvation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>What Just Happened to all the Missing People</strong> (39 min) - Tyler and Tom give a heartfelt message revealing the TRUTH</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>After the Rapture - Left Behind?</strong> (1hr 6min) - Prophecy Update's thorough explanation of what you witnessed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>What Just Happened</strong> (56 min) - Broader explanation including theology of the Rapture and next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Post Rapture Emergency Message</strong> (4 audio files, ~1.5 hrs total) - Urgent plea for those left behind, with translations in 12 languages</span>
                  </li>
                </ul>
              </div>

              {/* Section 03 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">03</span>
                  Bibles
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Multiple Bible translations in PDF format, all public domain for unrestricted offline use. 
                  Designed for discrete study without requiring internet connectivity.
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>King James Bible (KJV)</strong> - PDF format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>American Standard Bible (ASV)</strong> - PDF format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>World English Bible (WEB)</strong> - PDF format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>HTML-based ASV</strong> - Offline browser version with complete local storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Open Bible Web App</strong> (1GB) - Includes Berean Study Bible, 6 translations, parallel commentaries, Strong's Lexicon, cross references, and Hebrew text analysis</span>
                  </li>
                </ul>
              </div>

              {/* Section 04 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">04</span>
                  Books
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  19 eBooks totaling over 1,800 pages covering Bible prophecy, discipleship, and survival preparation.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-gray-700 ml-4">
                  <div>
                    <strong>Biblical Content:</strong>
                    <ul className="space-y-1 mt-2 text-sm">
                      <li>• Bible prophecy resources</li>
                      <li>• Discipleship and growth materials</li>
                      <li>• Teaching and preaching guides</li>
                      <li>• Bible prophecy timeline (English & Spanish)</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Survival Resources:</strong>
                    <ul className="space-y-1 mt-2 text-sm">
                      <li>• Bug-out bag guide</li>
                      <li>• Edible plants identification</li>
                      <li>• First aid manual</li>
                      <li>• Camouflage & concealment</li>
                      <li>• Bushcraft and hunting techniques</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 05 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">05</span>
                  Discipleship Study Materials
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Over 4 hours of video instruction plus study guides and PowerPoint presentations:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Nehemiah</strong> (10 min video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Reasons to Believe</strong> (3-part series, 1hr 18min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>The Gift of Salvation - How to be Saved</strong> (24 min video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>The Story of Jesus Bible Study</strong> (3 eBooks, 496 pages + 10 PowerPoint slide decks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>The Wonders of Bible Prophecy</strong> (7-part series, 1hr 54min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>What it Means to be a Watchman</strong> (18 min video)</span>
                  </li>
                </ul>
              </div>

              {/* Section 06 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">06</span>
                  What Tribulation Saints Need to Know
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  14-part video series (5+ hours) by I Am A Watchman founder Scott E. Townsend, balancing "speaking the 
                  Truth in love" with "brutal honesty" about what Tribulation Saints will face.
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-300">
                  <p className="text-sm text-gray-700 mb-2"><strong>Topics covered:</strong></p>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <ul className="space-y-1">
                      <li>• Fear and faith</li>
                      <li>• The grace of God</li>
                      <li>• Reliability of Bible prophecy</li>
                      <li>• What will happen</li>
                      <li>• Your ministry calling</li>
                      <li>• Evangelism strategies</li>
                      <li>• Your seal</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• The Mark of the Beast</li>
                      <li>• What you must discern</li>
                      <li>• Your destiny</li>
                      <li>• Finishing well</li>
                      <li>• Personal message from Scott</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 07 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">07</span>
                  Sermons and Teachings
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Curated sermon series from trusted teachers to equip Tribulation Saints with sound doctrine. 
                  Combined total: <strong>130 hours audio + 39 hours video</strong>.
                </p>
                <ul className="space-y-2 text-gray-700 ml-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Charlie Campbell:</strong> The End Times - Ten Upcoming Events (1 sermon, 58 min video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Nathan Jones & Vic Bautista:</strong> Book of Daniel chapters 8-12 (16 teachings, 10hrs 34min audio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Brandon Holthaus:</strong> Book of Revelation (45 sermons, 32hrs 31min audio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Dr. Andy Woods:</strong> Book of Revelation (75 sermons, 84hrs 19min audio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Gary Ray:</strong> Various subjects (9 teachings, 2hrs 46min audio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Jack Hibbs feat. Amir Tsarfati:</strong> Things You Should Know (56 min video)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Tom Hughes:</strong> Book of Revelation (40 sermons, 29hrs 27min video)</span>
                  </li>
                </ul>
              </div>

              {/* Section 08 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">08</span>
                  Additional Articles
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Collection of 64 I Am A Watchman articles published since 2018 covering topics to encourage, equip, 
                  and train Christ Followers to finish well. Focus on the believer's role to "watch and warn" - helping 
                  establish a second chance rescue effort to bring as many as possible to faith in Jesus Christ, avoid 
                  the Mark of the Beast, and finish strong before the Second Coming.
                </p>
              </div>

              {/* Section 09 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold">09</span>
                  Partner Content
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Curated partner content as of August 2025, organized for easy navigation:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Britt Gillette:</strong> All 4 of his book series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>CO Wyler:</strong> The complete 4-book "Untaken" series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>FluidicIce:</strong> 4 PDF resources including 293-page "The Rapture Survival Guide"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span><strong>Raspberry Pi Server Solutions:</strong> RKPi5 captive portal server hotspot by Scott Townsend</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">9</div>
                <div className="text-sm text-gray-600">Content Sections</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">130+</div>
                <div className="text-sm text-gray-600">Hours of Audio</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">39+</div>
                <div className="text-sm text-gray-600">Hours of Video</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">1,800+</div>
                <div className="text-sm text-gray-600">Pages of Books</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-section-lg">
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
                  { feature: "Multi-User (10+)", rkpi5: "✅", usb: "❌", diy: "⚠️" },
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

