"use client"
import React from "react"
import { Hero } from "../../components/shared"
import SlotContentOne from "./SlotContentOne"
import heroBackgroundImage from "../../../../public/images/images/solutions-hero-background.png"

export default function SolutionsHero() {
  return (
    <Hero
      bgImage={heroBackgroundImage.src}
      // bgColor="linear-gradient(to right, #0083b0, #00b4db)"
      firstColumnSlot={SlotContentOne()}
    />
  )
}
