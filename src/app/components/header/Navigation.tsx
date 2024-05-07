"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import Link from "next/link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import NavigationFlyout from "./NavigationFlyout"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import { useAppStore } from "../../stores/appStore"

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
          <StyledLink href="/our-services">
            <Typography>Services</Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/our-solutions">
            <Typography>Solutions</Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/contact-us">
            <Typography>Contact us</Typography>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/get-support">
            <Typography>Get support</Typography>
          </StyledLink>
        </li>
      </StyledUl>
      <MenuIconContainer
        sx={{ display: { xs: "flex", md: "none" } }}
        onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
      >
        {!isFlyoutOpen ? <MenuIcon /> : <MenuOpenIcon />}
      </MenuIconContainer>
      <NavigationFlyout />
    </StyledNav>
  )
}