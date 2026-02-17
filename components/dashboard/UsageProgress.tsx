export default function UsageProgress({
  usage,
  limit,
}: {
  usage: number;
  limit: number;
}) {
  const percentage = Math.min((usage / limit) * 100, 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-sm text-gray-500">
        Quota Usage
      </h3>

      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full ${
              percentage > 80 ? "bg-red-500" : "bg-[#1F6E8C]"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-600">
          {usage.toLocaleString()} / {limit.toLocaleString()} requests
        </p>
      </div>
    </div>
  );
}
