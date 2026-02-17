"use client";

type HeroSectionProps = {
  dictionary: any;
};

export default function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section className="bg-[#0B3C5D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          {dictionary?.hero?.title || "Clinica"}
        </h1>

        <p className="text-lg md:text-xl text-gray-200">
          {dictionary?.hero?.subtitle ||
            "African Clinical Intelligence Infrastructure"}
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/en/login"
            className="bg-white text-[#0B3C5D] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Login
          </a>

          <a
            href="/en/register"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0B3C5D] transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
