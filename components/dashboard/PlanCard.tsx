export default function PlanCard({ plan }: { plan: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-sm text-gray-500">Current Plan</h3>
      <p className="mt-4 text-2xl font-semibold text-[#1F6E8C]">
        {plan}
      </p>
    </div>
  );
}
