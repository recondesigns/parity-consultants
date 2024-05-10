"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

const StyledSection = styled(Box)(
  {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ({ theme }) => ({})
)

type Props = {
  sx?: any
  children: React.ReactNode
}

const Section = ({ children, ...otherProps }: Props) => {
  return <StyledSection {...otherProps}>{children}</StyledSection>
}

export default Section
