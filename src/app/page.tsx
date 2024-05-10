"use client"
import { Main } from "./components/ui"
import {
  HomeHero,
  ScaleComputingSection,
  ServicesSection,
  SocialProofSection
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <ScaleComputingSection />
      <HomeHero />
      <ServicesSection />
      <HomeHero />
      <SocialProofSection />
    </Main>
  )
}
