"use client";

import { useState } from "react";

const Page = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove the + sign and other non-numeric characters from the number
    const sanitizedNumber = whatsappNumber.replace(/\D/g, "");

    if (sanitizedNumber.length < 10) {
      setError("Please enter a valid WhatsApp number with country code.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whatsappNumber: sanitizedNumber }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle success (e.g., show a success message or redirect)
        alert("Number submitted successfully!");
      } else {
        // Handle failure
        setError(result.error || "Failed to submit number");
      }
    } catch (error) {
      setError("An error occurred while submitting the number.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          WhatsApp Number
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="whatsappNumber"
              className="block text-sm font-medium text-gray-700"
            >
              WhatsApp Number with Country Code
            </label>
            <input
              type="text"
              id="whatsappNumber"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., +1234567890"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
