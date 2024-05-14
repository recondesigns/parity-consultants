import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import solutions from "./solutions"

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

export default function SolutionsSection() {
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
          Our solutions
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          Your business will get the experience and knowledge needed to make you
          completely satisfied
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 4 }}
        justifyContent={{ xs: "center", lg: "start" }}
      >
        {solutions.map((solution, idx) => {
          return (
            <Grid key={idx} item xs={12} md={6} lg={4}>
              <Box sx={{ paddingBottom: { xs: "16px" } }}>
                <Image
                  src={solution.image}
                  width={100}
                  height={366}
                  style={{ width: "100%" }}
                  alt="Infrascturure and management image"
                />
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  component="h5"
                  color="#333333"
                  sx={{
                    paddingBottom: { xs: "8px" },
                    fontFamily: "inherit",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  {solution.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  color="#333333"
                  sx={{ fontFamily: "inherit" }}
                >
                  {solution.description}
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
      <Box
        sx={{
          paddingTop: { xs: "20px", sm: "24px", md: "32px", lg: "48px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledLink href={"/solutions"}>
          <Button
            component="div"
            variant="outlined"
            size="large"
            sx={{
              textTransform: "none",
            }}
          >
            Learn more
          </Button>
        </StyledLink>
      </Box>
    </Section>
  )
}
