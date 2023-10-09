import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  // host: "smtpout.secureserver.net", // GoDaddy SMTP server
  // port: 465, // GoDaddy SMTP ports
  // // host: "gmail",
  // // service: "GoDaddy",
  service: "gmail",
  // secure: true, // true for 465, false for other port
  auth: {
    user: process.env.SMTP_EMAIL as string,
    // this password is generated by app password
    pass: process.env.SMTP_PASSWORD as string,
  },
});

export const sendMail = async (
  to: any,
  subject: string,
  html: string,
  text?: string
) => {
  const mailOptions = {
    from: process.env.SMTP_EMAIL as string,
    to: [to],
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error sending email:", error);
  }
};