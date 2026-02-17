import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function InstitutionHeader({
  dictionary,
  locale,
}: {
  dictionary: any;
  locale: string;
}) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-semibold text-[#0B3C5D]">
          Clinica
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href={`/${locale}/about`}>{dictionary.nav.about}</Link>
          <Link href={`/${locale}/protocols`}>{dictionary.nav.protocols}</Link>
          <Link href={`/${locale}/developers`}>{dictionary.nav.developers}</Link>
          <Link href={`/${locale}/contact`}>{dictionary.nav.contact}</Link>
        </nav>

        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
