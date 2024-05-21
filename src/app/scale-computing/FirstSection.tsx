"use client"
import React from "react"
import Image from "next/image"
import { montserrat } from "../fonts"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import scaleImageOne from "../../../public/images/scale-image-1.jpg"

export default function FirstSection() {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "100px 40px",
          md: "100px 80px",
          lg: "120px 100px",
        },
      }}
    >
      <Typography
        variant="h5"
        component="p"
        fontFamily="inherit"
        color="#D95C5C"
        textAlign={{ xs: "left" }}
        paddingBottom={{ xs: "12px" }}
      >
        Unlock the Future of IT with Scale Computing{" "}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        color="#333333"
        textAlign={{ xs: "left" }}
        className={montserrat.className}
        paddingBottom={{ xs: "24px" }}
      >
        Revolutionary Infrastructure Simplification
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={12} md={8} lg={6}>
          <Typography
            variant="body1"
            component="p"
            color="#333333"
            textAlign={{ xs: "left" }}
            className={montserrat.className}
            paddingBottom={{ xs: "24px" }}
          >
            In today’s fast-paced digital landscape, your business needs an IT
            infrastructure that is not only reliable but also easy to manage and
            scalable. Scale Computing’s hyperconverged infrastructure (HCI)
            simplifies the complexity of traditional IT systems by integrating
            storage, servers, and virtualization into one seamless platform.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={6}
          sx={{
            padding: { xs: "20px", sm: "40px", md: "12px", lg: "40px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={scaleImageOne} alt="Consultant assisting client" />
        </Grid>
      </Grid>
      <Box>
        <Typography
          variant="body1"
          component="p"
          fontWeight="600"
          color="#333333"
          textAlign={{ xs: "left", md: "center" }}
          className={montserrat.className}
          paddingTop={{ xs: "20px", md: "40px" }}
          sx={{ paddingBottom: "20px" }}
        >
          Our expert consultants are here to help you transition smoothly,
          ensuring your business runs efficiently and stays ahead of the
          competition.
        </Typography>
        <Box sx={{ display: { md: "flex" }, justifyContent: { md: "center" } }}>
          <Button
            component="div"
            variant="outlined"
            size="large"
            sx={{
              width: { xs: "100%", sm: "auto" },
              borderRadius: "50px",
              "&:hover": {
                background: "none",
                borderColor: "rgba(253,252,252, 0.4)",
              },
              textTransform: "none",
            }}
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
