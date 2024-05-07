"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import parityLogo from "../../../../public/parity-logo.png"

const StyledHeader = styled(Box)(
  {
    // padding: '0px 20px',
    // border: "2px solid lightgreen",
  },
  ({ theme }) => ({})
)

export default function Header() {
  return (
    <StyledHeader
      as="header"
      sx={{ py: 2, px: { xs: "20px", md: "40px", lg: "80px" } }}
    >
      <Link
        href={
          process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/"
        }
        style={{ padding: "6px", display: "inline-block" }}
      >
        <Image src={parityLogo} height={32} alt="Company logo." />
      </Link>
    </StyledHeader>
  )
}
