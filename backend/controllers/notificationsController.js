const notificationsService = require('../services/notificationsService');

async function sendNotification(req, res) {
  try {
    // Send notification (e.g., email or push notification)
    await notificationsService.sendEmailNotification(req.body.email, req.body.subject, req.body.message);
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Notification sending failed' });
  }
}

module.exports = { sendNotification };
