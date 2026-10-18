import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SlideCommit from '../components/SlideCommit';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedInfo, setLastSubmittedInfo] = useState({ name: '', requirement: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [sliderWidth, setSliderWidth] = useState(300);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    requirement: '',
    message: '',
  });

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      if (w < 440) {
        setSliderWidth(Math.min(310, Math.max(220, w - 72)));
      } else {
        setSliderWidth(310);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please enter your name';
    }
    if (!formData.email.trim()) {
      return 'Please enter your email address';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      return 'Please enter your contact phone number';
    }
    if (!formData.location.trim()) {
      return 'Please enter your project location';
    }
    if (!formData.requirement) {
      return 'Please select an equipment or service requirement';
    }
    return '';
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitInquiry = async () => {
    const err = validateForm();
    if (err) {
      setErrorMessage(err);
      throw new Error(err);
    }
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '33ed9000-1899-4422-94ec-96df6257e62b';

      if (accessKey && accessKey.trim() !== '') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[New Inquiry] ${formData.requirement} - ${formData.name}`,
            from_name: 'DM Lifts & Escalators Website',
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            location: formData.location.trim(),
            requirement: formData.requirement,
            message: formData.message ? formData.message.trim() : 'No additional message provided',
          }),
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || 'Email delivery failed. Please check your access key.');
        }
      } else {
        console.warn('Web3Forms access key not found in .env. Form submission simulated.');
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setLastSubmittedInfo({
        name: formData.name,
        requirement: formData.requirement,
      });
      setSubmitted(true);
      return true;
    } catch (submitErr) {
      console.error('Submission error:', submitErr);
      const msg = submitErr.message || 'Failed to submit inquiry. Please try again or call us directly.';
      setErrorMessage(msg);
      throw submitErr;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      await submitInquiry();
    } catch {
      // Error is set in submitInquiry
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      requirement: '',
      message: '',
    });
    setErrorMessage('');
    setSubmitted(false);
  };

  return (
    <section 
      id="contact" 
      className="scroll-mt-20 lg:scroll-mt-24 py-8 sm:py-16 lg:py-24 bg-[#06111C] border-t border-[#075A8F]/20 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#075A8F]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#FF6A00]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER - Split Architectural Alignment */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-5 pb-4 sm:mb-12 sm:pb-8 border-b border-[#075A8F]/25">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-[#FF6A00]">
                Inquiries &amp; Consultation
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              LET'S BUILD <span className="text-[#0A78B8]">VERTICAL</span> <span className="text-[#FF6A00]">POSSIBILITIES</span>
            </h2>

            {/* Sub-lettering */}
            <p className="text-sm font-sans text-[#C8D1D8]/80 mt-2 font-medium tracking-normal flex items-center gap-2">
              <span>Direct Consultation</span>
              <span className="text-[#FF6A00]">•</span>
              <span>Engineering Quotes</span>
              <span className="text-[#0A78B8]">•</span>
              <span>Site Inspections</span>
            </p>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-xs sm:text-base text-[#C8D1D8] leading-relaxed">
              Reach out to our vertical transportation consultants for architectural planning, custom lift specifications, modernizations, or turnkey installation quotes.
            </p>
          </div>
        </div>

        {/* CONTACT GRID: INFO & ENQUIRY FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start">
          
          {/* LEFT: CONTACT DETAILS & HIGHLIGHTS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#FFFFFF]">
                Direct Engineering Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#C8D1D8] leading-relaxed">
                Connect directly with our project advisory team to discuss spatial requirements, traffic capacity, and finish specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-[#C8D1D8]">
              {/* Email */}
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[#0A1B2A] border border-[#075A8F]/30 hover:border-[#FF6A00]/50 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#06111C] border border-[#075A8F]/40 flex items-center justify-center text-[#FF6A00] flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-mono text-[#0A78B8] uppercase">Email Support</span>
                  <a href="mailto:dmliftsescalators@gmail.com" className="font-medium text-white hover:text-[#FF6A00] transition-colors break-all text-xs sm:text-sm">
                    dmliftsescalators@gmail.com
                  </a>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[#0A1B2A] border border-[#075A8F]/30 hover:border-[#FF6A00]/50 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#06111C] border border-[#075A8F]/40 flex items-center justify-center text-[#FF6A00] flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="block text-[10px] font-mono text-[#0A78B8] uppercase">Direct Phone Lines</span>
                  <div className="flex flex-wrap sm:flex-col gap-x-3 gap-y-1 text-white font-medium text-xs sm:text-sm">
                    <a href="tel:+919343634318" className="hover:text-[#FF6A00] transition-colors whitespace-nowrap">
                      +91 93436 34318
                    </a>
                    <a href="tel:+919743232654" className="hover:text-[#FF6A00] transition-colors whitespace-nowrap">
                      +91 97432 32654
                    </a>
                    <a href="tel:+916361105490" className="hover:text-[#FF6A00] transition-colors whitespace-nowrap">
                      +91 63611 05490
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="sm:col-span-2 lg:col-span-1 flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[#0A1B2A] border border-[#075A8F]/30 hover:border-[#FF6A00]/50 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#06111C] border border-[#075A8F]/40 flex items-center justify-center text-[#FF6A00] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-mono text-[#0A78B8] uppercase">Registered Office</span>
                  <address className="not-italic font-medium text-white text-xs sm:text-sm leading-relaxed">
                    No. 40, 3rd Floor, 4th Cross,<br className="hidden sm:inline" />
                    1st Main Rd, Anjanappa Layout, K. Narayanapura, Bengaluru - 560077
                  </address>
                </div>
              </div>
            </div>

            {/* Architectural Trust Note */}
            <div className="p-3.5 sm:p-5 rounded-xl bg-[#0A1B2A]/60 border border-[#075A8F]/20">
              <span className="text-[10px] font-mono text-[#FF6A00] uppercase tracking-wider block mb-0.5 font-semibold">
                Guaranteed Response
              </span>
              <p className="text-xs text-[#C8D1D8] leading-relaxed">
                All engineering inquiries and project RFPs receive a technical response within one business day.
              </p>
            </div>
          </div>

          {/* RIGHT: PREMIUM ENQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-7 lg:p-10 rounded-lg border border-[#075A8F]/40 bg-[#0A1B2A] shadow-[0_20px_50px_rgba(6,17,28,0.95)]">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#075A8F]/25">
                <div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] font-display">
                    Project Consultation Form
                  </h3>
                  <p className="text-xs text-[#C8D1D8] mt-0.5">
                    Submit your building details for a customized proposal.
                  </p>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[#FF6A00] bg-[#06111C] border border-[#075A8F]/40 rounded font-semibold">
                  DM-ENQUIRY
                </span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#06111C] border border-[#FF6A00] flex items-center justify-center text-[#FF6A00] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    Enquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#C8D1D8] max-w-sm mb-6 leading-relaxed">
                    Thank you{lastSubmittedInfo.name ? `, ${lastSubmittedInfo.name}` : ''}! Your consultation request for{' '}
                    <span className="text-[#FF6A00] font-medium">{lastSubmittedInfo.requirement || 'vertical mobility'}</span>{' '}
                    has been submitted. Our engineering advisory team will review your specifications and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#06111C] hover:bg-[#075A8F]/30 border border-[#075A8F]/60 hover:border-[#FF6A00] text-white text-xs font-mono uppercase tracking-wider rounded transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 rounded text-red-200 text-xs font-mono flex items-center justify-between">
                      <span>{errorMessage}</span>
                      <button
                        type="button"
                        onClick={() => setErrorMessage('')}
                        className="text-red-400 hover:text-white text-xs font-bold px-1"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C8D1D8] mb-2 font-medium">
                        Name <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 text-xs bg-[#06111C] border border-[#075A8F]/40 rounded text-white placeholder-[#C8D1D8]/40 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C8D1D8] mb-2 font-medium">
                        Email <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 text-xs bg-[#06111C] border border-[#075A8F]/40 rounded text-white placeholder-[#C8D1D8]/40 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C8D1D8] mb-2 font-medium">
                        Phone <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 text-xs bg-[#06111C] border border-[#075A8F]/40 rounded text-white placeholder-[#C8D1D8]/40 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C8D1D8] mb-2 font-medium">
                        Location <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => {
                          setFormData({ ...formData, location: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="Enter project location or city"
                        className="w-full px-4 py-3 text-xs bg-[#06111C] border border-[#075A8F]/40 rounded text-white placeholder-[#C8D1D8]/40 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Requirement */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C8D1D8] mb-2 font-medium">
                      Requirement <span className="text-[#FF6A00]">*</span>
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => {
                        setFormData({ ...formData, requirement: e.target.value });
                        if (errorMessage) setErrorMessage('');
                      }}
                      className={`w-full px-4 py-3 text-xs bg-[#06111C] border border-[#075A8F]/40 rounded focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors ${
                        !formData.requirement ? 'text-[#C8D1D8]/50' : 'text-white'
                      }`}
                    >
                      <option value="" disabled className="text-gray-400">
                        Select requirement / equipment
                      </option>
                      <option value="Passenger Elevators" className="text-white bg-[#06111C]">Passenger Elevators</option>
                      <option value="Residential Elevators" className="text-white bg-[#06111C]">Residential Elevators</option>
                      <option value="Commercial Elevators" className="text-white bg-[#06111C]">Commercial Elevators</option>
                      <option value="Hospital Elevators" className="text-white bg-[#06111C]">Hospital Elevators</option>
                      <option value="Industrial / Freight Elevators" className="text-white bg-[#06111C]">Industrial / Freight Elevators</option>
                      <option value="Modernization Solutions" className="text-white bg-[#06111C]">Modernization Solutions</option>
                      <option value="Escalators & Moving Walks" className="text-white bg-[#06111C]">Escalators & Moving Walks</option>
                      <option value="Maintenance & AMC" className="text-white bg-[#06111C]">Maintenance & AMC</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C8D1D8] mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, floor count, capacity, or custom requirements (optional)..."
                      className="w-full px-4 py-3 text-xs bg-[#06111C] border border-[#075A8F]/40 rounded text-white placeholder-[#C8D1D8]/40 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors resize-none"
                    />
                  </div>

                  {/* Primary CTA: SlideCommit Submission Animation */}
                  <div className="pt-2 flex flex-col items-center">
                    <SlideCommit
                      label={isSubmitting ? 'Sending to Company...' : 'Slide to GET IN TOUCH'}
                      doneLabel="Inquiry Sent to Email!"
                      errorLabel="Submission Failed"
                      onConfirm={() => submitInquiry()}
                      trackColor="#06111C"
                      handleColor="#FF6A00"
                      successColor="#10B981"
                      dangerColor="#EF4444"
                      width={sliderWidth}
                      height={54}
                      radius={27}
                      className="border border-[#075A8F]/60 shadow-[0_0_25px_rgba(255,106,0,0.3)] hover:shadow-[0_0_35px_rgba(255,106,0,0.5)] transition-shadow"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
