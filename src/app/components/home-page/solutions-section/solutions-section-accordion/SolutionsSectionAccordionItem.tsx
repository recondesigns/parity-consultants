"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { AccordionItem } from "@szhsin/react-accordion"

const StyledAccordionItem = styled(AccordionItem)({}, ({}) => ({}))

type Props = {
  idx: any
  title: any
  description: any
}

export default function SolutionsSectionAccordionItem({
  idx,
  title,
  description,
}: Props) {
  return (
    <StyledAccordionItem
      key={idx}
      itemKey={idx}
      header={
        <Box sx={{ borderBottom: "2px solid #D95C5C" }}>
          <Typography
            variant="h6"
            component="h3"
            fontFamily="inherit"
            fontWeight="bold"
            color="#333333"
          >
            {title}
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
          {description}
        </Typography>
      </Box>
    </StyledAccordionItem>
  )
}
