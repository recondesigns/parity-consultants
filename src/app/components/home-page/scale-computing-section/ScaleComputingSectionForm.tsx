"use client"
import React from "react"
import axios from "axios"
import {useFocus} from "../../../context/FocusContext"
import {Formik} from "formik"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
// @ts-expect-error Could not find a declaration file for module react-google-recaptcha
import ReCAPTCHA from 'react-google-recaptcha'
import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
    errors.company = `'Please enter your company's name.`
  }

  return errors
}

function ScaleComputingSectionForm() {
  const [captchaValue, setCaptchaValue] = React.useState<string | null>(null)
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small"/>
      </IconButton>
    </React.Fragment>
  );

  const nameInputRef = useFocus()

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: "",
        details: "",
        captcha: captchaValue
      }}
      validateOnChange={false}
      validate={validateFunc}
      onSubmit={(values, {setSubmitting, setStatus, resetForm}) => {
        const errors = validateFunc(values)
        setStatus({isSending: true, success: false})

        if (Object.keys(errors).length === 0) {
          setSubmitting(true)

          axios
            .post(
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/api/sendEmail"
                : "/api/sendEmail",
              {
                name: values.name,
                email: values.email,
                company: values.company,
                details: values.details
                  ? values.details
                  : "User did not submit details.",
              }
            )
            .then(() => {
              // console.log(result.data)
              setStatus({isSending: false, success: true})
              setSubmitting(false)
              resetForm()
              setIsSnackbarOpen(true)

              setTimeout(() => setIsSnackbarOpen(false), 5000)
            })
            .catch((error) => {
              console.log("Error sending email:", error)
              setStatus({isSending: false, success: false})
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
          <>
            <Snackbar
              open={isSnackbarOpen}
              onClose={handleClose}
              // anchorOrigin={{ vertical, horizontal }}
              message="Thank you. Your message has been sent."
              action={action}
            />

            <Box
              component={"form"}
              onSubmit={(e) => {
                e.preventDefault()

                if (!captchaValue) {
                  alert('Please complete reCaptcha.')

                  return
                }

                handleSubmit()
              }}
              noValidate
              sx={{
                padding: "20px",
                background: "#FDFCFC",
                borderRadius: "20px",
                maxWidth: "380px",
              }}
            >
              <Typography
                variant="h6"
                component="p"
                fontWeight="bold"
                sx={{fontFamily: "inherit"}}
              >
                Unlock your IT potential today!
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{fontFamily: "inherit"}}
                pb={"20px"}
              >
                Submit your contact info below for a personalized consultation.
              </Typography>
              <TextField
                id="nameInput"
                name="name"
                label="Name"
                type="text"
                // @ts-expect-error
                inputRef={nameInputRef}
                value={values.name}
                fullWidth
                required
                error={touched.name && errors.name ? true : false}
                helperText={touched.name && errors.name && `${errors.name}`}
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{paddingBottom: "16px", fontFamily: "inherit"}}
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
                sx={{paddingBottom: "16px"}}
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
                sx={{paddingBottom: "16px"}}
              />
              <TextField
                id="detailsInput"
                name="details"
                label="Details"
                type="text"
                value={values.details}
                error={touched.details && errors.details ? true : false}
                helperText={
                  touched.details && errors.details && `${errors.details}`
                }
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{paddingBottom: "16px"}}
              />
              <Box sx={{paddingBottom: '16px', display: 'flex', justifyContent: 'center'}}>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </Box>
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
          </>
        )
      }}
    </Formik>
  )
}

export default React.memo(ScaleComputingSectionForm)
