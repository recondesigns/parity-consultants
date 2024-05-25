"use client"
import React from "react"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Hero } from "../components/shared"
import { montserrat } from "../fonts"
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
        textAlign: { xs: "left", md: "center", lg: "left" },
        color: "#FDFCFC",
      }}
    >
      Innovative IT solutions for your business needs
    </Typography>
    <Typography
      variant="h4"
      component="p"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "left", md: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px", lg: "24px" },
      }}
    >
      Transform technology challenges into competitive advantages
    </Typography>
    <Typography
      variant="body1"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "left", md: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px" },
      }}
    >
      At Parity Consultants, we deliver customized IT solutions that drive
      efficiency, security, and growth. Our comprehensive services include cloud
      computing, cybersecurity, data management, and IT infrastructure.
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

export default function SolutionsHero() {
  return (
    <Hero
      bgColor="linear-gradient(to right, #0083b0, #00b4db)"
      firstColumnSlot={slotOneContent()}
      secondColumnSlot={slotTwoContent()}
    />
  )
}
