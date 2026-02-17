"use client";

type LanguageSwitcherProps = {
  currentLocale: string;
};

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const otherLocale = currentLocale === "en" ? "fr" : "en";

  return (
    <div className="ml-4">
      <a
        href={`/${otherLocale}`}
        className="text-sm text-[#0B3C5D] font-medium hover:underline"
      >
        {otherLocale.toUpperCase()}
      </a>
    </div>
  );
}
