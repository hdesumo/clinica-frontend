export default async function DevelopersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="p-10">
      <h1>Developers ({locale})</h1>
    </div>
  );
}
