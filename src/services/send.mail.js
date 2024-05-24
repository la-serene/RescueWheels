import nodemailer from 'nodemailer'

export const sendMail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "caoky2002xx@gmail.com",
            pass: "pnng ikxz ekkz cuco",
        },
    })

    const mailOptions = {
        from: "no-reply@rescuewheels.com",
        to: to,
        subject: subject,
        text: text,
    }

    await transporter.sendMail(mailOptions, (error) => {
        if (error) {
            throw new Error("Error sending email.")
        }
    })
}