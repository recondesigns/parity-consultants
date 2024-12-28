'use client'
import React from "react"
import axios from "axios"
import { Formik } from "formik"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

const optionsList = [
  {
    label: "Feedback",
    value: "feedback",
  },
  {
    label: "General inquiry",
    value: "general inquiry",
  },
  {
    label: "Other",
    value: "other",
  },
]

const validateFunc = (values: any) => {
  const errors = {}

  if (!values.email) {
    // @ts-expect-error
    errors.email = "An email is required."
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    // @ts-expect-error
    errors.email = "Please enter a valid email address."
  }

  if (!values.name) {
    // @ts-expect-error
    errors.name = "Please enter a name."
  }

  if (!values.company) {
    // @ts-expect-error
    errors.company = `Please enter your company's name.`
  }

  if (!values.message) {
    // @ts-expect-error
    errors.message = `Please tell us what you'd like us to hear.`
  }

  return errors
}

function ContactFormSection() {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: "",
        subject: "",
        message: "",
      }}
      validateOnChange={false}
      validate={validateFunc}
      onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
        const errors = validateFunc(values)
        setStatus({ isSending: true, success: false })

        if (Object.keys(errors).length === 0) {
          setSubmitting(true)

          axios
            .post(
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/api/sendContactFormMessage"
                : "/api/sendContactFormMessage",
              {
                name: values.name,
                email: values.email,
                company: values.company,
                subject: values.subject,
                message: values.message,
              }
            )
            .then(() => {
              // console.log(result.data)
              setStatus({ isSending: false, success: true })
              setSubmitting(false)
              resetForm()
            })
            .catch((error) => {
              console.log("Error sending email:", error)
              setStatus({ isSending: false, success: false })
              setSubmitting(false)
            })
        } else {
          console.log(errors)
          console.error("Form has validation errors")
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        status,
      }) => {
        return (
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            noValidate
            sx={{
              py: { xs: "20px" },
              px: { xs: "0px" },
              background: "#FDFCFC",
              borderRadius: "20px",
              maxWidth: "380px",
            }}
          >
            <TextField
              id="nameInput"
              name="name"
              label="Name"
              type="text"
              value={values.name}
              fullWidth
              required
              error={touched.name && errors.name ? true : false}
              helperText={touched.name && errors.name && `${errors.name}`}
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ paddingBottom: "16px", fontFamily: "inherit" }}
            />
            <TextField
              id="emailInput"
              name="email"
              label="Email"
              type="email"
              required
              value={values.email}
              error={touched.email && errors.email ? true : false}
              helperText={touched.email && errors.email && `${errors.email}`}
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ paddingBottom: "16px" }}
            />

            <TextField
              id="companyInput"
              name="company"
              label="Company"
              type="text"
              value={values.company}
              error={touched.company && errors.company ? true : false}
              helperText={
                touched.company && errors.company && `${errors.company}`
              }
              fullWidth
              required
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ paddingBottom: "16px" }}
            />
            <TextField
              id="subjectInput"
              name="subject"
              label="Subject"
              type="text"
              value={values.subject}
              error={touched.subject && errors.subject ? true : false}
              helperText={
                touched.subject && errors.subject && `${errors.subject}`
              }
              fullWidth
              select
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ paddingBottom: "16px" }}
            >
              {optionsList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="messageInput"
              name="message"
              label="Message"
              type="text"
              value={values.message}
              error={touched.message && errors.message ? true : false}
              helperText={
                touched.message && errors.message && `${errors.message}`
              }
              required
              fullWidth
              multiline
              rows={8}
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ paddingBottom: "16px" }}
            />
            <Button
              variant="contained"
              size="large"
              fullWidth
              type="submit"
              disabled={
                status && (status.success || !isSubmitting) ? true : false
              }
              sx={{
                borderRadius: "50px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {status && isSubmitting
                ? "Sending..."
                : status && status.success
                  ? "Sent"
                  : "Send"}
            </Button>
          </Box>
        )
      }}
    </Formik>
  )
}

export default React.memo(ContactFormSection)
