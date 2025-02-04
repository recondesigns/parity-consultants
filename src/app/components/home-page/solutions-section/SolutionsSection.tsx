'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { montserrat } from "../../../fonts"
import { styled } from "@mui/material/styles"
import SolutionsSectionAccordion from "./solutions-section-accordion/SolutionsSectionAccordion"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import solutions from "./solutions"
import solutionsImage7 from "../../../../../public/images/solutions-image-7.jpg"

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

export default function SolutionsSection() {
  return (
    <Section
      id="solutionsSection"
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "100px 40px",
          md: "100px 80px",
          lg: "120px 100px",
        },
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
          fontWeight="bold"
          color="#333333"
          textAlign={{ xs: "left", md: "center" }}
          className={montserrat.className}
        >
          Innovative IT Solutions
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign={{ xs: "left", md: "center" }}
          pt="8px"
        >
          Empowering your business with tailored technology expertise
        </Typography>
      </Box>

      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            paddingBottom: { xs: "20px", lg: "0px" },
            paddingRight: { lg: "20px" },
          }}
        >
          <Image
            src={solutionsImage7}
            alt="server room image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            paddingLeft: { lg: "20px" },
          }}
        >
          <Box>
            <SolutionsSectionAccordion list={solutions} />
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          paddingTop: { xs: "48px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledLink href={"/solutions"}>
          <Button
            component="div"
            variant="outlined"
            size="large"
            sx={{
              textTransform: "none",
              borderRadius: "50px",
            }}
          >
            Explore solutions
          </Button>
        </StyledLink>
      </Box>
    </Section>
  )
}
