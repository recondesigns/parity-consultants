import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import solutions from "./solutions"
import solutionsImage7 from "../../../../../public/images/solutions-image-7.jpg"

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

const StyledAccordion = styled(Accordion)({}, ({ theme }) => ({}))

const StyledAccordionItem = styled(Item)({}, ({ theme }) => ({}))

export default function SolutionsSection() {
  return (
    <Section
      id="solutionsSection"
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

      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            paddingBottom: { xs: "20px", lg: "0px" },
            paddingRight: { lg: "20px" },
          }}
        >
          <Image
            src={solutionsImage7}
            alt="server room image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            paddingLeft: { lg: "20px" },
          }}
        >
          <Box>
            <StyledAccordion>
              {solutions.map((solution, idx) => {
                return (
                  <StyledAccordionItem
                    key={idx}
                    itemKey={idx}
                    header={
                      <Box sx={{ borderBottom: "2px solid #D95C5C" }}>
                        <Typography
                          variant="h6"
                          component="p"
                          fontFamily="inherit"
                          fontWeight="bold"
                          color="#333333"
                        >
                          {solution.title}
                        </Typography>
                      </Box>
                    }
                    initialEntered={idx === 0 ? true : false}
                    sx={{ padding: { xs: "8px 12px" } }}
                  >
                    <Box sx={{ paddingTop: "12px" }}>
                      <Typography
                        variant="body1"
                        component="p"
                        fontFamily="inherit"
                        color="#333333"
                      >
                        {solution.description}
                      </Typography>
                    </Box>
                  </StyledAccordionItem>
                )
              })}
            </StyledAccordion>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          paddingTop: { xs: "48px" },
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
              borderRadius: "50px",
            }}
          >
            Learn more
          </Button>
        </StyledLink>
      </Box>
    </Section>
  )
}
