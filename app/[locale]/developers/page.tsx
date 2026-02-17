import SectionTitle from "@/components/dev/SectionTitle";
import EndpointCard from "@/components/dev/EndpointCard";
import CodeBlock from "@/components/dev/CodeBlock";

export default function DevelopersPage({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  const isFR = params.locale === "fr";

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* INTRO */}
        <div>
          <h1 className="text-4xl font-semibold text-[#0B3C5D]">
            {isFR ? "Documentation API Clinica" : "Clinica API Documentation"}
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            {isFR
              ? "Clinica expose des endpoints REST sécurisés permettant l’intégration de protocoles cliniques et de bases de connaissances médicales dans des systèmes hospitaliers nationaux."
              : "Clinica exposes secure REST endpoints enabling integration of clinical protocols and medical knowledge services into national hospital systems."}
          </p>
        </div>

        {/* ARCHITECTURE */}
        <div>
          <SectionTitle title="Architecture" />

          <p className="text-gray-600 mt-4 max-w-3xl">
            Clinica is structured around two FastAPI microservices:
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• reasoning-service (clinical decision engine)</li>
            <li>• knowledge-service (structured medical knowledge)</li>
          </ul>
        </div>

        {/* AUTH */}
        <div>
          <SectionTitle title="Authentication" />

          <p className="mt-4 text-gray-600 max-w-3xl">
            All endpoints require an API Key sent via header.
          </p>

          <CodeBlock
            code={`curl -X POST https://clinica.it.com/reason \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{"protocol":"hiv_screening","has_symptoms":true}'`}
          />
        </div>

        {/* ENDPOINTS */}
        <div>
          <SectionTitle title="Endpoints" />

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <EndpointCard
              title="POST /reason"
              description="Run clinical reasoning protocol."
            />

            <EndpointCard
              title="GET /knowledge"
              description="Retrieve structured medical knowledge."
            />

          </div>
        </div>

        {/* VERSIONING */}
        <div>
          <SectionTitle title="Versioning" />

          <p className="mt-4 text-gray-600 max-w-3xl">
            Clinica follows semantic versioning (v1, v2...) to ensure backward compatibility.
          </p>
        </div>

        {/* SAFETY */}
        <div className="bg-[#F4F6F8] p-10 rounded-lg">
          <SectionTitle title="Clinical Safety Notice" />

          <p className="mt-4 text-gray-600 max-w-3xl">
            Clinica is a clinical decision support system and does not replace physician judgment.
          </p>
        </div>

      </div>
    </section>
  );
}
