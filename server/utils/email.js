import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smpt.gmail.com",
  port: 742,
  secure: true,

  auth: {
    user: "mahdiahmed742@gmail.com",
    pass: "fhfs mfsy iagp qion",
  },
});

export const sendEmail = async options => {
  const mailOptions = {
    from: "mahdiahmed742@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
