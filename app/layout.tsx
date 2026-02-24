import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinica – African Clinical Intelligence",
  description:
    "Protocol-driven clinical decision support platform built for African healthcare systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
