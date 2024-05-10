"use client"
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import MovingCardsSection from "../../ui/section/MovingCardsSection"

function SocialProofSection() {
  return (
    <Section
      sx={{
        padding: "80px 80px",
        px: { xs: "20px", md: "40px", lg: "80px" },
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "0px 0px 40px 0px",
            sm: "0px 0px 56px 0px",
            md: "0px 32px 56px 32px",
            lg: "0px 32px 72px 32px",
            xl: "0px 0px 72px 0px",
          },
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontFamily="inherit"
          fontWeight="bold"
          color="#333333"
          textAlign="center"
        >
          Client testimonials
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          See what our clients are saying
        </Typography>
      </Box>
      <MovingCardsSection items={testimonials} direction="right" speed="fast" />
    </Section>
  )
}

const testimonials = [
  {
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis`,
    name: "Frank Galikanokus",
    company: "Bunty Soap Company",
    testimonialImage: "",
  },
  {
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis`,
    name: "Frank Galikanokus",
    company: "Bunty Soap Company",
    testimonialImage: "",
  },
  {
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis`,
    name: "Frank Galikanokus",
    company: "Bunty Soap Company",
    testimonialImage: "",
  },
]

export default SocialProofSection
