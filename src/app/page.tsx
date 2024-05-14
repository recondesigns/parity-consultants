"use client"
import { Main } from "./components/ui"
import {
  ScaleComputingSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
  PartnersSection,
  NewHeroSection
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      {/* <NewHeroSection /> */}
      {/* <PartnersSection /> */}
      <ServicesSection />
      {/* <ScaleComputingSection /> */}
      <SolutionsSection />
      <SocialProofSection />
    </Main>
  )
}
