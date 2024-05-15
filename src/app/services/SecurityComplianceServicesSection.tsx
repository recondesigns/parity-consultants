"use client"
import React from "react"
import Image from "next/image"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../components/ui"
import servicesTwoImage from "../../../public/images/solutions-image-4.jpg"

function SecurityComplianceServicesSection() {
  return (
    <Section
      id="securityComplianceServicesSection"
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
        <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: "initial" } }}>
          <Image
            src={servicesTwoImage}
            alt="Infrastructure image"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: { md: "20px", lg: "40px", xl: "80px" },
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
              Security & compliance
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
              Our comprehensive IT services encompass security audits, remote
              monitoring, virus/spyware removal, hardware recommendations, and
              preventative maintenance, ensuring your systems stay secure,
              optimized, and running smoothly at all times.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default React.memo(SecurityComplianceServicesSection)