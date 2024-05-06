import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

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
        <header>This is a header</header>
        {children}
        <footer>This is a footer</footer>
      </body>
    </html>
  )
}
