"use client"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import Main from "./components/ui/main/Main"
import Section from "./components/ui/section/Section"
import parityLogo from "../../public/parity-logo.png"

export default function Home() {
  return (
    <Main>
      <Section>
        <Image src={parityLogo} alt="Parity Consultants logo." />
        <Typography sx={{ paddingTop: "24px", fontFamily: "inherit" }}>
          Check back soon...
        </Typography>
      </Section>
    </Main>
  )
}
