// EmailJS Configuration
// Update these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Email template parameters
export const EMAIL_PARAMS = {
  to_email: "hello@obyra.co.uk",
  from_name: "form_name",
  from_email: "form_email",
  phone: "form_phone",
  company: "form_company",
  message: "form_message",
  subject: "form_subject",
};

// Validation rules
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: false,
    pattern: /^[0-9\s\-\+\(\)]{10,}$/,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 5000,
  },
};
