"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Navigation from "./Navigation"
import { styled } from "@mui/material/styles"
import parityLogo from "../../../../public/parity-logo.png"

const StyledHeader = styled(Box)(
  {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#FDFCFC",
  },
  ({ theme }) => ({})
)

export default function Header() {
  return (
    <StyledHeader
      as="header"
      sx={{
        py: { xs: "12px", lg: "20px" },
        px: { xs: "20px", md: "40px", lg: "80px" },
      }}
    >
      <div>
        <Link
          href={
            process.env.NODE_ENV === "development"
              ? "http://localhost:3000"
              : "/"
          }
          style={{ padding: "6px", display: "inline-block" }}
        >
          <Image src={parityLogo} height={32} alt="Company logo." />
        </Link>
      </div>
      <Navigation />
    </StyledHeader>
  )
}
