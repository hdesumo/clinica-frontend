export default function FreeTrial() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          15 Days Free Trial
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Explore Clinica with full institutional access.
          No commitment. No credit card required.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="bg-accent hover:bg-sky-500 transition px-6 py-3 rounded-lg font-semibold"
          >
            Create Account
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
