import React from "react"
import Typography from "@mui/material/Typography"
import { Section } from "../ui"

export default function ServicesSection() {
  return (
    <Section>
      <div style={{ padding: "80px 0px" }}>
        <Typography
          variant="h3"
          component="h2"
          fontFamily="inherit"
          fontWeight="bold"
          color="#333333"
          textAlign="center"
        >
          Key services
        </Typography>
        <Typography
          variant="h5"
          component="p"
          fontFamily="inherit"
          color="#D95C5C"
          textAlign="center"
          pt="8px"
        >
          We are your one stop shop for all of your technology needs.
        </Typography>
      </div>
    </Section>
  )
}
