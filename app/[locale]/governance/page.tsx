export default async function GovernancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="p-10">
      <h1>Governance ({locale})</h1>
    </div>
  );
}
