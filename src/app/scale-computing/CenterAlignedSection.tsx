"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { montserrat } from "../fonts"

const StyledLink = styled(Link)({}, ({}) => ({}))

export default function CenterAlignedSection() {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "100px 40px",
          md: "100px 80px",
          lg: "120px 100px",
        },
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        color="#333333"
        textAlign={{ xs: "left", md: "center" }}
        className={montserrat.className}
        paddingBottom={{ xs: "12px" }}
      >
        Superior Performance and Resilience
      </Typography>
      <Typography
        variant="h5"
        component="p"
        fontFamily="inherit"
        color="#D95C5C"
        textAlign={{ xs: "left", md: "center" }}
        paddingBottom={{ xs: "24px" }}
      >
        Empower your business with unmatched reliability
      </Typography>
      <Typography
        variant="body1"
        component="p"
        fontFamily="inherit"
        color="#333333"
        textAlign={{ xs: "left", md: "center" }}
        paddingBottom={{ xs: "24px", md: "48px" }}
      >
        Scale Computing ensures uninterrupted business operations with built-in
        redundancy, automated failover, and self-healing capabilities. Our
        consultants tailor solutions to your unique needs, providing continuous
        support to keep your business running smoothly.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: { md: "center" } }}>
        <StyledLink href="./scale-computing#scaleComputingHeroSection">
          <Button
            variant="outlined"
            component="div"
            sx={{
              width: { xs: "100%", md: "auto" },
              textTransform: "none",
              borderRadius: "50px",
            }}
            size="large"
          >
            Contact us
          </Button>
        </StyledLink>
      </Box>
    </Box>
  )
}
