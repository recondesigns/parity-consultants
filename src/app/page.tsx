import type { Metadata } from "next"
import { Main } from "./components/ui"
import {
  HomeHero,
  ScaleComputingSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
  PartnersSection,
  ScaleComputingSectionSmall,
  GetSupportSection,
} from "./components/home-page/"

export const metadata: Metadata = {
  title: "Expert IT Consulting | Parity Consultants",
  description:
    "Looking for reliable IT consulting services? Our expert team offers managed IT services, tech support, and IT solutions tailored to your business needs. Contact us today!",
  keywords: [
    "IT consulting Dallas Fort Worth",
    "IT consulting Texas",
    "IT services Dallas Fort Worth",
    "IT services Texas",
    "Managed IT services Dallas Fort Worth",
    "Managed IT services Texas",
    "IT support Dallas Fort Worth",
    "IT support Texas",
    "IT Strategy",
  ],
  // title: {
  //   template: 'Parity Consultants| %s',
  //   default: 'Parity Consultants'
  // },
  // description: "Your IT solutions.",
  // generator: 'Next.js',
  // applicationName: 'Parity Consultants',
  // keywords: [],
  // referrer: 'origin-when-cross-origin',
  // authors: [{ name: 'Stedman', url: 'https://github.com/recondesigns' }],
  // creator: 'Stedman',
  // publisher: 'Stedman',
}

export default function Home() {
  return (
    <Main>
      <HomeHero />
      <ScaleComputingSection />
      <PartnersSection />
      <ServicesSection />
      <SolutionsSection />
      <SocialProofSection />
      <GetSupportSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
