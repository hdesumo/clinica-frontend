export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="p-10">
      <h1>Security ({locale})</h1>
    </div>
  );
}
