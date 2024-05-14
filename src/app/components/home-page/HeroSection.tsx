"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import ScaleComputingSectionForm from "./scale-computing-section/ScaleComputingSectionForm"
import Typography from "@mui/material/Typography"
import { Section } from "../ui"

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
  },
  ({ theme }) => ({
    color: "#000000",
    "&:hover": {
      color: "gray",
    },
  })
)

type Props = {
  includeLearnMoreButton?: boolean
}

export default function HeroSection({ includeLearnMoreButton = false }: Props) {
  return (
    <Section sx={{ background: "linear-gradient(45deg, #ff512f, #f09819)" }}>
      <Box
        sx={{
          padding: {
            xs: "80px 20px",
            sm: "100px 40px",
            md: "100px 80px",
            lg: "120px 100px",
          },
        }}
      >
        <Grid
          container
          sx={{
            px: { sm: "40px", md: "0px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingBottom: { xs: "32px", md: "0px" },
              px: { xs: "20px", md: "0px" },
              // border: "2px solid green",
            }}
          >
            <Box
              sx={{
                height: { md: "100%" },
                display: { sm: "flex" },
                flexDirection: { sm: "column" },
                justifyContent: { sm: "center" },
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                fontFamily="inherit"
                fontWeight="bold"
                color="#FDFCFC"
                textAlign={{ xs: "center", md: "left" }}
              >
                Scale Computing
              </Typography>
              <Typography
                variant="h6"
                component="p"
                fontFamily="inherit"
                color="#FDFCFC"
                textAlign={{ xs: "center", md: "left" }}
                pt={{ xs: "8px", md: "0px" }}
              >
                Get the latest in Edge computing
              </Typography>
              <Typography
                variant="body1"
                fontFamily="inherit"
                color="#FDFCFC"
                textAlign={{ xs: "center", md: "left" }}
                pt="20px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis
              </Typography>
              {includeLearnMoreButton && (
                <Box
                  sx={{
                    paddingTop: {
                      xs: "20px",
                      sm: "24px",
                      // md: "32px",
                      // lg: "48px",
                    },
                    display: "flex",

                    justifyContent: { xs: "center", md: "start" },
                    // border: "2px solid blue",
                  }}
                >
                  <StyledLink href={"/scale-computing"}>
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
                      Learn more
                    </Button>
                  </StyledLink>
                </Box>
              )}

              {/* <Box sx={{ border: "2px solid blue" }}>
                <Button variant="outlined">Learn more</Button>
              </Box> */}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingLeft: { md: "12px", lg: "0px" },
            }}
          >
            <Box
              sx={{
                height: { md: "100%" },
                display: { xs: "flex" },
                justifyContent: { xs: "center" },
                alignItems: { sm: "start", md: "center" },
              }}
            >
              <ScaleComputingSectionForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}
