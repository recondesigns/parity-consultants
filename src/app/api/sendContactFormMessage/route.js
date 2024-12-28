import {NextResponse} from 'next/server'
import nodemailer from "nodemailer"

export async function POST(request) {
    const req = await request.json()
    const {name, email, company, subject, message} = req

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
            to: `${process.env.NEXT_PUBLIC_GMAIL_SEND_TO_DEVELOPER}, ${process.env.NEXT_PUBLIC_GMAIL_SEND_TO_PARITY}`,
            subject: "Contact form submission",
            text: `
            Name: ${name}\n
            Email: ${email}\n
            Company: ${company}\n
            Subject: ${!subject ? "User did not select a subject" : subject}\n
            Message: ${message}
          `,
        })

        console.log("Message sent: %s", info.messageId)

        return NextResponse.json({message: 'Email was sent successfully.'}, {status: 200})
    } catch (error) {
        console.error("Error occurred:", error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
