"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ContactUsMap from "./ContactUsMap"

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

type Props = {}

export default function DetailsSection({}: Props) {
  return (
    <Grid item xs={12} lg={6}>
      <Box
        padding={{
          xs: "0px 20px 40px 20px",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          textAlign="center"
          fontWeight="bold"
          sx={{ color: "#333333", fontFamily: "inherit" }}
        >
          Hours of operation
        </Typography>
        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          pt="16px"
          sx={{ color: "#333333", fontFamily: "inherit" }}
        >
          We provide onsite and remote services Monday to Friday from 8:00 to
          5:00 (CST), excluding holidays.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          pt="16px"
          sx={{ color: "#333333", fontFamily: "inherit" }}
        >
          Weekend support is available at $150.00 per hour
        </Typography>
      </Box>

      <Box
        padding={{
          xs: "0px 20px 12px 20px",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          textAlign="center"
          fontWeight="bold"
          sx={{ color: "#333333", fontFamily: "inherit" }}
        >
          Contact details
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StyledLink
            href="mailto:sales@parity.us.com"
            aria-label="Email us"
            title="Email us"
            sx={{ px: { xs: "8px", sm: "0px" } }}
          >
            <Typography
              variant="body1"
              component="p"
              textAlign={{ xs: "center" }}
              pt="4px"
              sx={{
                fontFamily: "inherit",
                color: "#333333",
              }}
            >
              sales@parity.us.com
            </Typography>
          </StyledLink>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StyledLink
            href="tel:4692405090"
            aria-label="Call us"
            title="Call us"
            sx={{ display: "inline-block" }}
          >
            <Typography
              variant="body1"
              component="p"
              textAlign={{ xs: "center" }}
              pt="4px"
              sx={{
                fontFamily: "inherit",
                color: "#333333",
              }}
            >
              469-240-5083
            </Typography>
          </StyledLink>
        </Box>

        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          pt="16px"
          sx={{ color: "#333333", fontFamily: "inherit" }}
        >
          860 Hebron Parkway
        </Typography>
        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          pt="4px"
          sx={{ color: "#333333", fontFamily: "inherit" }}
        >
          #1203 Lewisville, TX 75057
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { sm: "0px 20px", md: "0px 80px", lg: "0px 20px" },
          width: "100%",
          height: { xs: "200px", md: "250px" },
        }}
      >
        <ContactUsMap />
      </Box>
    </Grid>
  )
}
