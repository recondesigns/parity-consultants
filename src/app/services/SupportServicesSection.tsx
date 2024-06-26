"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../components/ui"
import servicesOneImage from "../../../public/images/solutions-image-1.jpg"

function SupportServicesSection() {
  return (
    <Section
      id="supportServicesSection"
      sx={{
        padding: {
          xs: "40px 20px 80px 20px",
          sm: "40px 40px 80px 40px",
          md: "40px 80px 80px 80px",
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
              Support
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "inherit",
                color: "#333333",
                textAlign: { xs: "left" },
                paddingBottom: { xs: "20px" },
                paddingRight: { md: "12px", lg: "80px" },
              }}
            >
              Experience seamless IT support with our comprehensive services.
              From PC sales and support to virus/spyware removal, preventative
              maintenance, and remote monitoring, we&apos;ve got you covered
              every step of the way.
            </Typography>
            <Box
              sx={{
                paddingBottom: { xs: "20px", md: "0px" },
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Button
                component={Link}
                href={"/#getSupportSection"}
                variant="outlined"
                size="large"
                sx={{
                  width: { xs: "100%", md: "initial" },
                  borderRadius: "50px",
                  textTransform: "none",
                }}
              >
                Get support
              </Button>
            </Box>
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

export default React.memo(SupportServicesSection)
