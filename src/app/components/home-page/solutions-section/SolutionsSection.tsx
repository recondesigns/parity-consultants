import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"

export default function SolutionsSection() {
  return (
    <Section
      sx={{
        padding: "80px 80px",
        px: { xs: "20px", md: "40px", lg: "80px" },
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
          textAlign="center"
        >
          Our services
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Your business will get the experience and knowledge needed to make you
          completely satisfied
        </Typography>
      </Box>
    </Section>
  )
}
