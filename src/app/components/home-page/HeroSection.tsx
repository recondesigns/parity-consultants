import React from "react"
import { Parallax } from "react-parallax"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import ScaleComputingSectionForm from "./scale-computing-section/ScaleComputingSectionForm"
import Typography from "@mui/material/Typography"
import { Section } from "../ui"
import networkingImage from "../../../../public/images/blue-networking-1000.jpg"

export default function HeroSection() {
  return (
    <Section>
      <Parallax
        bgImage={`${networkingImage.src}`}
        bgImageAlt="networking servers"
        strength={400}
        blur={{ min: -15, max: 20 }}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            padding: {
              xs: "80px 20px",
              sm: "100px 40px",
              md: "100px 80px",
              lg: "120px 100px",
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

                paddingRight: { md: "12px", lg: "0px" },
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
                  variant="h3"
                  component="h2"
                  fontFamily="inherit"
                  fontWeight="bold"
                  color="#FDFCFC"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Scale Computing
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  fontFamily="inherit"
                  color="#FDFCFC"
                  textAlign={{ xs: "center", md: "left" }}
                  pt={{ xs: "8px", md: "0px" }}
                >
                  Get the latest in Edge computing
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="inherit"
                  color="#FDFCFC"
                  textAlign={{ xs: "center", md: "left" }}
                  pt="20px"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </Typography>
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
                <ScaleComputingSectionForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
    </Section>
  )
}
