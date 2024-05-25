import React from "react"
import { Metadata } from "next"
import { FocusProvider } from "../context/FocusContext"
import { Main } from "../components/ui"
import ScaleComputingHero from "./ScaleComputingHero"
import CenterAlignedSection from "./CenterAlignedSection"
import LeftAlignedSection from "./LeftAlignedSection"
import RightAlignedSection from "./RightAlignedSection"

export const metadata: Metadata = {
  title: "Get Scale Computing",
  description:
    "Explore our advanced Scale Computing solutions designed to optimize your IT infrastructure. Our scalable, high-performance computing services enhance efficiency, reduce costs, and support growth. Discover how our expert team can transform your business with innovative technology solutions.",
  keywords: [
    "scale computing",
    "high-performance computing",
    "scalable IT solutions",
    "IT infrastructure optimization",
    "cost-effective computing",
    "enterprise computing solutions",
    "computing services",
    "IT scalability",
    "business growth technology",
    "innovative IT solutions",
    "IT efficiency",
    "computing technology",
    "infrastructure solutions",
    "IT cost reduction",
    "computing performance",
  ],
}

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
