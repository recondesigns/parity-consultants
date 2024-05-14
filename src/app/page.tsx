"use client"
import { Main } from "./components/ui"
import {
  ScaleComputingSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
  PartnersSection,
  NewHeroSection,
  ScaleComputingSectionSmall,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <NewHeroSection />
      <ServicesSection />
      <PartnersSection />
      <ScaleComputingSection />
      <SocialProofSection />
      <SolutionsSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
