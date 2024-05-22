"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { montserrat } from "../fonts"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import leftAlignedSectionImage1 from "../../../public/images/images/scale-page-left-section-1.jpg"

const StyledLink = styled(Link)({}, ({}) => ({}))

export default function LeftAlignedSection() {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "80px 40px",
          md: "80px 80px",
          lg: "80px 0px",
        },
        width: "100%",
      }}
    >
      <Grid container sx={{ padding: { lg: "0px 0px 0px 80px" } }}>
        <Grid item xs={12} lg={7} paddingBottom={{ xs: "24px", sm: "0px" }}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            color="#333333"
            textAlign={{ xs: "left", md: "center", lg: "left" }}
            className={montserrat.className}
            paddingBottom={{ xs: "12px" }}
          >
            Innovative IT Simplification
          </Typography>
          <Typography
            variant="h5"
            component="p"
            fontFamily="inherit"
            color="#D95C5C"
            textAlign={{ xs: "left", md: "center", lg: "left" }}
            paddingBottom={{ xs: "24px" }}
          >
            Unlock the Future of IT with Scale Computing
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontFamily="inherit"
            color="#333333"
            textAlign={{ xs: "left", md: "center", lg: "left" }}
            paddingBottom={{ xs: "24px" }}
          >
            Scale Computing’s hyperconverged infrastructure (HCI) simplifies IT
            by integrating storage, servers, and virtualization into one
            seamless platform, offering streamlined operations and reduced
            costs. Our expert consultants ensure a smooth transition, keeping
            your business efficient and competitive.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "center", lg: "flex-start" },
            }}
          >
            <StyledLink href="./scale-computing#scaleComputingHeroSection">
              <Button
                variant="outlined"
                component="div"
                sx={{
                  width: { xs: "100%", md: "auto" },
                  textTransform: "none",
                  borderRadius: "50px",
                }}
                size="large"
              >
                Contact us
              </Button>
            </StyledLink>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          display="flex"
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          sx={{
            padding: { sm: "40px", md: "80px", lg: "0px" },
          }}
        >
          <Box
            sx={{
              borderRadius: { xs: "20px" },
              borderTopRightRadius: { lg: "0px" },
              borderBottomRightRadius: { lg: "0px" },
              overflow: "hidden",
            }}
          >
            <Image
              src={leftAlignedSectionImage1}
              height={700}
              alt="Computer hardware"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
