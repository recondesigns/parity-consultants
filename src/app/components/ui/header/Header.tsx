"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Navigation from "./Navigation"
import { styled } from "@mui/material/styles"
import parityLogo from "../../../../../public/images/parity-red-logo.png"

const StyledHeader = styled(Box)(
  {
    position: "fixed",
    left: "0px",
    right: "0px",
    display: "flex",
    alignItems: "center",
    background: "#FDFCFC",
    zIndex: 300,
  },
  ({}) => ({})
)

export default function Header() {
  return (
    <StyledHeader
      as="header"
      sx={{
        top: { xs: "0px" },
        padding: {
          xs: "12px 20px 12px 20px",
          md: "0px 40px 0px 40px",
          lg: "20px 80px 20px 80px",
        },
        justifyContent: { xs: "space-between", lg: "flex-start" },
        gap: { lg: "40px" },
      }}
    >
      <Box>
        <Link
          href={
            process.env.NODE_ENV === "development"
              ? "http://localhost:3000"
              : "/"
          }
          aria-label="Parity consultants"
          title="Parity Consultants"
          style={{ padding: "6px", display: "inline-block" }}
        >
          <Image src={parityLogo} height={40} alt="Company logo." />
        </Link>
      </Box>
      <Navigation />
    </StyledHeader>
  )
}
