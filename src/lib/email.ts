import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  date: string;
  timeSlot: string;
  meetingUrl: string;
  description?: string;
}

// Configurable EmailJS credentials
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''; // One unified template or admin template
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const isEmailJSConfigured = !!serviceId && !!templateId && !!publicKey;

export async function sendEmailNotifications(params: EmailParams) {
  if (!isEmailJSConfigured) {
    console.warn(
      'EmailJS is not fully configured. Email notifications skipped.\n' +
      'Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
    );
    return false;
  }

  try {
    // Template parameters mapped to fields inside your EmailJS Template
    const templateParams = {
      to_email: params.email, // Client's email address
      admin_email: 'scale.with.abraham@gmail.com', // Your notification email address
      client_name: params.name,
      client_email: params.email,
      client_phone: params.phone || 'Not provided',
      client_company: params.company || 'Not provided',
      meeting_date: params.date,
      meeting_time: params.timeSlot,
      meeting_link: params.meetingUrl,
      description: params.description || 'No additional details provided.'
    };

    // Send email using EmailJS SDK
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('Email dispatched successfully via EmailJS:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('Failed to send email notifications via EmailJS:', error);
    throw error;
  }
}
