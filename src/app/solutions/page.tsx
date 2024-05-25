import { Main } from "../components/ui"
import SolutionsHero from "./SolutionsHero"
import ContentSection from "./ContentSection"
import {
  ScaleComputingSectionSmall,
  SocialProofSection,
} from "../components/home-page"

export default function SolutionsPage() {
  return (
    <Main>
      <SolutionsHero />
      <ContentSection />
      <SocialProofSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
