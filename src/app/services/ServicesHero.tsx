"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Hero } from "../components/shared"
import { montserrat } from "../fonts"
import heroBackgroundImage from "../../../public/images/images/services-hero-background.png"

const SlotContentOne = () => (
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
      variant="h3"
      component="h1"
      className={montserrat.className}
      sx={{
        width: "100%",
        paddingBottom: { xs: "8px", lg: "20px" },
        fontWeight: 700,
        textAlign: { xs: "left", md: "center", lg: "left" },
        color: "#FDFCFC",
      }}
    >
      Complete IT services for business success
    </Typography>
    <Typography
      variant="h4"
      component="p"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "left", md: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px", lg: "24px" },
      }}
    >
      Empowerment with cutting-edge IT solutions
    </Typography>
    <Typography
      variant="body1"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "left", md: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px" },
      }}
    >
      At Parity Consultants, we provide a full range of IT services to boost
      your business&apos;s innovation, efficiency, and growth. Enhance your
      technology, secure your digital assets, and achieve your business goals
      with our tailored solutions.
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
        href={"/contact-us"}
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
          Contact us
        </Typography>
      </Button>
      {/* <Button
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
        </Button> */}
      {/* <Button
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
        </Button> */}
    </Box>
  </Box>
)

const StyledHero = styled(Hero)({}, ({ theme }) => ({}))

type Props = {}

export default function ServicesHero({}: Props) {
  return (
    <StyledHero
      firstColumnSlot={SlotContentOne()}
      bgImage={heroBackgroundImage.src}
      // bgImage="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
    />
  )
}
