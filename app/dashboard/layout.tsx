import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = await cookies(); // ⚠️ await obligatoire
  const token = cookieStore.get("clinica_token");

  if (!token) {
    redirect("/login");
  }

  const response = await fetch(
    "https://api.clinica.it.com/auth/me",
    {
      headers: {
        Cookie: `clinica_token=${token.value}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    redirect("/login");
  }

  return <>{children}</>;
}