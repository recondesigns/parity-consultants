"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Main, Section } from "../components/ui"
import ContactUsSectionForm from "./ContactUsSectionForm"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

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
            textAlign="center"
          >
            Contact us
          </Typography>
          <Typography
            variant="h5"
            component="p"
            fontFamily="inherit"
            color="#D95C5C"
            textAlign="center"
            pt="8px"
          >
            We reply typically within one business day
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ padding: "0px 20px" }}>
            <Box>
              <Typography
                variant="h5"
                component="h3"
                textAlign="center"
                fontWeight="bold"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                Send us a message
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                pt="16px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                One of our team members will reply to within one business day.
              </Typography>
              <Typography
                variant="body2"
                component="p"
                textAlign="center"
                pt="16px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                If you'd like to opt out of future communications, please send
                us an message or email.
              </Typography>
              <Box
                sx={{
                  padding: "32px 0px 48px 0px",
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
              px={{
                xs: "20px",
                sm: "80px",
                md: "200px",
                lg: "64px",
                xl: "140px",
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
              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                pt="16px"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                sales@parity.us.com
              </Typography>
              <StyledLink href="tel:4692405090">
                <Typography
                  variant="body1"
                  component="p"
                  textAlign={{ xs: "center" }}
                  pt="4px"
                  sx={{ fontFamily: "inherit", color: "#333333" }}
                >
                  469-240-5090
                </Typography>
              </StyledLink>
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
              pt="40px"
              px={{
                xs: "20px",
                sm: "80px",
                md: "200px",
                lg: "64px",
                xl: "140px",
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
              pt="40px"
              px={{
                xs: "20px",
                sm: "80px",
                md: "200px",
                lg: "64px",
                xl: "140px",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                textAlign="center"
                fontWeight="bold"
                sx={{ color: "#333333", fontFamily: "inherit" }}
              >
                Find us on social media
              </Typography>
              <Box
                pt="16px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <StyledLink href="https://www.facebook.com/" target="_blank">
                  <FacebookIcon fontSize="large" sx={{ color: "#333333" }} />
                </StyledLink>
                <StyledLink href="https://www.instagram.com/" target="_blank">
                  <InstagramIcon fontSize="large" sx={{ color: "#333333" }} />
                </StyledLink>
                <StyledLink href="https://www.LinkedIn.com/" target="_blank">
                  <LinkedInIcon fontSize="large" sx={{ color: "#333333" }} />
                </StyledLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Main>
  )
}

export default React.memo(ContactUsPage)
