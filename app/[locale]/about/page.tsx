import { getDictionary } from "@/i18n/getDictionary";

export default async function AboutPage({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        <div>
          <h1 className="text-4xl font-semibold text-[#0B3C5D]">
            {params.locale === "fr"
              ? "À propos de Clinica"
              : "About Clinica"}
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {params.locale === "fr"
              ? "Clinica est une infrastructure d’intelligence clinique conçue pour soutenir les systèmes de santé africains grâce à des protocoles validés, une architecture modulaire et une gouvernance souveraine."
              : "Clinica is a clinical intelligence infrastructure designed to support African health systems through validated protocols, modular architecture and sovereign governance."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1F6E8C]">
            {params.locale === "fr"
              ? "Architecture Technique"
              : "Technical Architecture"}
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {params.locale === "fr"
              ? "L’infrastructure repose sur deux microservices FastAPI : un moteur de raisonnement clinique (reasoning-service) et une base de connaissances médicale (knowledge-service)."
              : "The infrastructure is built on two FastAPI microservices: a clinical reasoning engine and a structured medical knowledge service."}
          </p>
        </div>

      </div>
    </section>
  );
}
