import type { Metadata } from "next";
//Para que sea un poco más rápido pero es casi imperceptible

export const metadata: Metadata = {
  title: "About Page",
  description: "SEO Description",
  keywords: ["About Page", "Fernando", "información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
