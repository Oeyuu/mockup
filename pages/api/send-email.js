import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, phone, message, receiverEmail } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ändere dies je nach Service
      auth: {
        user: process.env.SMTP_USER, // Absender-E-Mail aus .env.local
        pass: process.env.SMTP_PASS, // Passwort oder App-Token
      },
    });

    await transporter.sendMail({
      from: email,
      to: receiverEmail, // Empfänger aus Markdown
      subject: 'Neue Kontaktanfrage',
      text: `Nachricht von: ${email}\nTelefon: ${phone}\n\n${message}`,
    });

    res.status(200).json({ message: 'E-Mail erfolgreich gesendet!' });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).json({ message: 'E-Mail konnte nicht gesendet werden.' });
  }
}
