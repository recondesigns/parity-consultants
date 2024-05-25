"use client"
import React from "react"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Hero } from "../components/shared"
import { montserrat } from "../fonts"
import heroImage from "../../../public/images/section-image-1.png"

const SlotContentOne = () => (
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
      Complete IT services for business success
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
      Empowering your business with cutting-edge IT solutions
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
      At Parity Consultants, we provide a full range of IT services to boost
      your business&apos;s innovation, efficiency, and growth. Enhance your
      technology, secure your digital assets, and achieve your business goals
      with our tailored solutions.
    </Typography>
  </Box>
)

const SlotContentTwo = () => (
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

type Props = {}

export default function ServicesHero({}: Props) {
  return (
    <Hero
      firstColumnSlot={SlotContentOne()}
      secondColumnSlot={SlotContentTwo()}
      bgImage="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
    />
  )
}
