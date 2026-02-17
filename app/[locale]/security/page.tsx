export default function SecurityPage({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  const isFR = params.locale === "fr";

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        <h1 className="text-4xl font-semibold text-[#0B3C5D]">
          {isFR ? "Sécurité & Protection des Données" : "Security & Data Protection"}
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold text-[#1F6E8C]">
              API Authentication
            </h2>
            <p className="mt-3">
              All endpoints require secure API key authentication.
              Keys are rotated and monitored.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1F6E8C]">
              Infrastructure Security
            </h2>
            <p className="mt-3">
              Clinica is deployed on hardened VPS infrastructure
              with HTTPS encryption and container isolation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1F6E8C]">
              Data Governance
            </h2>
            <p className="mt-3">
              No patient-identifiable data is stored by default.
              Clinica operates as a decision-support layer.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
