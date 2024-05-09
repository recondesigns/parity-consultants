"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import Link from "next/link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import { useAppStore } from "../../stores/appStore"
import NavigationFlyout from "./NavigationFlyout"

const StyledUl = styled("ul")(
  {
    position: "relative",
    margin: "0px",
    padding: "0px",
    display: "flex",
    gap: "12px",
    listStyleType: "none",
  },
  ({ theme }) => ({})
)

const MenuIconContainer = styled("button")(
  {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  ({ theme }) => ({})
)

const StyledNav = styled(Box)({}, ({ theme }) => ({}))

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
  },
  ({ theme }) => ({
    color: "#000000",
    "&:hover": {
      color: "gray",
    },
  })
)

export default function Navigation() {
  // @ts-expect-error => Property 'isFlyoutOpen' does not exist on type 'unknown'.ts(2339)
  const { isFlyoutOpen, setIsFlyoutOpen } = useAppStore()

  return (
    <StyledNav as="nav">
      <StyledUl sx={{ display: { xs: "none", md: "flex" } }}>
        <li>
          <StyledLink href="/services">
            <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
              Services
            </Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/solutions">
            <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
              Solutions
            </Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/scale-computing">
            <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
              Get Scale Computing
            </Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/contact-us">
            <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
              Contact us
            </Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/get-support">
            <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
              Support
            </Typography>
          </StyledLink>
        </li>
      </StyledUl>
      <MenuIconContainer
        sx={{ display: { xs: "flex", md: "none", color: "color: '#333333'," } }}
        onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
      >
        <MenuIcon />
      </MenuIconContainer>
      <NavigationFlyout
        isOpen={isFlyoutOpen}
        onClose={() => setIsFlyoutOpen(!isFlyoutOpen)}
      />
    </StyledNav>
  )
}
