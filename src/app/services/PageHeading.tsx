import React from "react"
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
        // border: "2px solid red",
      }}
    >
      <Box
        sx={{
        //   padding: {
        //     xs: "0px 0px 0px 0px",
        //     sm: "0px 0px 0px 0px",
        //     md: "0px 0px 0px 0px",
        //     lg: "0px 0px 0px 0px",
        //     xl: "0px 0px 0px 0px",
        //   },
          width: "100%",
        //   border: '2px solid blue'
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
          Expert Services
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Tailored technology solutions for optimal performance and growth
        </Typography>
      </Box>
    </Box>
  )
}

export default React.memo(PageHeading)
