export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="p-10">
      <h1>About ({locale})</h1>
    </div>
  );
}
