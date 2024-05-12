import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

type Props = {}

export default function ScaleComputingSectionForm({}: Props) {
  return (
    <Box
      component="form"
      sx={{
        padding: "20px",
        background: "#FDFCFC",
        borderRadius: "20px",
        maxWidth: "380px",
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "inherit" }}>
        Get Started Today!
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "inherit" }} pb={"20px"}>
        Unlock exclusive offers and stay ahead of the curve with our tailored
        solutions.
      </Typography>
      <TextField
        id="nameInput"
        name="nameInput"
        label="Name"
        type="text"
        fullWidth
        sx={{ paddingBottom: "16px", fontFamily: "inherit" }}
      />
      <TextField
        id="emailInput"
        name="emailInput"
        label="Email"
        type="email"
        fullWidth
        sx={{ paddingBottom: "16px" }}
      />
      <TextField
        id="companyInput"
        name="companyInput"
        label="Company"
        type="text"
        fullWidth
        sx={{ paddingBottom: "16px" }}
      />
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ borderRadius: "50px", fontWeight: "bold", background: "#3634C6" }}
      >
        Send
      </Button>
    </Box>
  )
}
