import nodemailer from "nodemailer";

// Create reusable SMTP transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL for port 465
    auth: {
      user: process.env.SMTP_USER || "admissions@klinarakids.com",
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

/**
 * Send inquiry notification email to admissions@klinarakids.com
 */
export async function sendInquiryEmail(formData) {
  const SMTP_USER = process.env.SMTP_USER || "admissions@klinarakids.com";
  const RECIPIENT_EMAIL = "admissions@klinarakids.com";

  const messageBlock = formData.message
    ? `
      <div style="background-color: #aec6cf; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2F6B6B; margin-top: 0;">Additional Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
      </div>
    `
    : "";

  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2F6B6B; border-bottom: 2px solid #C49898; padding-bottom: 10px;">
            🎓 New Inquiry from Klinara Kids Website
          </h2>

          <div style="background-color: #f5f1e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #5C3D3D; margin-top: 0;">Parent/Guardian Information</h3>
            <p><strong>Name:</strong> ${formData.parentName || "N/A"}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email || ""}">${formData.email || "N/A"}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone || ""}">${formData.phone || "N/A"}</a></p>
          </div>

          <div style="background-color: #d4b896; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #4A3131; margin-top: 0;">Child Information</h3>
            <p><strong>Child's Name:</strong> ${formData.childName || "N/A"}</p>
            <p><strong>Child's Age:</strong> ${formData.childAge || "N/A"}</p>
            <p><strong>Program of Interest:</strong> ${formData.program || "N/A"}</p>
          </div>

          ${messageBlock}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This inquiry was submitted through the Klinara Kids website.</p>
            <p>Please respond to the parent/guardian at the email or phone number provided above.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: SMTP_USER,
      to: RECIPIENT_EMAIL,
      subject: `New Inquiry from ${formData.parentName || "Website Visitor"}`,
      html: htmlBody,
    });
    console.log(`✓ Inquiry email sent successfully to ${RECIPIENT_EMAIL}`);
    return true;
  } catch (error) {
    console.error(`✗ Error sending inquiry email: ${error.message}`);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

/**
 * Send contact form notification email to admissions@klinarakids.com
 */
export async function sendContactEmail(formData) {
  const SMTP_USER = process.env.SMTP_USER || "admissions@klinarakids.com";
  const RECIPIENT_EMAIL = "admissions@klinarakids.com";

  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2F6B6B; border-bottom: 2px solid #C49898; padding-bottom: 10px;">
            📧 New Contact Form Submission
          </h2>

          <div style="background-color: #f5f1e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #5C3D3D; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name || "N/A"}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email || ""}">${formData.email || "N/A"}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone || ""}">${formData.phone || "N/A"}</a></p>
            <p><strong>Subject:</strong> ${formData.subject || "N/A"}</p>
          </div>

          <div style="background-color: #d4b896; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #4A3131; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message || "No message provided"}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This message was submitted through the Klinara Kids contact form.</p>
            <p>Please respond to ${formData.name || "the visitor"} at the email or phone number provided above.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: SMTP_USER,
      to: RECIPIENT_EMAIL,
      subject: `Contact Form: ${formData.subject || "General Inquiry"}`,
      html: htmlBody,
    });
    console.log(`✓ Contact email sent successfully to ${RECIPIENT_EMAIL}`);
    return true;
  } catch (error) {
    console.error(`✗ Error sending contact email: ${error.message}`);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
