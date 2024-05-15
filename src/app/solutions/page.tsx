"use client"
import HeroSection from "./HeroSection"
import ContentSection from "./ContentSection"
import {
  ScaleComputingSectionSmall,
  SocialProofSection,
} from "../components/home-page"
import { Main } from "../components/ui"

export default function SolutionsPage() {
  return (
    <Main>
      <HeroSection />
      <ContentSection />
      <SocialProofSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
