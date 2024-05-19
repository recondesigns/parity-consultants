"use client"
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import MovingCardsSection from "../../ui/section/MovingCardsSection"
import testimonials from "./testimonials"

function SocialProofSection() {
  return (
    <Section
      sx={{
        overflow: "hidden",
        padding: {
          xs: "40px 20px",
          sm: "100px 40px",
          md: "100px 40px",
          lg: "120px 100px",
        },
        background: "rgba(217,92,92, 0.1)",
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
          Success stories from our clients
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Discover real results and experiences
        </Typography>
      </Box>
      <MovingCardsSection items={testimonials} />
    </Section>
  )
}

export default React.memo(SocialProofSection)
