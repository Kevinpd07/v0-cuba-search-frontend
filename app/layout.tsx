import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Cuba.Entera | El buscador cubano",
  description:
    "El único buscador que no necesitas salir de la isla porque la isla está adentro. Busca en todos los sitios .cu",
  generator: "v0.app",
  keywords: ["cuba", "buscador", "search", "cubano", ".cu", "internet cubano"],
  icons: {
    icon: [
      { url: "/favIcon.svg", type: "image/svg+xml" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/cubaentera1.jpeg",
        type: "image/jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#bf4d3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
