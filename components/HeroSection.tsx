import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center">
      <Image
        src="/doctor-hero.jpg"
        alt="Clinica Doctor"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Clinical Intelligence.
          <br />
          Built for Africa.
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Protocol-driven decision support designed for hospitals,
          institutions and medical professionals.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="bg-accent hover:bg-sky-500 transition px-6 py-3 rounded-lg font-semibold"
          >
            Start Free Trial
          </a>

          <a
            href="/login"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
