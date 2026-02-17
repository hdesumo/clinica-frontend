async function fetchProtocols() {
  try {
    const res = await fetch(
      "https://clinica.it.com/reason/protocols",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function ProtocolsPage() {
  const protocols = await fetchProtocols();

  return (
    <section className="bg-[#F4F6F8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-[#0B3C5D] mb-12">
          Clinical Protocols
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {protocols.length === 0 && (
            <p className="text-gray-600">No protocols available.</p>
          )}

          {protocols.map((protocol: any) => (
            <div
              key={protocol.id}
              className="bg-white p-6 rounded-lg shadow-sm border"
            >
              <h2 className="text-xl font-semibold text-[#1F6E8C]">
                {protocol.name}
              </h2>
              <p className="mt-3 text-gray-600">
                {protocol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
