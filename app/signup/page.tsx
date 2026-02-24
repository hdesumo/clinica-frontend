"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SignupPage() {
  const router = useRouter();

  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TEMPORAIRE — future connexion API ici
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

          <h1 className="text-2xl font-bold mb-6 text-center">
            Start 15-Day Free Trial
          </h1>

          <form onSubmit={handleSignup} className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Institution Name
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-700 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-700 text-white py-2 rounded-lg font-semibold hover:bg-teal-800 transition"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}
