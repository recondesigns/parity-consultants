"use client"
import Typography from "@mui/material/Typography"

export default function SolutionsPage() {
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
        <Typography
          variant="h2"
          sx={{ paddingTop: "24px", fontFamily: "inherit" }}
        >
          Our solutions
        </Typography>
        <Typography sx={{ paddingTop: "24px", fontFamily: "inherit" }}>
          Check back soon...
        </Typography>
      </section>
    </main>
  )
}
