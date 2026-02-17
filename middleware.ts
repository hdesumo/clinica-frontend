import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED_PATHS = [
  "/dashboard",
  "/institution",
  "/api-keys",
  "/reports",
];

const PUBLIC_PATHS = [
  "/login",
];

async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    await jwtVerify(token, secret);

    return true;
  } catch (err) {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locale = pathname.startsWith("/fr") ? "fr" : "en";

  const token = request.cookies.get("clinica_token")?.value;

  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "");

  const isProtected = PROTECTED_PATHS.some((path) =>
    pathWithoutLocale.startsWith(path)
  );

  const isPublic = PUBLIC_PATHS.some((path) =>
    pathWithoutLocale.startsWith(path)
  );

  // 🔒 Protection des routes sensibles
  if (isProtected) {
    if (!token) {
      return NextResponse.redirect(
        new URL(`/${locale}/login`, request.url)
      );
    }

    const isValid = await verifyToken(token);

    if (!isValid) {
      const response = NextResponse.redirect(
        new URL(`/${locale}/login`, request.url)
      );
      response.cookies.delete("clinica_token");
      return response;
    }
  }

  // 🔁 Empêcher accès login si déjà connecté
  if (isPublic && token) {
    const isValid = await verifyToken(token);

    if (isValid) {
      return NextResponse.redirect(
        new URL(`/${locale}/dashboard`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(en|fr)/:path*"],
};
