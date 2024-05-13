import nodemailer from "nodemailer"

export async function POST(request) {
  const req = await request.json()
  const { name, email, message } = req

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    })

    const info = await transporter.sendMail({
      from: `"Parity Consultants website" <${process.env.NEXT_PUBLIC_GMAIL_FROM_EMAIL}>`,
      to: "michaelstedman81@gmail.com",
      subject: "Contact form submission",
      text: `
            Name: ${name}\n
            Email: ${email}\n
            Message: ${message}
          `,
    })

    console.log("Message sent: %s", info.messageId)

    return new Response(`Email was sent successfully`, {
      status: 200,
      success: true,
    })
  } catch (error) {
    console.error("Error occurred:", error)
    return new Response(`Sending an email had an error`, {
      status: 500,
      success: false,
      error: error.message,
    })
  }
}
