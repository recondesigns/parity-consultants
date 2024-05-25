import React from "react"
import { FocusProvider } from "../context/FocusContext"
import { Main } from "../components/ui"
import ScaleComputingHero from "./ScaleComputingHero"
import CenterAlignedSection from "./CenterAlignedSection"
import LeftAlignedSection from "./LeftAlignedSection"
import RightAlignedSection from "./RightAlignedSection"

export default function ScaledComputingPage() {
  return (
    <FocusProvider>
      <Main>
        <ScaleComputingHero />
        <CenterAlignedSection />
        <LeftAlignedSection />
        <RightAlignedSection />
      </Main>
    </FocusProvider>
  )
}
