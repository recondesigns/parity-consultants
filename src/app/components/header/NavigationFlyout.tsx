"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import { useAppStore } from "../../stores/appStore"
import parityLogo from "../../../../public/parity-logo.png"

const CloseIconContainer = styled("button")(
  {
    position: "absolute",
    top: "24px",
    right: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  ({ theme }) => ({})
)

const StyledNav = styled(Box)(
  {
    padding: "32px 0px",
  },
  ({ theme }) => ({})
)

const StyledUl = styled("ul")(
  {
    position: "relative",
    margin: "0px",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    listStyleType: "none",
  },
  ({ theme }) => ({})
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

type FlyoutWrapperProps = {
  isflyoutopen: boolean | string
}

const FlyoutWrapper = styled(Box)<FlyoutWrapperProps>(
  {
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    display: "flex",
    paddingTop: "80px",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    background: "white",
    zIndex: "300",
  },
  ({ theme, isflyoutopen }) => ({
    display: isflyoutopen !== "true" ? "none" : "flex",
  })
)

function delayFlyoutClose(setter: any) {
  setTimeout(() => {
    setter()
  }, 200)
}

export default function NavigationFlyout({}) {
  // @ts-expect-error => Property 'isFlyoutOpen' does not exist on type 'unknown'.ts(2339)
  const { isFlyoutOpen, setIsFlyoutOpen } = useAppStore()

  return (
    <FlyoutWrapper isflyoutopen={`${isFlyoutOpen}`}>
      <CloseIconContainer onClick={setIsFlyoutOpen} sx={{ color: "#000000" }}>
        <CloseIcon />
      </CloseIconContainer>
      <Image src={parityLogo} alt="Parity Consultants logo." />
      <StyledNav as="nav">
        <StyledUl>
          <li>
            <StyledLink
              href="/"
              onClick={() => delayFlyoutClose(setIsFlyoutOpen)}
            >
              <Typography sx={{ fontFamily: "inherit" }}>Home</Typography>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/services"
              onClick={() => delayFlyoutClose(setIsFlyoutOpen)}
            >
              <Typography sx={{ fontFamily: "inherit" }}>Services</Typography>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/solutions"
              onClick={() => delayFlyoutClose(setIsFlyoutOpen)}
            >
              <Typography sx={{ fontFamily: "inherit" }}>Solutions</Typography>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/contact-us"
              onClick={() => delayFlyoutClose(setIsFlyoutOpen)}
            >
              <Typography sx={{ fontFamily: "inherit" }}>Contact us</Typography>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/get-support"
              onClick={() => delayFlyoutClose(setIsFlyoutOpen)}
            >
              <Typography sx={{ fontFamily: "inherit" }}>
                Get support
              </Typography>
            </StyledLink>
          </li>
        </StyledUl>
      </StyledNav>
    </FlyoutWrapper>
  )
}
