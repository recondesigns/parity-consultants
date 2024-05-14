"use client"
import { Main } from "./components/ui"
import {
  // ScaleComputingSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
  PartnersSection,
  NewHeroSection,
  ScaleComputingSectionSmall,
  HeroSection,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <NewHeroSection />
      {/* <ScaleComputingSection /> */}
      <HeroSection includeLearnMoreButton={true} />
      <PartnersSection />
      <ServicesSection />
      <SolutionsSection />
      <SocialProofSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
