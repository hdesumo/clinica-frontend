"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-6 right-6 bg-[#0B3C5D] text-white px-4 py-2 rounded"
      >
        {dark ? "Light" : "Dark"}
      </button>
      {children}
    </>
  );
}
