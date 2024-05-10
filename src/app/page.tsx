"use client"
import { Main } from "./components/ui"
import { HomeHero, ScaleComputingSection } from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <HomeHero />
      <ScaleComputingSection />
    </Main>
  )
}
