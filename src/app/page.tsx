import { Main } from "./components/ui"
import {
  HomeHero,
  ScaleComputingSection,
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
  PartnersSection,
  ScaleComputingSectionSmall,
  GetSupportSection,
} from "./components/home-page/"

export default function Home() {
  return (
    <Main>
      <HomeHero />
      <ScaleComputingSection />
      <PartnersSection />
      <ServicesSection />
      <SolutionsSection />
      <SocialProofSection />
      <GetSupportSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
