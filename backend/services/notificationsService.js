// services/notificationsService.js

const nodemailer = require('nodemailer');

async function sendEmailNotification(email, subject, message) {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: subject,
    text: message
  };

  // Send email
  await transporter.sendMail(mailOptions);
}

async function sendPushNotification(deviceToken, message) {
  // Implement logic to send push notification (e.g., using Firebase Cloud Messaging)
}

module.exports = { sendEmailNotification, sendPushNotification };
