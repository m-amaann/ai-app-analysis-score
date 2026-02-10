import type { Metadata } from "next"
import { Barlow } from "next/font/google"
import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Website Quality Intelligence",
  description: "Analyze performance, SEO & best practices",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="font-sans antialiased bg-slate-50">
        {children}
      </body>
    </html>
  )
}
