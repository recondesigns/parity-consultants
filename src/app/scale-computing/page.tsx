"use client"
import React from "react"
import { FocusProvider } from "../context/FocusContext"
import { Main } from "../components/ui"
import { ScaleComputingSection } from "../components/home-page"
import CenterAlignedSection from "./CenterAlignedSection"
import LeftAlignedSection from "./LeftAlignedSection"
import RightAlignedSection from "./RightAlignedSection"

export default function ScaledComputingPage() {
  return (
    <FocusProvider>
      <Main>
        <ScaleComputingSection />
        <CenterAlignedSection />
        <LeftAlignedSection />
        <RightAlignedSection />
      </Main>
    </FocusProvider>
  )
}
