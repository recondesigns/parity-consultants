import type { Metadata } from "next"
import { mulish } from "./fonts"
import { Header, Footer } from "./components/ui/"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: '%s | Parity Consultants',
    default: 'Parity Consultants'
  }, 
  description: "Your IT solutions.",
  generator: 'Next.js',
  applicationName: 'Parity Consultants',
  keywords: [],
  // referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Stedman', url: 'https://github.com/recondesigns' }],
  creator: 'Stedman',
  publisher: 'Stedman',
}

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
