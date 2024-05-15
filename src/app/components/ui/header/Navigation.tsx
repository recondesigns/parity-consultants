"use client"
import React from "react"
import { usePathname } from "next/navigation"
import { styled } from "@mui/material/styles"
import Link from "next/link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import { useAppStore } from "../../../stores/appStore"
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

type StyledLiProps = {
  isActiveLink: boolean
}

const StyledLi = styled("li")<StyledLiProps>(
  {
    padding: "4px 8px",
    height: "100%",
  },
  ({ isActiveLink }) => ({
    borderBottom: !isActiveLink ? "none" : "3px solid #D95C5C",
  })
)

type StyledLinkTextProps = {
  isActiveLink: boolean
}

const StyledLinkText = styled(Typography)<StyledLinkTextProps>(
  {
    height: "100%",
    fontFamily: "inherit",
  },
  ({ isActiveLink }) => ({
    color: !isActiveLink ? "#333333" : "#D95C5C",
  })
)

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

function setIsActiveLink(currentPath: string, linkpath: string) {
  return currentPath === linkpath ? true : false
}

export default function Navigation() {
  const pathname = usePathname()
  // @ts-expect-error => Property 'isFlyoutOpen' does not exist on type 'unknown'.ts(2339)
  const { isFlyoutOpen, setIsFlyoutOpen } = useAppStore()

  return (
    <StyledNav as="nav">
      <StyledUl sx={{ display: { xs: "none", md: "flex" } }}>
        <StyledLi isActiveLink={setIsActiveLink(pathname, "/services")}>
          <StyledLink href="/services" sx={{ height: "100%" }}>
            <StyledLinkText
              isActiveLink={setIsActiveLink(pathname, "/services")}
            >
              Services
            </StyledLinkText>
          </StyledLink>
        </StyledLi>
        <StyledLi isActiveLink={setIsActiveLink(pathname, "/solutions")}>
          <StyledLink href="/solutions">
            <StyledLinkText
              isActiveLink={setIsActiveLink(pathname, "/solutions")}
            >
              Solutions
            </StyledLinkText>
          </StyledLink>
        </StyledLi>
        {/* <StyledLi isActiveLink={setIsActiveLink(pathname, "/scale-computing")}>
          <StyledLink href="/scale-computing">
            <StyledLinkText
              isActiveLink={setIsActiveLink(pathname, "/scale-computing")}
            >
              Scale Computing
            </StyledLinkText>
          </StyledLink>
        </StyledLi> */}
        <StyledLi isActiveLink={setIsActiveLink(pathname, "/get-support")}>
          <StyledLink href="/get-support">
            <StyledLinkText
              isActiveLink={setIsActiveLink(pathname, "/get-support")}
            >
              Support
            </StyledLinkText>
          </StyledLink>
        </StyledLi>
        <StyledLi isActiveLink={setIsActiveLink(pathname, "/contact-us")}>
          <StyledLink href="/contact-us">
            <StyledLinkText
              isActiveLink={setIsActiveLink(pathname, "/contact-us")}
            >
              Contact
            </StyledLinkText>
          </StyledLink>
        </StyledLi>
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
