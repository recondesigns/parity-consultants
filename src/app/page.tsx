"use client"
import { Main } from "./components/ui"
import {
  ScaleComputingFormSection,
  HeroSection,
  ServicesSection,
  SocialProofSection,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <ScaleComputingFormSection />
      <ServicesSection />
      <ScaleComputingFormSection />
      <SocialProofSection />
    </Main>
  )
}
