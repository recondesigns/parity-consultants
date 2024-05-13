import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import SolutionsSectionCard from "./SolutionsSectionCard"
import solutions from "./solutions"

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
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {solutions.map((solution, idx) => {
          return (
            <Grid key={idx} item xs={12} md={6} lg={4}>
              <SolutionsSectionCard solution={solution} />
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
