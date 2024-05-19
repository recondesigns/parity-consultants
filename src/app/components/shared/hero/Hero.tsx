"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

type HeroSectionProps = {
  bgColor?: string
  bgImage?: string
}

const HeroSection = styled("section")<HeroSectionProps>(
  {
    width: "100%",
    overflow: "hidden",
  },
  ({ bgColor }) => ({
    background: !bgColor ? "lightgreen" : bgColor,
  }),
  ({ bgImage }) => ({
    backgroundImage: bgImage && bgImage,
  })
)

type Props = {
  firstColumnSlot: React.ReactNode
  secondColumnSlot?: React.ReactNode
  bgColor?: string | React.ReactNode
  bgImage?: string
}

export default function Hero({
  firstColumnSlot,
  secondColumnSlot,
  bgColor = "#333333",
  bgImage,
}: Props) {
  return (
    <HeroSection
      bgColor={`${bgColor}`}
      bgImage={`${bgImage}`}
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "100px 40px",
          md: "100px 80px",
          lg: "80px 80px",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box
            id="heroSlotColumnOne"
            sx={{
              height: { lg: "100%" },
            }}
          >
            {firstColumnSlot}
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            id="heroSlotColumnTwo"
            sx={{
              height: { lg: "100%" },
            }}
          >
            {secondColumnSlot}
          </Box>
        </Grid>
      </Grid>
    </HeroSection>
  )
}
