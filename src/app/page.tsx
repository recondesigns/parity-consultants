"use client"
import Image from "next/image"
import parityLogo from "../../public/parity-logo.png"

export default function Home() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
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
        <p style={{ paddingTop: "24px" }}>Check back soon...</p>
      </section>
    </main>
  )
}
