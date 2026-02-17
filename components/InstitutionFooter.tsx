export default function InstitutionFooter() {
  return (
    <footer className="bg-[#0B3C5D] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-sm">
        <p>© {new Date().getFullYear()} Clinica</p>
        <p className="mt-2 opacity-80">
          African Clinical Intelligence Infrastructure
        </p>
      </div>
    </footer>
  );
}
