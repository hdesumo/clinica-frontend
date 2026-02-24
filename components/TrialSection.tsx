import Link from "next/link";

export default function TrialSection() {
  return (
    <section className="py-20 bg-gray-50 border-t">
      <div className="container-clinica text-center">

        <h2 className="text-3xl font-semibold text-[#0B3C5D]">
          15-Day Institutional Trial
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Deploy Clinica within your hospital, clinic or national health
          program and evaluate its impact before subscription.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/en/access"
            className="bg-[#0B3C5D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#092c43] transition"
          >
            Request Access
          </Link>

          <Link
            href="/en/login"
            className="border border-[#0B3C5D] px-8 py-3 rounded-lg font-semibold text-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white transition"
          >
            Sign In
          </Link>
        </div>

      </div>
    </section>
  );
}
