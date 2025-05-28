import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "hvyscn - Future Streetwear",
  description: "Minimalistic, edgy streetwear and custom merchandise for the future-focused",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
