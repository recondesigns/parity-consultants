"use client"
import { Main } from "./components/ui"
import {
  ScaleComputingSection,
  HeroSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <ServicesSection />
      <ScaleComputingSection />
      {/* <ScaleComputingSection /> */}
      <SocialProofSection />
      <SolutionsSection />
    </Main>
  )
}
