import { Metadata } from "next"
import { Main } from "../components/ui"
import SolutionsHero from "./SolutionsHero"
import ContentSection from "./ContentSection"
import { ScaleComputingSectionSmall } from "../components/home-page"

export const metadata: Metadata = {
  title: "Our Solutions | Parity Consultants",
  description:
    "Discover tailored IT solutions for businesses of all sizes. Our IT consultants provide expert services in cloud computing, cybersecurity, network infrastructure, and software development to enhance your company's performance and security.",
  keywords: [
    "IT consulting",
    "IT solutions",
    "cloud computing",
    "cybersecurity",
    "network infrastructure",
    "software development",
    "IT services",
    "business IT solutions",
    "managed IT services",
    "IT strategy",
    "technology consulting",
    "IT support",
    "enterprise solutions",
    "digital transformation",
    "data security",
  ],
}

export default function SolutionsPage() {
  return (
    <Main>
      <SolutionsHero />
      <ContentSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
