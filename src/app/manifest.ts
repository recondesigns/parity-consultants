import { MetadataRoute } from "next"
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

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parity Consultants",
    short_name: "Parity Consultants",
    description: "Website for Parity Consultants.",
    start_url: "/",
    display: "standalone",
    icons: [
      //   {
      //     src: faviconImage16x16.src,
      //     sizes: '16x16',
      //     type: 'image/png'
      //     // type: 'image/x-icon',
      //   },
      {
        type: "image/png",
        src: faviconImage16x16.src,
        sizes: "16x16",
      },
      {
        type: "image/png",
        src: faviconImage32x32.src,
        sizes: "32x32",
      },
      {
        type: "image/png",
        src: faviconImage96x96.src,
        sizes: "96x96",
      },
      {
        type: "image/png",
        src: faviconImage128x128.src,
        sizes: "128x128",
      },
      {
        type: "image/png",
        src: faviconImage196x196.src,
        sizes: "196x196",
      },
      {
        type: "image/png",
        src: appleFaviconImage57x57.src,
        sizes: "57x57",
      },
      {
        type: "image/png",
        src: appleFaviconImage60x60.src,
        sizes: "60x60",
      },
      {
        type: "image/png",
        src: appleFaviconImage72x72.src,
        sizes: "72x72",
      },
      {
        type: "image/png",
        src: appleFaviconImage76x76.src,
        sizes: "76x76",
      },
      {
        type: "image/png",
        src: appleFaviconImage114x114.src,
        sizes: "114x114",
      },
      {
        type: "image/png",
        src: appleFaviconImage120x120.src,
        sizes: "120x120",
      },
      {
        type: "image/png",
        src: appleFaviconImage144x144.src,
        sizes: "144x144",
      },
      {
        type: "image/png",
        src: appleFaviconImage152x152.src,
        sizes: "152x152",
      },
      {
        type: "image/png",
        src: appleFaviconImage167x167.src,
        sizes: "167x167",
      },
      {
        type: "image/png",
        src: appleFaviconImage180x180.src,
        sizes: "180x180",
      },
    ],
  }
}
