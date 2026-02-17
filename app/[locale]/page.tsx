import { getDictionary } from "../../i18n/getDictionary";
import HeroSection from "../../components/HeroSection";
import StandardsSection from "../../components/StandardsSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <StandardsSection />
    </>
  );
}
