import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// In-memory store for quick consultation leads (or connect to DB)
const inquiries = [];

// ==========================================
// 1. Healthcheck Route
// ==========================================
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'DM Elevators & Escalators Backend API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// ==========================================
// 2. Contact & Project Consultation Route
// ==========================================
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, serviceType, buildingType, message } = req.body;

    // Basic Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone number are required fields.'
      });
    }

    const newInquiry = {
      id: `INQ-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      serviceType: serviceType || 'General Consultation',
      buildingType: buildingType || 'Not Specified',
      message: message ? message.trim() : '',
      createdAt: new Date().toISOString()
    };

    inquiries.push(newInquiry);

    // Optional Nodemailer integration if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"DM Elevators Website" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || 'dmliftsescalators@gmail.com',
        subject: `New Inquiry from ${newInquiry.name} - ${newInquiry.serviceType}`,
        html: `
          <h2>New Project Consultation Request</h2>
          <p><strong>Name:</strong> ${newInquiry.name}</p>
          <p><strong>Email:</strong> ${newInquiry.email}</p>
          <p><strong>Phone:</strong> ${newInquiry.phone}</p>
          <p><strong>Service Type:</strong> ${newInquiry.serviceType}</p>
          <p><strong>Building Type:</strong> ${newInquiry.buildingType}</p>
          <p><strong>Message:</strong> ${newInquiry.message || 'None'}</p>
          <p><small>Submitted at: ${newInquiry.createdAt}</small></p>
        `
      });
    }

    console.log(`[DM Backend] New Inquiry Received: ${newInquiry.id} from ${newInquiry.name} (${newInquiry.email})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received by our engineering team.',
      inquiryId: newInquiry.id
    });
  } catch (error) {
    console.error('[DM Backend] Contact Route Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again or contact us directly at dmliftsescalators@gmail.com.'
    });
  }
});

// ==========================================
// 3. Maintenance Service Request Route
// ==========================================
app.post('/api/service-request', (req, res) => {
  const { customerName, location, liftId, issueType, urgency } = req.body;

  if (!customerName || !location) {
    return res.status(400).json({
      success: false,
      message: 'Customer name and location are required.'
    });
  }

  const ticket = {
    ticketId: `SRV-${Date.now()}`,
    customerName,
    location,
    liftId: liftId || 'N/A',
    issueType: issueType || 'Routine Maintenance',
    urgency: urgency || 'Standard',
    status: 'Queued for Dispatch',
    timestamp: new Date().toISOString()
  };

  console.log(`[DM Backend] Service Dispatch Ticket Created: ${ticket.ticketId}`);

  return res.status(201).json({
    success: true,
    message: 'Maintenance ticket created successfully. Our dispatch engineer has been alerted.',
    ticket
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` DM Elevators & Escalators Backend API   `);
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(` Healthcheck: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});
