import React from "react"
import { Metadata } from "next"
import { Main } from "../components/ui"
import ServicesHero from "./services-hero/ServicesHero"
import PageHeading from "./PageHeading"
import InfrastructureServicesSection from "./InfrastructureServicesSection"
import SecurityComplianceServicesSection from "./SecurityComplianceServicesSection"
import DataProtectionServicesSection from "./DataProtectionServicesSection"
import ConsultingServicesSection from "./ConsultingServicesSection"
import SupportServicesSection from "./SupportServicesSection"
import { ScaleComputingSectionSmall } from "../components/home-page"
import { PartnersSection } from "../components/home-page"

export const metadata: Metadata = {
  title: "Our Services | Parity Consultants",
  description:
    "Discover the comprehensive IT consulting services we offer at Parity Consultants. Our expert team specializes in IT strategy, cybersecurity, cloud solutions, and more to help your business thrive in the digital age.",
  keywords: [
    "IT Consulting",
    "IT Strategy",
    "Cybersecurity",
    "Cloud Solutions",
    "Business IT Services",
    "Digital Transformation",
  ],
}

function ServicesPage() {
  return (
    <Main>
      <ServicesHero />
      <PageHeading />
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
