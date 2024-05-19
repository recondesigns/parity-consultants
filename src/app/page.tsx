"use client"
import Image from "next/image"
import Link from "next/link"
import { Main } from "./components/ui"
import { montserrat } from "./fonts"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import {
  ServicesSection,
  SocialProofSection,
  SolutionsSection,
  PartnersSection,
  ScaleComputingSectionSmall,
  HeroSection,
  GetSupportSection,
} from "./components/home-page/"
import { Hero } from "./components/shared"
import heroImage from "../../public/images/section-image-1.png"

const slotOneContent = () => (
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
        textAlign: { xs: "center", lg: "left" },
        color: "#FDFCFC",
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
        textAlign: { xs: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px", lg: "24px" },
      }}
    >
      Innovative IT solutions tailored for your success
    </Typography>
    <Typography
      variant="body1"
      fontFamily="inherit"
      sx={{
        width: "100%",
        textAlign: { xs: "center", lg: "left" },
        color: "#FDFCFC",
        paddingBottom: { xs: "40px" },
      }}
    >
      At Parity Consultants, we partner with businesses to deliver cutting-edge
      IT consulting services that drive growth, efficiency, and innovation. Our
      team of experts is dedicated to providing customized solutions that meet
      your unique needs and propel your business forward.
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
        flexDirection: { xs: "column", lg: "row" },
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
          // width: { xs: '100%' },
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
          }}
        >
          Services
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
          }}
        >
          Solutions
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
          }}
        >
          Services
        </Typography>
      </Button>
    </Box>
  </Box>
)

const slotTwoContent = () => (
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

export default function Home() {
  return (
    <Main>
      <Hero
        firstColumnSlot={slotOneContent()}
        secondColumnSlot={slotTwoContent()}
        bgColor="#333333"
      />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <SolutionsSection />
      <SocialProofSection />
      <GetSupportSection />
      <ScaleComputingSectionSmall />
    </Main>
  )
}
