"use client"
import React from "react"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../ui"
import partners from "./partners"

type Props = {}

export default function PartnersSection({}: Props) {
  return (
    <Section
      sx={{
        padding: {
          xs: "80px 20px",
          sm: "100px 40px",
          md: "100px 80px",
          lg: "120px 100px",
        },
        px: { xs: "20px", md: "40px", lg: "80px" },
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
          Our partners
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          We partner with leading manufacturers to offer best in class service
          and products
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { md: "0px 80px 0px 80px" },
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {partners.map((partner, idx) => {
          console.log(partner.image)
          return (
            <a href={partner.url} target="_blank" key={idx}>
              <Image
                src={partner.image.src}
                alt={partner.name}
                width={100}
                height={100}
              />
            </a>
          )
        })}
      </Box>
    </Section>
  )
}
