import { getDictionary } from "@/i18n/getDictionary";
import StandardsSection from "@/components/StandardsSection";

export default async function Home({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  const dictionary = await getDictionary(params.locale);

  return (
    <>
      <StandardsSection />
    </>
  );
}
