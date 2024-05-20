import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Section } from "../../ui"
import ServicesSectionCard from "./ServicesSectionCard"
import services from "./services"

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

export default function ServicesSection() {
  return (
    <Section
      id="servicesSection"
      sx={{
        padding: "140px 80px",
        background: "linear-gradient(45deg, #434343 0%, black 100%)",
        px: { xs: "20px", md: "40px", lg: "80px" },
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "0px 0px 40px 0px",
            sm: "0px 0px 56px 0px",
            md: "0px 32px 56px 32px",
            lg: "0px 32px 72px 32px",
            xl: "0px 0px 72px 0px",
          },
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontFamily="inherit"
          fontWeight="bold"
          color="#fdfcfc"
          textAlign="center"
        >
          Services We Offer
          {/* Our Services */}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Your one-stop shop for comprehensive technology solutions
        </Typography>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        {services.map((service, idx) => {
          return (
            <Grid key={idx} item xs={12} md={6} lg={4}>
              <ServicesSectionCard service={service}></ServicesSectionCard>
            </Grid>
          )
        })}
      </Grid>
      <Box
        sx={{
          paddingTop: { xs: "20px", sm: "24px", md: "32px", lg: "48px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledLink href={"/services"}>
          <Button
            component="div"
            variant="outlined"
            size="large"
            sx={{
              color: "#FDFCFC",
              borderColor: "#FDFCFC",
              borderRadius: "50px",
              "&:hover": {
                background: "none",
                borderColor: "rgba(253,252,252, 0.4)",
              },
              textTransform: "none",
            }}
          >
            Explore services
          </Button>
        </StyledLink>
      </Box>
    </Section>
  )
}
