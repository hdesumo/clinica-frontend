export default function SecuritySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security & Digital Sovereignty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clinica is designed to meet the highest standards of medical
            data protection and institutional sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">
              Encrypted Infrastructure
            </h3>
            <p className="text-gray-600">
              All communications are secured using HTTPS and encrypted
              token-based authentication across services.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">
              Data Sovereignty
            </h3>
            <p className="text-gray-600">
              Institutions retain full control over deployment,
              hosting and data governance within national frameworks.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-700">
              Scalable Deployment
            </h3>
            <p className="text-gray-600">
              Docker-based architecture enables deployment
              on institutional servers, private VPS or
              secure cloud environments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
