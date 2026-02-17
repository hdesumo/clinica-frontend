import { getDictionary } from "@/i18n/getDictionary";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "fr" }>;
}) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {children}
    </div>
  );
}
