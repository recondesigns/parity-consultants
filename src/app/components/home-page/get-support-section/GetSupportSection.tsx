import React from "react"
import Link from "next/link"
// import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"

type Props = {}

export default function GetSupportSection({}: Props) {
  return (
    <Section
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
          Get support
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Reach out to us for technical inquiries
        </Typography>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: {
              xs: "0px 0px 40px 0px",
              sm: "0px 12px 0px 12px",
              md: "0px 8px 0px 8px",
              lg: "0px 40px 0px 40px",
              xl: "0px 80px 0px 80px",
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="h6"
              fontFamily="inherit"
              fontWeight="bold"
              color="#333333"
              pb={{ xs: "8px" }}
            >
              Remote assistance
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontFamily="inherit"
              color="#333333"
              pb={{ xs: "8px" }}
            >
              When directed by a technician to enable remote assistance use the
              button below.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                width: { xs: "100%", md: "auto" },
                borderRadius: "50px",
              }}
            >
              Allow access
            </Button>
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
              lg: "0px 40px 0px 40px",
              xl: "0px 80px 0px 80px",
            },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="h6"
              fontFamily="inherit"
              fontWeight="bold"
              color="#333333"
              pb={{ xs: "8px" }}
            >
              Client portal
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontFamily="inherit"
              color="#333333"
              pb={{ xs: "8px" }}
            >
              Authorized users can create new service tickets or monitor the
              status of existing tickets.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                width: { xs: "100%", md: "auto" },
                borderRadius: "50px",
              }}
            >
              Access portal
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}
