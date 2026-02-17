import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      );
    }

    const backendUrl =
      process.env.CORE_API_URL || "http://127.0.0.1:8002";

    console.log("CORE_API_URL:", backendUrl);

    const backendRes = await fetch(`${backendUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    });

    console.log("Backend status:", backendRes.status);

    const responseData = await backendRes.json().catch(() => null);

    if (!backendRes.ok) {
      console.error("Backend error:", responseData);
      return NextResponse.json(
        { error: responseData?.detail || "Invalid credentials" },
        { status: backendRes.status }
      );
    }

    if (!responseData?.access_token) {
      console.error("No access token returned");
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 500 }
      );
    }

    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    response.cookies.set("clinica_token", responseData.access_token, {
      httpOnly: true,
      secure: false, // true en production HTTPS
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login route fatal error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
