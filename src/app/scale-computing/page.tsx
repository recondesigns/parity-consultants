"use client"
import { Main } from "../components/ui"
import { HeroSection } from "../components/home-page"
import CenterAlignedSection from "./CenterAlignedSection"
import LeftAlignedSection from "./LeftAlignedSection"

export default function ScaledComputingPage() {
  return (
    <Main>
      <HeroSection />
      <CenterAlignedSection />
      <LeftAlignedSection />
    </Main>
  )
}
