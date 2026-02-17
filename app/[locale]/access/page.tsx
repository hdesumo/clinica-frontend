"use client";

import { useState } from "react";

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-semibold text-[#0B3C5D]">
          Request Submitted
        </h1>
        <p className="mt-4 text-gray-600">
          Our team will review your request.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-3xl font-semibold text-[#0B3C5D] mb-8">
          Request API Access
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Institution Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Official Email"
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Describe your intended use"
            required
            className="w-full border p-3 rounded h-32"
          />

          <button
            type="submit"
            className="bg-[#0B3C5D] text-white px-6 py-3 rounded"
          >
            Submit Request
          </button>

        </form>
      </div>
    </section>
  );
}
