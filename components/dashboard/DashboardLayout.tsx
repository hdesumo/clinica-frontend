"use client";

import { useRouter } from "next/navigation";

export default function DashboardLayout({
  institution,
  children,
}: {
  institution: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    // Supprimer cookie
    document.cookie =
      "clinica_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    router.push("/en/login");
  };

  return (
    <section className="min-h-screen bg-[#F4F6F8] py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-[#0B3C5D]">
              Institution Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              {institution}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        {children}

      </div>
    </section>
  );
}
