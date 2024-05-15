"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Section } from "../components/ui"

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
  },
  ({ theme }) => ({
    color: "#000000",
    "&:hover": {
      color: "gray",
    },
  })
)

type Props = {
  includeLearnMoreButton?: boolean
}
// linear-gradient(45deg, #FF2146, #FC711F)
// linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)
function HeroSection({ includeLearnMoreButton = false }: Props) {
  return (
    <Section
      sx={{ background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" }}
    >
      <Box
        sx={{
          padding: {
            xs: "80px 20px",
            sm: "100px 40px",
            md: "100px 80px",
            lg: "140px 100px",
          },
        }}
      >
        <Grid
          container
          sx={{
            px: { sm: "40px", md: "0px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingBottom: { xs: "32px", md: "0px" },
              px: { xs: "20px", md: "0px" },
            }}
          >
            <Box
              sx={{
                height: { md: "100%" },
                display: { sm: "flex" },
                flexDirection: { sm: "column" },
                justifyContent: { sm: "center" },
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                fontFamily="inherit"
                fontWeight="bold"
                color="#333333"
                textAlign={{ xs: "center", md: "left" }}
                sx={{ paddingBottom: { xs: "8px" } }}
              >
                Empower Your Business with Seamless IT Solutions
              </Typography>
              <Typography
                variant="h6"
                component="p"
                fontFamily="inherit"
                color="#333333"
                textAlign={{ xs: "center", md: "left" }}
                sx={{ paddingBottom: { xs: "40px", md: "20px" } }}
              >
                Unleash the Power of Technology with Our Expertise!
              </Typography>
              <Typography
                variant="body1"
                fontFamily="inherit"
                color="#333333"
                textAlign={{ xs: "center", md: "left" }}
                sx={{ paddingBottom: { xs: "40px" } }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis
              </Typography>
              {includeLearnMoreButton && (
                <Box
                  sx={{
                    paddingTop: {
                      xs: "0px",
                    },
                    paddingBottom: {
                      xs: "20px",
                    },
                    display: "flex",

                    justifyContent: { xs: "center", md: "start" },
                  }}
                >
                  <StyledLink href={"#infrastructureServicesSection"}>
                    <Button
                      component="div"
                      variant="outlined"
                      size="large"
                      sx={{
                        color: "#333333",
                        borderColor: "#333333",
                        borderRadius: "50px",
                        "&:hover": {
                          background: "none",
                          borderColor: "rgba(51,51,51, 0.4)",
                        },
                        textTransform: "none",
                      }}
                    >
                      Learn more
                    </Button>
                  </StyledLink>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingLeft: { md: "12px", lg: "0px" },
            }}
          >
            <Box
              sx={{
                height: { md: "100%" },
                display: { xs: "flex" },
                justifyContent: { xs: "center" },
                alignItems: { sm: "start", md: "center" },
              }}
            >
              <h1>Other side</h1>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}

export default React.memo(HeroSection)
