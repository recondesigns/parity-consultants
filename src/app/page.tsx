"use client"
import { Main } from "./components/ui"
import {
  HomeHero,
  ScaleComputingSection,
  ServicesSection,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <ScaleComputingSection />
      <HomeHero />
      <ServicesSection />
    </Main>
  )
}
