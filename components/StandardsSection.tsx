export default function StandardsSection() {
  return (
    <section className="py-20 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-semibold text-[#0B3C5D]">
          Standards & Compliance
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Clinica is aligned with international public health standards,
          structured clinical safety frameworks and data protection principles.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-[#1F6E8C]">
              Clinical Governance
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Protocol review committees and validation cycles.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-[#1F6E8C]">
              Data Protection
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              GDPR-inspired privacy framework adapted to Africa.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-[#1F6E8C]">
              Safety Monitoring
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Continuous auditing of clinical decision logic.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
