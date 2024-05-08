"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import parityLogo from "../../../../public/parity-logo.png"

const StyledFooter = styled(Box)(
  {
    display: "flex"
  },
  ({ theme }) => ({})
)

const StyledUl = styled("ul")(
  {
    position: "relative",
    margin: "0px",
    padding: "0px 0px 0px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    listStyleType: "none",
  },
  ({ theme }) => ({})
)

const StyledNav = styled(Box)(
  {
    display: "flex",
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

export default function Footer() {
  return (
    <StyledFooter
      sx={{
        py: { xs: "48px", lg: "64px" },
        px: { xs: "20px", md: "40px", lg: "80px" },
      }}
    >
      <Grid container>
        <Grid item xs={12} pb={"12px"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "left" },
            }}
          >
            <Link href={"/"} style={{ display: "inline-block" }}>
              <Image src={parityLogo} height={32} alt="Company logo." />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={5} pb={"24px"}>
          <StyledUl>
            <li style={{ width: "100%" }}>
              <Typography
                variant="caption"
                component="p"
                textAlign={{ xs: "center", sm: "left" }}
              >
                860 Hebron Parkway #1203
              </Typography>
              <Typography
                variant="caption"
                component="p"
                textAlign={{ xs: "center", sm: "left" }}
              >
                Lewisville, TX 75057
              </Typography>
              <StyledLink href="tel:4692405090">
                <Typography
                  variant="caption"
                  component="p"
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  469-240-5090
                </Typography>
              </StyledLink>
            </li>
          </StyledUl>
        </Grid>
        <Grid item xs={12} sm={9} md={8} lg={7}>
          <StyledNav as="nav">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} sm={3} pb={"24px"}>
                <StyledUl>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body1"
                      textAlign={{ xs: "center", sm: "left" }}
                      fontWeight="bold"
                    >
                      We offer
                    </Typography>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink href="/our-services">
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Services
                      </Typography>
                    </StyledLink>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink href="/our-solutions">
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Solutions
                      </Typography>
                    </StyledLink>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink href="/scaled-computing">
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Scaled Computing
                      </Typography>
                    </StyledLink>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink href="/get-support">
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Support
                      </Typography>
                    </StyledLink>
                  </li>
                </StyledUl>
              </Grid>

              <Grid item xs={12} sm={3} pb={"24px"}>
                <StyledUl>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body1"
                      textAlign={{ xs: "center", sm: "left" }}
                      fontWeight="bold"
                    >
                      Connect
                    </Typography>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Facebook
                      </Typography>
                    </StyledLink>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Instagram
                      </Typography>
                    </StyledLink>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        LinkedIn
                      </Typography>
                    </StyledLink>
                  </li>
                  <li style={{ width: "100%" }}>
                    <StyledLink href="/contact-us">
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                      >
                        Contact us
                      </Typography>
                    </StyledLink>
                  </li>
                </StyledUl>
              </Grid>

              <Grid item xs={12} sm={3}>
                <StyledUl>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      textAlign={{ xs: "center", sm: "left" }}
                    >
                      Company
                    </Typography>
                  </li>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body2"
                      textAlign={{ xs: "center", sm: "left" }}
                    >
                      About us
                    </Typography>
                  </li>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body2"
                      textAlign={{ xs: "center", sm: "left" }}
                    >
                      Terms & Conditions
                    </Typography>
                  </li>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body2"
                      textAlign={{ xs: "center", sm: "left" }}
                    >
                      Privacy Policy
                    </Typography>
                  </li>
                </StyledUl>
              </Grid>
            </Grid>
          </StyledNav>
        </Grid>
      </Grid>
    </StyledFooter>
  )
}
