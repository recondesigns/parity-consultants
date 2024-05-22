"use client"
import React from "react"
import Image from "next/image"
import { useFocus } from "../context/FocusContext"
import { montserrat } from "../fonts"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import leftAlignedSectionImage1 from "../../../public/images/images/scale-page-left-section-1.jpg"

export default function LeftAlignedSection() {
  const nameInputRef = useFocus()

  const handleClick = () => {
    // @ts-expect-error
    if (nameInputRef.current) {
      // @ts-expect-error
      nameInputRef.current.focus()
    }
  }

  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "40px 40px 0px 40px",
          md: "64px 80px 0px 80px",
          lg: "80px 0px",
        },
        width: "100%",
      }}
    >
      <Grid container sx={{ padding: { lg: "0px 0px 0px 80px" } }}>
        <Grid
          item
          xs={12}
          lg={7}
          paddingRight={{ lg: "40px" }}
          paddingBottom={{ xs: "24px", sm: "0px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { lg: "flex-start" },
            justifyContent: { lg: "center" },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            color="#333333"
            textAlign={{ xs: "left", md: "center", lg: "left" }}
            className={montserrat.className}
            paddingBottom={{ xs: "12px" }}
          >
            Innovative IT Simplification
          </Typography>
          <Typography
            variant="h5"
            component="p"
            fontFamily="inherit"
            color="#D95C5C"
            textAlign={{ xs: "left", md: "center", lg: "left" }}
            paddingBottom={{ xs: "24px" }}
          >
            Unlock the Future of IT with Scale Computing
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontFamily="inherit"
            color="#333333"
            textAlign={{ xs: "left", md: "center", lg: "left" }}
            paddingBottom={{ xs: "24px" }}
          >
            Scale Computing&apos;s hyperconverged infrastructure (HCI)
            simplifies IT by integrating storage, servers, and virtualization
            into one seamless platform, offering streamlined operations and
            reduced costs. Our expert consultants ensure a smooth transition,
            keeping your business efficient and competitive.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "flex-start",
                md: "center",
                lg: "flex-start",
              },
            }}
          >
            <Button
              variant="outlined"
              // component="div"
              onClick={handleClick}
              sx={{
                width: { xs: "100%", sm: "auto" },
                textTransform: "none",
                borderRadius: "50px",
              }}
              size="large"
            >
              Get started
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          display="flex"
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          sx={{
            padding: { sm: "40px", md: "80px", lg: "0px" },
          }}
        >
          <Box
            sx={{
              borderRadius: { xs: "20px" },
              borderTopRightRadius: { lg: "0px" },
              borderBottomRightRadius: { lg: "0px" },
              overflow: "hidden",
            }}
          >
            <Image
              src={leftAlignedSectionImage1}
              height={700}
              alt="Computer hardware"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
