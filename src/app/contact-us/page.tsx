import React from "react"
import { Metadata } from "next"
import { montserrat } from "../fonts"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Main, Section } from "../components/ui"
import FormSection from "./FormSection"
import DetailsSection from "./DetailsSection"
import { ScaleComputingSectionSmall } from "../components/home-page"
// import FacebookIcon from "@mui/icons-material/Facebook"
// import InstagramIcon from "@mui/icons-material/Instagram"
// import LinkedInIcon from "@mui/icons-material/LinkedIn"

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with our team for expert IT consulting services and solutions. Contact us today for inquiries, support, or to learn more about how our innovative technology solutions can benefit your business.",
  keywords: [
    "IT Consulting",
    "IT Strategy",
    "Cybersecurity",
    "Cloud Solutions",
    "Business IT Services",
    "Digital Transformation",
  ],
}

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
            className={montserrat.className}
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
          <FormSection />
          <DetailsSection />
        </Grid>
      </Section>
      <ScaleComputingSectionSmall />
    </Main>
  )
}

export default React.memo(ContactUsPage)
