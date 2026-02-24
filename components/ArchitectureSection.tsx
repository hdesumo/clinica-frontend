export default function ArchitectureSection() {
  return (
    <section id="api" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Clinical Intelligence Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clinica is built as a secure, scalable microservices infrastructure
            designed for hospitals, ministries and health institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">
              Secure Authentication
            </h3>
            <p className="text-gray-600">
              JWT-based authentication with institutional API keys,
              role-based access control and encrypted communication.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">
              Microservices Engine
            </h3>
            <p className="text-gray-600">
              Modular FastAPI services including Core Auth,
              Reasoning Engine and Knowledge Service, deployed
              via Docker infrastructure.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">
              Institutional API
            </h3>
            <p className="text-gray-600">
              RESTful API endpoints allowing integration
              with hospital systems, mobile applications
              and national health platforms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
