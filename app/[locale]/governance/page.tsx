export default function GovernancePage({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  const isFR = params.locale === "fr";

  return (
    <section className="bg-[#F4F6F8] py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        <h1 className="text-4xl font-semibold text-[#0B3C5D]">
          {isFR ? "Gouvernance Clinique" : "Clinical Governance"}
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Clinica operates under structured clinical review cycles,
          protocol validation committees, and version-controlled releases.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1F6E8C]">
              Protocol Review
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Medical experts validate clinical logic.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1F6E8C]">
              Version Control
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Semantic versioning ensures stability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1F6E8C]">
              Continuous Audit
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Clinical safety monitoring and review.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
