import { useState, useCallback } from 'react';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../utils/emailConfig';

export const useEmailJS = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = useCallback(async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Initialize EmailJS if credentials are provided
      if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || "Not provided",
            company: formData.company || "Not provided",
            subject: formData.subject || "Contact Form Inquiry",
            message: formData.message,
            to_email: EMAILJS_CONFIG.to_email,
          }
        );

        if (response.status === 200) {
          setSuccess(true);
          setLoading(false);
          return { success: true, message: "Email sent successfully!" };
        }
      } else {
        // Demo mode - log form data to console
        console.log("📧 EmailJS not configured. Form data:", formData);
        setSuccess(true);
        setLoading(false);
        return {
          success: true,
          message: "Form submitted! (EmailJS not configured - configure in environment variables)"
        };
      }
    } catch (err) {
      const errorMessage = err.message || "Failed to send email";
      setError(errorMessage);
      setLoading(false);
      return { success: false, message: errorMessage };
    }
  }, []);

  const resetStatus = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return {
    sendEmail,
    loading,
    error,
    success,
    resetStatus,
  };
};
