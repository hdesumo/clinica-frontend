export default function EndpointCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="font-semibold text-[#0B3C5D]">{title}</h3>
      <p className="mt-3 text-gray-600 text-sm">{description}</p>
    </div>
  );
}
