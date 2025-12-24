'use client';

import React, { FormEvent, useState, ChangeEvent } from 'react';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Define the shape of the status state
interface Status {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactSection() {
  // State for form inputs
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // State for submission status (loading/success/error)
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // NOTE: Ensure your backend is running on port 5000
      const response = await fetch('http://localhost:5000/api/contact/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        // Clear form
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    }
  };

  // Shared class for inputs to ensure consistency
  const inputClassName = "w-full h-[58px] border border-[#3D550C] rounded-[10px] px-4 bg-white text-[#1E1E1E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3D550C]/20 transition-all font-roboto";

  return (
    <section className="py-20 max-w-[1440px] mx-auto px-6 mb-20">
      <div className="bg-white rounded-[60px] shadow-xl p-12 md:p-20 relative border border-gray-100">
        {/* Header Content */}
        <div className="text-center mb-10">
          <h2 className="font-spartan font-bold text-[42px] md:text-[54px] text-[#3D550C] mb-2">
            Get in Touch
          </h2>
          <p className="font-spartan text-xl text-[#1E1E1E]">
            We’d love to hear from you—whether it’s a question, feedback, or
            collaboration.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-signika font-medium text-[36px] text-[#404A3D] mb-8">
            Send a message
          </h3>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="font-roboto text-[15px] font-medium text-[#404A3D] mb-2 block">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClassName}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="font-roboto text-[15px] font-medium text-[#404A3D] mb-2 block">
                Your Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClassName}
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="font-roboto text-[15px] font-medium text-[#404A3D] mb-2 block">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClassName}
                placeholder="+1 234 567 890"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="font-roboto text-[15px] font-medium text-[#404A3D] mb-2 block">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Inquiry about products"
              />
            </div>

            {/* Message Textarea */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="font-roboto text-[15px] font-medium text-[#404A3D] mb-2 block">
                 Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClassName} h-[128px] p-4 resize-none`}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button & Status Message */}
            <div className="md:col-span-2 flex flex-col items-start gap-4">
              <button 
                type="submit"
                disabled={status.type === 'loading'}
                className={`bg-[#3D550C] text-white px-8 py-4 rounded-[30px] font-signika font-medium flex items-center gap-2 hover:bg-[#2e4009] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status.type === 'loading' ? 'Sending...' : 'Submit Now'}
                {status.type !== 'loading' && <span className="text-xl leading-none">→</span>}
              </button>

              {/* Status Message Display */}
              {status.message && (
                <p className={`text-lg font-roboto ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}