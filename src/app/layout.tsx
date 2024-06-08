import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { mulish } from "./fonts"
import { Header, Footer } from "./components/ui/"
import faviconImage16x16 from "../../public/images/favicons/favicon-16x16.png"
import faviconImage32x32 from "../../public/images/favicons/favicon-32x32.png"
import faviconImage96x96 from "../../public/images/favicons/favicon-96x96.png"
import faviconImage128x128 from "../../public/images/favicons/favicon-128x128.png"
import faviconImage196x196 from "../../public/images/favicons/favicon-196x196.png"
import appleFaviconImage57x57 from "../../public/images/favicons/apple-touch-icon-57x57.png"
import appleFaviconImage60x60 from "../../public/images/favicons/apple-touch-icon-60x60.png"
import appleFaviconImage72x72 from "../../public/images/favicons/apple-touch-icon-72x72.png"
import appleFaviconImage76x76 from "../../public/images/favicons/apple-touch-icon-76x76.png"
import appleFaviconImage114x114 from "../../public/images/favicons/apple-touch-icon-114x114.png"
import appleFaviconImage120x120 from "../../public/images/favicons/apple-touch-icon-120x120.png"
import appleFaviconImage144x144 from "../../public/images/favicons/apple-touch-icon-144x144.png"
import appleFaviconImage152x152 from "../../public/images/favicons/apple-touch-icon-152x152.png"
import appleFaviconImage167x167 from "../../public/images/favicons/apple-touch-icon-167x167.png"
import appleFaviconImage180x180 from "../../public/images/favicons/apple-touch-icon-180x180.png"
import manifestFile from "./manifest"
import "./globals.css"

export const metadata: Metadata = {
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: faviconImage16x16.src,
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: faviconImage32x32.src,
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: faviconImage96x96.src,
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      url: faviconImage128x128.src,
      sizes: "128x128",
    },
    {
      rel: "icon",
      type: "image/png",
      url: faviconImage196x196.src,
      sizes: "196x196",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage57x57.src,
      sizes: "57x57",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage60x60.src,
      sizes: "60x60",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage72x72.src,
      sizes: "72x72",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage76x76.src,
      sizes: "76x76",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage114x114.src,
      sizes: "114x114",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage120x120.src,
      sizes: "120x120",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage144x144.src,
      sizes: "144x144",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage152x152.src,
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage167x167.src,
      sizes: "167x167",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: appleFaviconImage180x180.src,
      sizes: "180x180",
    },
  ],
  manifest: `${manifestFile}`,
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
