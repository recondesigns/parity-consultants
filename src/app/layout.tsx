import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import Header from "./components/header/Header"
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
      <body
        className={inter.className}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
