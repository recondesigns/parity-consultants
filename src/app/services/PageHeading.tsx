import React from "react"
import { montserrat } from "../fonts"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function PageHeading() {
  return (
    <Box
      component="section"
      id="solutionsSection"
      sx={{
        padding: {
          xs: "64px 20px",
          sm: "64px 40px",
          md: "64px 80px",
          lg: "80px 100px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          className={montserrat.className}
          fontWeight="bold"
          color="#333333"
          textAlign={{ xs: "left", md: "center" }}
        >
          Expert Services
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign={{ xs: "left", md: "center" }}
          pt="8px"
        >
          Tailored technology solutions for optimal performance and growth
        </Typography>
      </Box>
    </Box>
  )
}

export default React.memo(PageHeading)
