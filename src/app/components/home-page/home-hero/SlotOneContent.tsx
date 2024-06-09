'use client'
import React from 'react'
import Link from "next/link"
// import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { montserrat } from '../../../fonts'

export default function SlotOneContent() {
  return (
    <Box
      sx={{
        height: { lg: "100%" },
        py: { sm: "20px", md: "40px" },
        px: { sm: "20px", md: "40px", lg: "0px" },
        display: { lg: "flex" },
        flexDirection: { lg: "column" },
        justifyContent: { lg: "center" },
        alignItems: { lg: "center" },
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        className={montserrat.className}
        sx={{
          width: "100%",
          paddingBottom: { xs: "12px", lg: "20px" },
          fontWeight: 700,
          textAlign: { xs: "left" },
          color: "#FDFCFC",
          fontSize: { xs: "3rem", md: "3.5rem" },
        }}
      >
        Premier Managed IT Services
      </Typography>
      <Typography
        variant="h4"
        component="p"
        fontFamily="inherit"
        sx={{
          width: "100%",
          textAlign: { xs: "left" },
          color: "#FDFCFC",
          paddingBottom: { xs: "40px", lg: "24px" },
          fontSize: { xs: "1.75rem", md: "2rem" },
        }}
      >
        Empowering your business with reliable IT solutions and support
      </Typography>
      <Typography
        variant="body1"
        component="p"
        fontFamily="inherit"
        sx={{
          width: "100%",
          textAlign: { xs: "left" },
          color: "#FDFCFC",
          paddingBottom: { xs: "40px" },
          fontSize: { xs: "1rem", md: "1.125rem" },
        }}
      >
        Our expert IT consultants provide top-notch managed IT services tailored
        to businesses. Ensure your technology infrastructure is robust, secure,
        and optimized for peak performance. Contact us today to discover how our
        services can transform your business!
      </Typography>
      <Box
        sx={{
          width: "100%",
          paddingTop: {},
          paddingBottom: {
            xs: "40px",
            lg: "0px",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", lg: "flex-start" },
          alignItems: { xs: "center" },
          gap: { xs: "20px" },
        }}
      >
        <Button
          component={Link}
          variant="outlined"
          size="large"
          href={"/#servicesSection"}
          sx={{
            width: { xs: "100%", lg: "auto" },
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
          <Typography
            variant="body1"
            component="p"
            fontFamily="inherit"
            sx={{
              textAlign: "center",
              color: "#FDFCFC",
              width: { xs: "100%", lg: "auto" },
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Our services
          </Typography>
        </Button>
        <Button
          component={Link}
          variant="outlined"
          size="large"
          href={"/#solutionsSection"}
          sx={{
            width: { xs: "100%", lg: "auto" },
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
          <Typography
            variant="body1"
            component="p"
            fontFamily="inherit"
            sx={{
              textAlign: "center",
              width: { xs: "100%", lg: "auto" },
              color: "#FDFCFC",
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Our solutions
          </Typography>
        </Button>
        <Button
          component={Link}
          variant="outlined"
          size="large"
          href={"/#getSupportSection"}
          sx={{
            width: { xs: "100%", lg: "auto" },
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
          <Typography
            variant="body1"
            component="p"
            fontFamily="inherit"
            sx={{
              textAlign: "center",
              width: { xs: "100%", lg: "auto" },
              color: "#FDFCFC",
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Get support
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}