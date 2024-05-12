import nodemailer from "nodemailer"

export async function POST(request) {
  const req = await request.json()
  const { name, email, company } = req

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "stedmanonlinedesigns@gmail.com",
        pass: "nzdq thiu pexf mceo",
      },
    })

    const info = await transporter.sendMail({
      from: `"Parity Consultants website" <stedmanonlinedesigns@gmail.com>`,
      to: "michaelstedman81@gmail.com",
      subject: "New Scale Computing lead",
      text: `
            Name: ${name}\n
            Email: ${email}\n
            Company: ${company}
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
