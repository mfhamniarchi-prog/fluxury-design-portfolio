// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// تم تعديل Metadata هنا بالمعلومات الخاصة بالـ Portfolio
export const metadata: Metadata = {
  title: "Fluxury Design - Mohammed Fhamni | Designer d'Intérieur Maroc",
  description:
    "Mohammed Fhamni, Designer d'intérieur et décorateur basé au Maroc. تخصص في تحويل المساحات، مخططات 3D، وتصاميم داخلية سكنية فاخرة.",
  generator: "Next.js", // Updated from v0.app
  authors: [{ name: "Mohammed Fhamni", url: "https://fluxurydesign.com" }], // يمكنك تغيير الرابط هنا
  keywords: ["Design Intérieur Maroc", "Décorateur Casablanca", "Plans 3D", "Design Résidentiel Luxe", "Mohammed Fhamni", "Interior Designer Morocco"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // تم تغيير لغة الصفحة إلى الفرنسية
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}