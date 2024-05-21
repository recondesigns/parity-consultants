"use client"
import React from "react"
import Image from "next/image"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../components/ui"
import servicesOneImage from "../../../public/images/solutions-image-1.jpg"

function InfrastructureServicesSection() {
  return (
    <Section
      id="infrastructureServicesSection"
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "40px 40px",
          md: "40px 80px",
          lg: "100px 100px 100px 100px",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingRight: { md: "20px", lg: "40px", xl: "80px" },
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                width: "100%",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "#333333",
                textAlign: { xs: "left" },
                paddingBottom: { xs: "12px" },
              }}
            >
              Infrastructure
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "inherit",
                color: "#333333",
                textAlign: { xs: "left" },
                paddingBottom: { xs: "20px", md: "0px" },
              }}
            >
              Revolutionize your IT infrastructure with our comprehensive
              services: seamless server and firewall installations, strategic
              network planning, cutting-edge hardware virtualization, and secure
              VPN configurations. Experience next-level efficiency and security
              today.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Image
            src={servicesOneImage}
            alt="Infrastructure image"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Section>
  )
}

export default React.memo(InfrastructureServicesSection)
