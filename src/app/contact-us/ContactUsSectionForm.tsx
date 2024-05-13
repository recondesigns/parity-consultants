import React from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

function ContactFormSection() {
  const [nameInput, setNameInput] = React.useState("")
  const [emailInput, setEmailInput] = React.useState("")
  const [messageInput, setMessageInput] = React.useState("")
  const [isSending, setIsSending] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSending(true)

    axios
      .post(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/sendContactFormMessage"
          : "/api/sendEmail",
        {
          name: nameInput,
          email: emailInput,
          message: messageInput,
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
        background: "#FDFCFC",
        borderRadius: "20px",
        maxWidth: "380px",
      }}
      onSubmit={(e) => handleSubmit(e)}
    >
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
        id="messageInput"
        name="messageInput"
        label="Message"
        type="text"
        value={messageInput}
        fullWidth
        disabled={!isSent ? false : true}
        onChange={(e) => handleChange(e, setMessageInput)}
        sx={{ paddingBottom: "16px" }}
        multiline
        rows={8}
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
          background: !isSent ? "#3634C6" : "green",
          textTransform: "capitalize",
          "&:disabled": {
            color: isSent ? "#FDFCFC" : "#FDFCFC",
            background: isSent ? "green" : "initial",
          },
        }}
      >
        {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
      </Button>
    </Box>
  )
}

export default React.memo(ContactFormSection)
