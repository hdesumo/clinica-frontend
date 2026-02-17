"use client";

import { useEffect, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_CORE_API_URL || "http://localhost:8002";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("clinica_token");

        if (!token) {
          window.location.href = "/en/login";
          return;
        }

        const res = await fetch(`${API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          localStorage.removeItem("clinica_token");
          window.location.href = "/en/login";
          return;
        }

        const json = await res.json();
        setData(json);

        // Calcul jours restants
        if (json?.institution?.trial_expires_at) {
          const expires = new Date(json.institution.trial_expires_at);
          const now = new Date();
          const diff = Math.ceil(
            (expires.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
          );

          setDaysLeft(diff > 0 ? diff : 0);
        }

      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!data) {
    return <div className="p-10 text-red-500">Unable to load dashboard.</div>;
  }

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-semibold text-[#0B3C5D]">
        {data.institution.name}
      </h1>

      <p className="text-gray-600">
        Plan: {data.institution.plan}
      </p>

      {data.institution.plan === "trial" && (
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded">
          <p className="font-medium text-yellow-700">
            Free Trial – {daysLeft} day(s) remaining
          </p>

          {daysLeft === 0 && (
            <button
              className="mt-3 bg-[#0B3C5D] text-white px-4 py-2 rounded"
              onClick={() => window.location.href = "/en/upgrade"}
            >
              Upgrade Plan
            </button>
          )}
        </div>
      )}
    </div>
  );
}
