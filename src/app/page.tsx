"use client"
import { Main } from "./components/ui"
import {
  ScaleComputingFormSection,
  HeroSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <ScaleComputingFormSection />
      <ServicesSection />
      <ScaleComputingFormSection />
      <SocialProofSection />
      <SolutionsSection />
    </Main>
  )
}
