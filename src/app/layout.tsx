"use client"
// import React from "react"
import type { Metadata } from "next"
import { mulish } from "./fonts"
import { Header, Footer } from "./components/ui/"
import "./globals.css"

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
      <body className={mulish.className}>
        <div style={{ position: "relative", paddingTop: "94px" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
