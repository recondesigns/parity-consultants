"use client"
import React from "react"
import Image from "next/image"
import { montserrat } from "../fonts"
import { Main } from "../components/ui"
import InfrastructureServicesSection from "./InfrastructureServicesSection"
import SecurityComplianceServicesSection from "./SecurityComplianceServicesSection"
import DataProtectionServicesSection from "./DataProtectionServicesSection"
import ConsultingServicesSection from "./ConsultingServicesSection"
import SupportServicesSection from "./SupportServicesSection"
import PageHeading from "./PageHeading"
import { ScaleComputingSectionSmall } from "../components/home-page"
import { PartnersSection } from "../components/home-page"
import { Hero } from "../components/shared"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import heroImage from "../../../public/images/section-image-1.png"

const slotOneContent = () => (
  <Box
    sx={{
      height: { lg: "100%" },
      py: { sm: "20px", md: "40px" },
      px: { sm: "20px", md: "40px", lg: "0px" },
      display: { lg: "flex" },
      flexDirection: { lg: "column" },
      justifyContent: { lg: "center" },
      alignItems: { lg: "center" },
    }}
  >
    <Typography
      variant="h3"
      component="h1"
      className={montserrat.className}
      sx={{
        width: "100%",
        paddingBottom: { xs: "8px", lg: "20px" },
        fontWeight: 700,
        textAlign: { xs: "center", lg: "left" },
        color: "#FDFCFC",
      }}
    >
      Complete IT services for business success
    </Typography>
    <Typography
      variant="h4"
      component="p"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px", lg: "24px" },
      }}
    >
      Empowering your business with cutting-edge IT solutions
    </Typography>
    <Typography
      variant="body1"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px" },
      }}
    >
      At Parity Consultants, we provide a full range of IT services to boost
      your business&apos;s innovation, efficiency, and growth. Enhance your
      technology, secure your digital assets, and achieve your business goals
      with our tailored solutions.
    </Typography>
  </Box>
)

const slotTwoContent = () => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image src={heroImage} height={400} alt="Temporary image" />
  </Box>
)

function ServicesPage() {
  return (
    <Main>
      <Hero
        bgImage="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
        firstColumnSlot={slotOneContent()}
        secondColumnSlot={slotTwoContent()}
      />
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
