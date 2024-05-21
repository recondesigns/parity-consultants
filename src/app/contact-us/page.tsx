"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Main, Section } from "../components/ui"
import ContactUsSectionForm from "./ContactUsSectionForm"
// import FacebookIcon from "@mui/icons-material/Facebook"
// import InstagramIcon from "@mui/icons-material/Instagram"
// import LinkedInIcon from "@mui/icons-material/LinkedIn"
import ContactUsMap from "./ContactUsMap"
import { ScaleComputingSectionSmall } from "../components/home-page"

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

function ContactUsPage() {
  return (
    <Main
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Section
        sx={{
          padding: {
            xs: "64px 20px",
            md: "80px 64px",
            lg: "100px 80px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "0px 0px 64px 0px" }}>
          <Typography
            variant="h3"
            component="h2"
            fontFamily="inherit"
            fontWeight="bold"
            color="#333333"
            textAlign={{ xs: "left", md: "center" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            component="p"
            fontFamily="inherit"
            color="#D95C5C"
            textAlign={{ xs: "left", md: "center" }}
            pt="8px"
          >
            Connect with Parity Consultants for tailored technology solutions
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ padding: { xs: "0px 0px" } }}>
            <Box>
              <Box
                sx={{
                  px: { sm: "80px", md: "172px", lg: "60px", xl: "156px" },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  textAlign={{ xs: "left", sm: "center" }}
                  fontWeight="bold"
                  sx={{ color: "#333333", fontFamily: "inherit" }}
                >
                  Send us a message
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  textAlign={{ xs: "left", sm: "center" }}
                  pt="16px"
                  sx={{ color: "#333333", fontFamily: "inherit" }}
                >
                  If you&apos;d like to opt out of future communications, please
                  send us a message or email.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "20px 0px 48px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactUsSectionForm />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              padding={{
                xs: "0px 20px 40px 20px",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                textAlign="center"
                fontWeight="bold"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                Hours of operation
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                pt="16px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                We provide onsite and remote services Monday to Friday from 8:00
                to 5:00 (CST), excluding holidays.
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                pt="16px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                Weekend support is available at $150.00 per hour
              </Typography>
            </Box>

            <Box
              padding={{
                xs: "0px 20px 12px 20px",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                textAlign="center"
                fontWeight="bold"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                Contact details
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <StyledLink
                  href="mailto:sales@parity.us.com"
                  aria-label="Email us"
                  title="Email us"
                  sx={{ px: { xs: "8px", sm: "0px" } }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    textAlign={{ xs: "center" }}
                    pt="4px"
                    sx={{
                      fontFamily: "inherit",
                      color: "#333333",
                    }}
                  >
                    sales@parity.us.com
                  </Typography>
                </StyledLink>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <StyledLink
                  href="tel:4692405090"
                  aria-label="Call us"
                  title="Call us"
                  sx={{ display: "inline-block" }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    textAlign={{ xs: "center" }}
                    pt="4px"
                    sx={{
                      fontFamily: "inherit",
                      color: "#333333",
                    }}
                  >
                    469-240-5083
                  </Typography>
                </StyledLink>
              </Box>

              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                pt="16px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                860 Hebron Parkway
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                pt="4px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                #1203 Lewisville, TX 75057
              </Typography>
            </Box>
            <Box
              sx={{
                padding: { sm: "0px 20px", md: "0px 80px", lg: "0px 20px" },
                width: "100%",
                height: { xs: "200px", md: "250px" },
              }}
            >
              <ContactUsMap />
            </Box>
          </Grid>
        </Grid>
      </Section>
      <ScaleComputingSectionSmall />
    </Main>
  )
}

export default React.memo(ContactUsPage)
