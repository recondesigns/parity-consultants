"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../components/ui"
import servicesTwoImage from "../../../public/images/solutions-image-4.jpg"

function ConsultingServicesSection() {
  return (
    <Section
      id="consultingServicesSection"
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
              variant="h3"
              component="h3"
              sx={{
                width: "100%",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "#333333",
                textAlign: { xs: "center", md: "left" },
                paddingBottom: { xs: "12px" },
              }}
            >
              Consulting
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "inherit",
                color: "#333333",
                textAlign: { xs: "center", md: "left" },
                paddingBottom: { xs: "20px" },
              }}
            >
              Maximize your IT efficiency with comprehensive services including
              IT research and budgeting, security audits, network planning,
              hardware recommendations, and VPN configuration.
            </Typography>
            <Box
              sx={{
                paddingBottom: { xs: "40px" },
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Button
                component={Link}
                href={"/contact-us"}
                variant="outlined"
                size="large"
                sx={{
                  width: { xs: "100%", md: "initial" },
                  borderRadius: "50px",
                  textTransform: "none",
                }}
              >
                Contact us
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default React.memo(ConsultingServicesSection)
