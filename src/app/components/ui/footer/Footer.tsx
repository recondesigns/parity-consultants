"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import parityLogo from "../../../../../public/images/parity-red-logo.png"

const StyledFooter = styled(Box)(
  {
    display: "flex",
  },
  ({}) => ({})
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
  ({}) => ({})
)

const StyledNav = styled(Box)(
  {
    display: "flex",
  },
  ({}) => ({})
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
              <Image src={parityLogo} height={40} alt="Company logo." />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={5} pb={"24px"}>
          <StyledUl>
            <Box
              component="li"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column" },
                alignItems: { xs: "center" },
              }}
            >
              <Typography
                variant="caption"
                component="p"
                textAlign={{ xs: "center", sm: "left" }}
                sx={{ fontFamily: "inherit" }}
              >
                860 Hebron Parkway #1203
              </Typography>
              <Typography
                variant="caption"
                component="p"
                textAlign={{ xs: "center", sm: "left" }}
                sx={{ fontFamily: "inherit" }}
              >
                Lewisville, TX 75057
              </Typography>
              <StyledLink
                href="tel:4692405090"
                sx={{
                  px: "8px",
                }}
              >
                <Typography
                  variant="caption"
                  component="p"
                  textAlign={{ xs: "center", sm: "left" }}
                  sx={{
                    fontFamily: "inherit",
                    color: "#333333",
                  }}
                >
                  469-240-5083
                </Typography>
              </StyledLink>
            </Box>
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
                      sx={{ fontFamily: "inherit" }}
                    >
                      We offer
                    </Typography>
                  </li>
                  <Box
                    component="li"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <StyledLink href="/services" sx={{ px: "8px" }}>
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                        sx={{
                          fontFamily: "inherit",
                          color: "#333333",
                        }}
                      >
                        Services
                      </Typography>
                    </StyledLink>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <StyledLink href="/solutions" sx={{ px: "8px" }}>
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                        sx={{ fontFamily: "inherit", color: "#333333" }}
                      >
                        Solutions
                      </Typography>
                    </StyledLink>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <StyledLink href="/scale-computing" sx={{ px: "8px" }}>
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                        sx={{
                          fontFamily: "inherit",
                          fontWeight: "bold",
                          color: "#FC711F",
                        }}
                      >
                        Scale Computing
                      </Typography>
                    </StyledLink>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <StyledLink href="/#getSupportSection" sx={{ px: "8px" }}>
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                        sx={{ fontFamily: "inherit", color: "#333333" }}
                      >
                        Support
                      </Typography>
                    </StyledLink>
                  </Box>
                </StyledUl>
              </Grid>

              <Grid item xs={12} sm={3} pb={"24px"}>
                <StyledUl>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body1"
                      textAlign={{ xs: "center", sm: "left" }}
                      fontWeight="bold"
                      sx={{ fontFamily: "inherit" }}
                    >
                      Connect
                    </Typography>
                  </li>
                  {/* <li style={{ width: "100%" }}>
                    <StyledLink
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                        sx={{ fontFamily: "inherit", color: "#333333" }}
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
                        sx={{ fontFamily: "inherit", color: "#333333" }}
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
                        sx={{ fontFamily: "inherit", color: "#333333" }}
                      >
                        LinkedIn
                      </Typography>
                    </StyledLink>
                  </li> */}
                  <Box
                    component="li"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <StyledLink href="/contact-us" sx={{ px: "8px" }}>
                      <Typography
                        variant="body2"
                        textAlign={{ xs: "center", sm: "left" }}
                        sx={{ fontFamily: "inherit", color: "#333333" }}
                      >
                        Contact us
                      </Typography>
                    </StyledLink>
                  </Box>
                </StyledUl>
              </Grid>

              <Grid item xs={12} sm={3}>
                <StyledUl>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      textAlign={{ xs: "center", sm: "left" }}
                      sx={{ fontFamily: "inherit" }}
                    >
                      Company
                    </Typography>
                  </li>
                  <Box
                    component="li"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column" },
                      alignItems: { xs: "center" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      textAlign={{ xs: "center", sm: "left" }}
                      sx={{ fontFamily: "inherit", color: "#333333" }}
                    >
                      About us
                    </Typography>
                  </Box>
                  {/* <li style={{ width: "100%" }}>
                    <Typography
                      variant="body2"
                      textAlign={{ xs: "center", sm: "left" }}
                      sx={{ fontFamily: "inherit", color: "#333333" }}
                    >
                      Terms & Conditions
                    </Typography>
                  </li>
                  <li style={{ width: "100%" }}>
                    <Typography
                      variant="body2"
                      textAlign={{ xs: "center", sm: "left" }}
                      sx={{ fontFamily: "inherit", color: "#333333" }}
                    >
                      Privacy Policy
                    </Typography>
                  </li> */}
                </StyledUl>
              </Grid>
            </Grid>
          </StyledNav>
        </Grid>
      </Grid>
    </StyledFooter>
  )
}
