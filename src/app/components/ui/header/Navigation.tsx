"use client"
import React from "react"
import { usePathname } from "next/navigation"
import { styled } from "@mui/material/styles"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
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
  ({}) => ({})
)

const MenuIconContainer = styled("button")(
  {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  ({}) => ({})
)

const StyledNav = styled(Box)({}, ({}) => ({}))

type StyledLiProps = {
  isScaleComputingLink?: boolean
  isActiveLink: boolean
}

const StyledLi = styled("li")<StyledLiProps>(
  {
    padding: "4px 0px",
    height: "100%",
  },
  ({ isActiveLink, isScaleComputingLink }) => ({
    borderBottom: !isActiveLink
      ? "none"
      : isScaleComputingLink
        ? "3px solid #FC711F"
        : "3px solid #D95C5C",
  })
)

type StyledLinkTextProps = {
  isScaleComputingLink?: boolean
  isActiveLink: boolean
}

const StyledLinkText = styled(Typography)<StyledLinkTextProps>(
  {
    height: "100%",
    fontFamily: "inherit",
  },
  ({ isActiveLink, isScaleComputingLink }) => ({
    color: isScaleComputingLink
      ? "#FC711F"
      : isActiveLink
        ? "#D95C5C"
        : "#333333",
  })
)

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
  },
  ({}) => ({
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
    <StyledNav
      as="nav"
      sx={{
        width: { xs: "auto", lg: "100%" },
        display: { lg: "flex" },
        justifyContent: { lg: "space-between" },
        alignItems: { lg: "center" },
      }}
    >
      <StyledUl sx={{ display: { xs: "none", lg: "flex" } }}>
        <StyledLi isActiveLink={setIsActiveLink(pathname, "/")}>
          <StyledLink href="/" sx={{ height: "100%" }}>
            <StyledLinkText isActiveLink={setIsActiveLink(pathname, "/")}>
              Home
            </StyledLinkText>
          </StyledLink>
        </StyledLi>
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
      <StyledUl
        sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}
      >
        <StyledLi
          isActiveLink={setIsActiveLink(pathname, "/")}
          sx={{ borderBottom: "4px solid #FDFCFC" }}
        >
          <StyledLink
            href="https://parity.myportallogin.com/"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            target="_blank"
          >
            <StyledLinkText
              variant="body2"
              isActiveLink={setIsActiveLink(pathname, "/")}
              sx={{ color: "#333333" }}
            >
              Client portal
            </StyledLinkText>
            <OpenInNewIcon fontSize="small" />
          </StyledLink>
        </StyledLi>
        <StyledLi
          isActiveLink={setIsActiveLink(pathname, "/")}
          sx={{ borderBottom: "4px solid #FDFCFC" }}
        >
          <StyledLink
            href="https://parity256.screenconnect.com/"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            target="_blank"
          >
            <StyledLinkText
              variant="body2"
              isActiveLink={setIsActiveLink(pathname, "/")}
              sx={{ color: "#333333" }}
            >
              Remote access
            </StyledLinkText>
            <OpenInNewIcon fontSize="small" />
          </StyledLink>
        </StyledLi>
        <StyledLi
          isActiveLink={setIsActiveLink(pathname, "/")}
          sx={{ borderBottom: "4px solid #FDFCFC" }}
        >
          <StyledLink
            href="https://parity256.screenconnect.com/"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            target="_blank"
          >
            <Button
              component="div"
              disableElevation
              variant="contained"
              sx={{
                background: "#FC711F",
                "&:hover": {
                  background: "#e65100",
                },
              }}
            >
              <StyledLinkText
                isActiveLink={setIsActiveLink(pathname, "/")}
                sx={{ color: "#FDFCFC", textTransform: "none" }}
              >
                Get Scale Computing
              </StyledLinkText>
            </Button>
          </StyledLink>
        </StyledLi>
      </StyledUl>
      <MenuIconContainer
        sx={{ display: { xs: "flex", lg: "none", color: "color: '#333333'," } }}
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
