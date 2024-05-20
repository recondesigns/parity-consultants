"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
  },
  ({}) => ({
    color: "#000000",
    "&:hover": {
      color: "gray",
    },
  })
)

export default function GetSupportSection() {
  return (
    <Section
      id="getSupportSection"
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "100px 40px",
          md: "100px 80px",
          lg: "120px 100px",
        },
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
          Expert Technical Support
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Get reliable assistance for your IT needs
        </Typography>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: {
              xs: "0px 0px 32px 0px",
              sm: "0px 12px 0px 12px",
              md: "0px 8px 0px 8px",
              lg: "0px 64px 0px 64px",
              xl: "0px 80px 0px 80px",
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="h3"
              fontFamily="inherit"
              fontWeight="bold"
              color="#333333"
              textAlign={{ xs: "center", md: "left" }}
              pb={{ xs: "8px" }}
            >
              Client portal
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontFamily="inherit"
              color="#333333"
              textAlign={{ xs: "center", md: "left" }}
              pb={{ xs: "8px", sm: "12px" }}
            >
              Authorized users can create new service tickets or monitor the
              status of existing tickets.
            </Typography>
          </Box>
          <Box>
            <StyledLink
              href={"https://parity.myportallogin.com/"}
              target="_blank"
            >
              <Button
                component="div"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", md: "auto" },
                  borderRadius: "50px",
                }}
              >
                Log in
              </Button>
            </StyledLink>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: {
              sm: "0px 12px 0px 12px",
              md: "0px 8px 0px 8px",
              lg: "0px 64px 0px 64px",
              xl: "0px 80px 0px 80px",
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="h3"
              fontFamily="inherit"
              fontWeight="bold"
              color="#333333"
              textAlign={{ xs: "center", md: "left" }}
              pb={{ xs: "8px" }}
            >
              Remote support
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontFamily="inherit"
              color="#333333"
              textAlign={{ xs: "center", md: "left" }}
              pb={{ xs: "8px", sm: "12px", md: "16px", lg: "20px" }}
            >
              When directed by a technician to enable remote assistance use the
              button below.
            </Typography>
          </Box>
          <Box>
            <StyledLink
              href={"https://parity256.screenconnect.com/"}
              target="_blank"
            >
              <Button
                component="div"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", md: "auto" },
                  borderRadius: "50px",
                }}
              >
                Allow access
              </Button>
            </StyledLink>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}
