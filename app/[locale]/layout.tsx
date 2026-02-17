import { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: "en" | "fr" };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
