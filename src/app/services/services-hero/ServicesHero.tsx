"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import { Hero } from "../../components/shared"
import SlotContentOne from "./SlotContentOne"
import heroBackgroundImage from "../../../../public/images/images/services-hero-background.png"

const StyledHero = styled(Hero)({}, ({ theme }) => ({}))

export default function ServicesHero() {
  return (
    <StyledHero
      firstColumnSlot={SlotContentOne()}
      bgImage={heroBackgroundImage.src}
      // bgImage="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
    />
  )
}
