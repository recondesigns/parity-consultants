"use client"
import React from "react"
import Image from "next/image"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../components/ui"
import servicesOneImage from "../../../public/images/solutions-image-1.jpg"

function DataProtectionServicesSection() {
  return (
    <Section
      id="dataProtectionServicesSection"
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
              component="h4"
              sx={{
                width: "100%",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "#333333",
                textAlign: { xs: "center", md: "left" },
                paddingBottom: { xs: "12px" },
              }}
            >
              Data protection
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "inherit",
                color: "#333333",
                textAlign: { xs: "center", md: "left" },
                paddingBottom: { xs: "20px" },
              }}
            >
              Ensure peace of mind with our comprehensive IT services, including
              on/off-site backups, security audits, VPN configuration, firewall
              installations, and remote monitoring. Keep your systems secure and
              optimized effortlessly with our expert solutions.
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

export default React.memo(DataProtectionServicesSection)