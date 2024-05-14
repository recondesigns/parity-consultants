import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Section } from "../../ui"
import ServicesSectionCard from "./ServicesSectionCard"
import services from "./services"

export default function ServicesSection() {
  return (
    <Section
      sx={{
        padding: "80px 80px",
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
          Key services
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          We are your one stop shop for all of your technology needs
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
    </Section>
  )
}
