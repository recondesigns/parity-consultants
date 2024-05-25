"use client"
import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ContactUsSectionForm from "./ContactUsSectionForm"

export default function FormSection() {
  return (
    <Grid item xs={12} lg={6} sx={{ padding: { xs: "0px 0px" } }}>
      <Box>
        <Box
          sx={{
            px: { sm: "80px", md: "172px", lg: "60px", xl: "156px" },
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            textAlign={{ xs: "left", sm: "center" }}
            fontWeight="bold"
            sx={{ color: "#333333", fontFamily: "inherit" }}
          >
            Send us a message
          </Typography>
          <Typography
            variant="body2"
            component="p"
            textAlign={{ xs: "left", sm: "center" }}
            pt="16px"
            sx={{ color: "#333333", fontFamily: "inherit" }}
          >
            If you&apos;d like to opt out of future communications, please send
            us a message or email.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "20px 0px 48px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactUsSectionForm />
        </Box>
      </Box>
    </Grid>
  )
}
