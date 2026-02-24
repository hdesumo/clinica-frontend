import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ApiPage() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Clinica API
          </h1>

          <p className="text-lg text-gray-600 mb-12">
            Secure RESTful endpoints designed for institutional integration
            with hospital systems, mobile applications and national
            health infrastructures.
          </p>

          <div className="space-y-8">

            <div className="p-6 border rounded-xl">
              <h2 className="text-xl font-semibold mb-3 text-teal-700">
                Authentication
              </h2>
              <p className="text-gray-600 mb-4">
                JWT-based authentication with institutional API keys.
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                POST /auth/login  
                GET /auth/me
              </div>
            </div>

            <div className="p-6 border rounded-xl">
              <h2 className="text-xl font-semibold mb-3 text-teal-700">
                Clinical Reasoning
              </h2>
              <p className="text-gray-600 mb-4">
                Protocol-based decision support endpoints.
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                POST /reason  
                GET /protocols
              </div>
            </div>

            <div className="p-6 border rounded-xl">
              <h2 className="text-xl font-semibold mb-3 text-teal-700">
                Knowledge Service
              </h2>
              <p className="text-gray-600 mb-4">
                Medical knowledge retrieval and structured guidance.
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                GET /knowledge/search  
                GET /knowledge/topics
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
