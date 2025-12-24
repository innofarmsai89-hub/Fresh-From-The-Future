// controllers/contact.controller.js
const nodemailer = require('nodemailer');

exports.sendContactEmail = async (req, res) => {
  // 1. Destructure all fields from the request body
  const { name, email, phone, subject, message } = req.body;

  // 2. Validation: Ensure required fields are present
  // Note: Phone and Subject are often optional, so we don't strictly require them here.
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Please provide name, email, and message." 
    });
  }

  try {
    // 3. Configure the Transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Formulate the email content
    // We use 'html' for a nice look, and 'text' as a fallback.
    const mailOptions = {
      from: process.env.EMAIL_USER,    // Sender address (your verified email)
      to: process.env.EMAIL_USER,      // Receiver (you want to receive these emails)
      replyTo: email,                  // Clicking 'Reply' will email the visitor
      subject: subject || `New Contact Form Submission from ${name}`, // Use their subject or a default
      
      // Plain text version (for clients that don't support HTML)
      text: `
        New Contact Message!
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject || 'No subject'}
        
        Message:
        ${message}
      `,

      // HTML version (This is what you will likely see)
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #3D550C;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // 5. Send Email
    await transporter.sendMail(mailOptions);

    // 6. Success Response
    res.status(200).json({
      success: true,
      message: "Email sent successfully! 📧",
    });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
};