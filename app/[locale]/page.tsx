import { getDictionary } from "@/i18n/getDictionary";
import HeroSection from "@/components/HeroSection";
import StandardsSection from "@/components/StandardsSection";

export default async function Home({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  const dictionary = await getDictionary(params.locale);

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <StandardsSection />
    </>
  );
}
