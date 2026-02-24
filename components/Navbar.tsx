import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/clinica-logo.png"
            alt="Clinica"
            width={180}
            height={50}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="#about" className="hover:text-teal-700 transition">
            About
          </Link>
          <Link href="#protocols" className="hover:text-teal-700 transition">
            Protocols
          </Link>
          <Link href="/api" className="hover:text-teal-700 transition">
            API
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-teal-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-800 transition"
          >
            Start Trial
          </Link>
        </div>

      </div>
    </header>
  );
}
