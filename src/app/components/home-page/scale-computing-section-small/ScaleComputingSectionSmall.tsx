import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { Section } from "../../ui"
import ScaleLogoNew from "../../../../../public/images/scale-computing-logo-new.png"

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

export default function ScaleComputingSectionSmall() {
  return (
    <Section
      sx={{
        padding: {
          xs: "0px 0px",
          md: "20px 40px",
          lg: "20px 80px",
        },
      }}
    >
      <Grid
        container
        sx={{
          padding: {
            xs: "32px 20px",
            sm: "32px 48px",
            md: "40px 20px 40px 56px",
          },
          background: "linear-gradient(45deg, #434343 0%, black 100%)",
          borderRadius: { xs: "0px", md: "20px" },
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            px: { xs: "20px" },
            order: { xs: 2, md: "initial" },
          }}
        >
          <Box sx={{ paddingBottom: "32px", paddingRight: { lg: "88px" } }}>
            <Typography
              variant="h4"
              component="h2"
              fontFamily="inherit"
              fontWeight="bold"
              color="#FDFCFC"
              textAlign={{ xs: "center", md: "left" }}
              pb="12px"
            >
              Live on the Edge
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontFamily="inherit"
              color="#FDFCFC"
              textAlign={{ xs: "center", md: "left" }}
            >
              We partner with leading manufacturers to offer best in class
              service and products
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <StyledLink href={"/scale-computing"}>
              <Button
                component="div"
                variant="contained"
                color="success"
                size="large"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Get signed up
              </Button>
            </StyledLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingBottom: "32px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={ScaleLogoNew} alt="Scale Computing logo" />
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}
