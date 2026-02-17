export default function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-6 bg-[#0B3C5D] text-white p-6 rounded-lg overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  );
}
