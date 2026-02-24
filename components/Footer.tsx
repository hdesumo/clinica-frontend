import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        <div>
          <h3 className="text-white font-semibold mb-4">Clinica</h3>
          <p className="text-sm text-gray-400">
            Clinical Intelligence Infrastructure designed for African
            healthcare systems and institutional deployment.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#protocols" className="hover:text-white">Protocols</Link></li>
            <li><Link href="#api" className="hover:text-white">API</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Security</h4>
          <ul className="space-y-2 text-sm">
            <li><span>Data Sovereignty</span></li>
            <li><span>Encrypted Access</span></li>
            <li><span>Institutional Deployment</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><span>Terms of Service</span></li>
            <li><span>Privacy Policy</span></li>
            <li><span>Compliance</span></li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Clinica. All rights reserved.
      </div>
    </footer>
  );
}
