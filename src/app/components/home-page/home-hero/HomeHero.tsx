"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import { Hero } from "../../shared"
import SlotOneContent from "./SlotOneContent"
import homeHeroBackground from "../../../../../public/images/images/home-hero-background.png"

const StyledHero = styled(Hero)({}, ({ theme }) => ({}))

type Props = {}

export default function HomeHero({}: Props) {
  return (
    <StyledHero
      firstColumnSlot={SlotOneContent()}
      bgImage={homeHeroBackground.src}
    />
  )
}
