export default function UsageCard({ usage }: { usage: number }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-sm text-gray-500">Monthly Requests</h3>
      <p className="mt-4 text-2xl font-semibold text-[#0B3C5D]">
        {usage.toLocaleString()}
      </p>
    </div>
  );
}
