"use client"
import React from "react"
import Image from "next/image"
import { styled } from "@mui/material/styles"
import { useFocus } from "../context/FocusContext"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { montserrat } from "../fonts"
import scaleLogo from "../../../public/images/partner-logo-scale.png"

const StyledImage = styled(Image)({}, ({}) => ({}))

export default function CenterAlignedSection() {
  const nameInputRef = useFocus()

  const handleClick = () => {
    // @ts-expect-error
    if (nameInputRef.current) {
      // @ts-expect-error
      nameInputRef.current.focus()
    }
  }

  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "80px 20px 40px 20px",
          sm: "80px 40px 40px 40px",
          md: "100px 80px 40px 80px",
          lg: "120px 100px 80px 100px",
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
        paddingBottom={{ xs: "24px", md: "40px" }}
      >
        Empower your business with unmatched reliability
      </Typography>
      <Box
        paddingBottom={{ xs: "24px", md: "40px" }}
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: "center",
        }}
      >
        <StyledImage
          src={scaleLogo}
          alt="Scale Computing logo"
          sx={{ height: { xs: "40px", md: "56px" }, width: "auto" }}
        />
      </Box>
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
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            width: { xs: "100%", sm: "auto" },
            textTransform: "none",
            borderRadius: "50px",
          }}
          size="large"
        >
          Get started
        </Button>
      </Box>
    </Box>
  )
}
