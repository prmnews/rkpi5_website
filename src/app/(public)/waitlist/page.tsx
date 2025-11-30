"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui";
import { WaitlistModal } from "@/components/homepage";

export default function WaitlistPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Auto-open modal on page load
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // Navigate back when modal closes
  const handleClose = () => {
    setIsModalOpen(false);
    // Go back to previous page or home if no history
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Container className="py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Fallback content if JavaScript is disabled */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Join the RKPi5 Waitlist
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Be among the first to build your own RKPi5 when it launches. 
              Get priority access and exclusive early adopter benefits.
            </p>
            <p className="text-gray-500">
              Opening waitlist form...
            </p>
          </div>
        </div>
      </Container>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}

