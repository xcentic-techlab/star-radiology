const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
});

const sendOtpEmail = async (to, otp) => {
  await transporter.sendMail({
    from: `"Star Radiology" <${process.env.ADMIN_EMAIL}>`,
    to,
    subject: "Password Reset OTP",
    html: `
      <h2>Your OTP: ${otp}</h2>
      <p>This OTP is valid for 5 minutes.</p>
      <p>If you did not request this, ignore this email.</p>
    `,
  });
};

module.exports = sendOtpEmail;
