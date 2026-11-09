import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Reverse Classroom", description: "Learn before class. Discuss beyond the lecture." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}