"use client"
import React from "react"
import { Main } from "../components/ui"
import HeroSection from "./HeroSection"
import InfrastructureServicesSection from "./InfrastructureServicesSection"
import SecurityComplianceServicesSection from "./SecurityComplianceServicesSection"
import DataProtectionServicesSection from "./DataProtectionServicesSection"
import ConsultingServicesSection from "./ConsultingServicesSection"
import SupportServicesSection from "./SupportServicesSection"
import { ScaleComputingSectionSmall } from "../components/home-page"
import { PartnersSection } from "../components/home-page"

function ServicesPage() {
  return (
    <Main>
      <HeroSection includeLearnMoreButton />
      <InfrastructureServicesSection />
      <SecurityComplianceServicesSection />
      <DataProtectionServicesSection />
      <ConsultingServicesSection />
      <SupportServicesSection />
      <PartnersSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}

export default React.memo(ServicesPage)
