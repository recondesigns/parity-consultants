'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { montserrat } from "../../../fonts"
import heroImage from "../../../../../public/images/section-image-1.png"

import { Hero } from "../../shared"

function SlotContentOne() {
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
        Empowering your digital growth
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
        Innovative IT solutions tailored for your success
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
        At Parity Consultants, we partner with businesses to deliver
        cutting-edge IT consulting services that drive growth, efficiency, and
        innovation. Our team of experts is dedicated to providing customized
        solutions that meet your unique needs and propel your business forward.
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

function SlotContentTwo() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={heroImage} height={400} alt="Temporary image" />
    </Box>
  )
}

type Props = {}

export default function HomeHero({}: Props) {
  return (
    <Hero
      firstColumnSlot={SlotContentOne()}
      secondColumnSlot={SlotContentTwo()}
      bgColor="#333333"
    />
  )
}
