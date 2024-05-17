"use client"
// import React from "react"
// import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import { Header, Footer } from "./components/ui/"
import { Banner } from "./components/shared"
import "./globals.css"

const inter = Mulish({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Parity Consultants",
//   description: "Your IT solutions.",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: "relative", paddingTop: "82px" }}>
          <Banner />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
