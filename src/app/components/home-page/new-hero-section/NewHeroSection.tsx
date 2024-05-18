import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Section } from "../../ui"
import sectionImage from "../../../../../public/images/section-image-1.png"
import circleAccent from "../../../../../public/images/accents/section-accent-broken-circles.png"
import dotGridAccent from "../../../../../public/images/accents/section-accent-dot-grid.png"

type Props = {}

function NewHeroSection({}: Props) {
  return (
    <Section
      sx={{
        position: "relative",
        padding: {
          xs: "64px 20px",
          md: "80px 64px",
          lg: "100px 80px",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-500px",
          right: "-500px",
          zIndex: -10,
        }}
      >
        <Image src={circleAccent} alt={"background broken circle accent"} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "-350px",
          left: "-220px",
          zIndex: -10,
        }}
      >
        <Image src={dotGridAccent} alt={"background dot grid accent"} />
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              paddingBottom: { xs: "32px", lg: "24px" },
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            Elevate server experiences with Parity
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontFamily: "inherit",
              color: "#333333",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lectus dignissim tellus
            metus est facilisis imperdiet. Ultrices vel morbi morbi pretium nec
            massa eu. Risus phasellus maecenas tempor ullamcorper vitae erat
            bibendum convallis at. Rhoncus felis.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "12px" },
              paddingTop: { xs: "32px" },
            }}
          >
            <Button
              size="large"
              variant="outlined"
              component={Link}
              href="#servicesSection"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
              }}
            >
              Services
            </Button>
            <Button
              size="large"
              variant="outlined"
              component={Link}
              href="#solutionsSection"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
              }}
            >
              Solutions
            </Button>
            <Button
              size="large"
              variant="outlined"
              component={Link}
              href="#getSupportSection"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
              }}
            >
              Support
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "end" },
            paddingTop: { xs: "32px", sm: "40px" },
          }}
        >
          <Image src={sectionImage} alt="section image" />
        </Grid>
      </Grid>
    </Section>
  )
}

export default NewHeroSection
