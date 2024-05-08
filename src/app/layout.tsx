import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import "./globals.css"

const inter = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parity Consultants",
  description: "Your IT solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: "relative" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
