"use client"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import parityLogo from "../../public/parity-logo.png"

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={parityLogo} alt="Parity Consultants logo." />
        <Typography
          sx={{ paddingTop: "24px", color: "gray", fontFamily: "inherit" }}
        >
          Check back soon...
        </Typography>
      </section>
    </main>
  )
}
