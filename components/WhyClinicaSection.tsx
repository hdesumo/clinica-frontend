import Image from "next/image";

export default function WhyClinica() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Clinica?
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Clinica provides structured medical reasoning based on validated
            protocols adapted to African clinical realities.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Protocol-based decision support</li>
            <li>✔ Institutional API access</li>
            <li>✔ Secure JWT authentication</li>
            <li>✔ Built for scalability & sovereignty</li>
          </ul>
        </div>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/doctor-team.jpg"
            alt="Medical Team"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
