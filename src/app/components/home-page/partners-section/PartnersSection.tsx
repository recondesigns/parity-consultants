"use client"
import React from "react"
import { montserrat } from "../../../fonts"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import InfinitePartnerLogos from "./InfinitePartnerLogos"
import partners from "./partners"

function PartnersSection() {
  return (
    <Section
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
          fontFamily="inherit"
          fontWeight="bold"
          color="#333333"
          textAlign={{ xs: "left", md: "center" }}
          sx={{ color: "#333333" }}
          className={montserrat.className}
        >
          Our Partners
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign={{ xs: "left", md: "center" }}
          pt="8px"
        >
          We partner with leading manufacturers to offer best in class service
          and products
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { md: "0px 80px 0px 80px" },
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "100%",
        }}
      >
        <InfinitePartnerLogos items={partners} />
      </Box>
    </Section>
  )
}

export default React.memo(PartnersSection)
