"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => switchLanguage("en")}>EN</button>
      <button onClick={() => switchLanguage("fr")}>FR</button>
    </div>
  );
}
