import React from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

function ScaleComputingSectionForm() {
  const [nameInput, setNameInput] = React.useState("")
  const [emailInput, setEmailInput] = React.useState("")
  const [companyInput, setCompanyInput] = React.useState("")
  const [detailsInput, setDetailsInput] = React.useState("")
  const [isSending, setIsSending] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSending(true)

    axios
      .post(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/sendEmail"
          : "/api/sendEmail",
        {
          name: nameInput,
          email: emailInput,
          company: companyInput,
          details: detailsInput
        }
      )
      .then(() => {
        // console.log(result.data)
        setIsSending(false)
        setIsSent(true)
      })
  }

  const handleChange = (e: any, setter: any) => {
    setter(e.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        padding: "20px",
        background: "#FDFCFC",
        borderRadius: "20px",
        maxWidth: "380px",
      }}
      onSubmit={(e) => handleSubmit(e)}
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
        value={nameInput}
        fullWidth
        disabled={!isSent ? false : true}
        onChange={(e) => handleChange(e, setNameInput)}
        sx={{ paddingBottom: "16px", fontFamily: "inherit" }}
      />
      <TextField
        id="emailInput"
        name="emailInput"
        label="Email"
        type="email"
        value={emailInput}
        fullWidth
        disabled={!isSent ? false : true}
        onChange={(e) => handleChange(e, setEmailInput)}
        sx={{ paddingBottom: "16px" }}
      />
      <TextField
        id="companyInput"
        name="companyInput"
        label="Company"
        type="text"
        value={companyInput}
        fullWidth
        disabled={!isSent ? false : true}
        onChange={(e) => handleChange(e, setCompanyInput)}
        sx={{ paddingBottom: "16px" }}
      />
      <TextField
        id="detailsInput"
        name="detailsInput"
        label="Details"
        type="text"
        value={detailsInput}
        fullWidth
        disabled={!isSent ? false : true}
        onChange={(e) => handleChange(e, setDetailsInput)}
        sx={{ paddingBottom: "16px" }}
      />
      <Button
        variant="contained"
        size="large"
        fullWidth
        type="submit"
        disabled={isSent ? true : false}
        sx={{
          borderRadius: "50px",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
      </Button>
    </Box>
  )
}

export default React.memo(ScaleComputingSectionForm)
