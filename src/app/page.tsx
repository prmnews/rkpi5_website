import { Container } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-section-lg">
      <Container className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Biblical Resources When Networks Fail
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          26GB+ Rapture Kit content delivered via offline WiFi portal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/waitlist"
            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Join Waitlist
          </a>
          <a
            href="/product"
            className="px-8 py-4 border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold rounded-lg transition-all"
          >
            Learn More
          </a>
        </div>
      </Container>
    </div>
  );
}
