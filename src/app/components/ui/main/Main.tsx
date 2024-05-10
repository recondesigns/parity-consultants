"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

const StyledMain = styled(Box)(
  {
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

export default function Main({ children, ...otherProps }: Props) {
  return (
    <StyledMain
      component={"main"}
      // sx={{ paddingTop: { xs: "80px", lg: "96px" } }}
      {...otherProps}
    >
      {children}
    </StyledMain>
  )
}
