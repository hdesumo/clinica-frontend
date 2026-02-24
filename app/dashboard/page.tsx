export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Institution Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">
            Active API Keys
          </h3>
          <p className="text-gray-600 text-sm">
            Manage and rotate institutional API credentials.
          </p>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">
            Clinical Requests
          </h3>
          <p className="text-gray-600 text-sm">
            Monitor reasoning engine usage and analytics.
          </p>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-2">
            Deployment Status
          </h3>
          <p className="text-gray-600 text-sm">
            Infrastructure and service health overview.
          </p>
        </div>

      </div>
    </div>
  );
}
