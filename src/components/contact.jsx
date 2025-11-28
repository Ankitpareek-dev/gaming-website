import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

// ==============================================
// LOCAL THEME DEFINITION (Copied from your theme.js)
// ==============================================
// const { theme } = require("./theme"); // COMMENTED OUT FOR PREVIEW

const theme = {
  colors: {
    bg: "bg-white",
    surface: "bg-zinc-50",
    border: "border-zinc-200",
    borderLight: "border-zinc-100",
    textMain: "text-zinc-900",
    textSecondary: "text-zinc-600",
    textMuted: "text-zinc-400",
    textLight: "text-zinc-300",

    // Monochrome Accent
    accentBg: "bg-black",
    accentText: "text-black",
    accentBorder: "border-black",
    textOnAccent: "text-white",

    scrollbarThumb: "bg-zinc-300",
    scrollbarTrack: "bg-transparent",
  },
  utils: {
    hoverTransition: "transition-all duration-300 ease-out",
    hoverScale: "hover:scale-105",
    shadowSubtle: "shadow-sm hover:shadow-md",
    shadowDeep: "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]",
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Message Sent! (Demo)");
  };

  return (
    <div className={`min-h-screen ${theme.colors.bg} font-sans`}>
      {/* 1. HERO / HEADER SECTION */}
      <div
        className={`border-b ${theme.colors.border} ${theme.colors.surface}`}
      >
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <span
            className={`inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase ${theme.colors.textMuted}`}
          >
            Get in Touch
          </span>
          <h1
            className={`text-4xl md:text-6xl font-black tracking-tight mb-6 ${theme.colors.textMain}`}
          >
            We'd love to hear from you.
          </h1>
          <p
            className={`max-w-2xl mx-auto text-lg ${theme.colors.textSecondary}`}
          >
            Have a question about a product, a custom build, or corporate
            partnership? Our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* 2. LEFT COLUMN: CONTACT INFORMATION */}
          <div className="lg:col-span-5 space-y-12">
            {/* Intro Text */}
            <div>
              <h2
                className={`text-2xl font-bold mb-4 ${theme.colors.textMain}`}
              >
                Contact Information
              </h2>
              <p className={`${theme.colors.textSecondary} leading-relaxed`}>
                Fill out the form and our team will get back to you within 24
                hours. For urgent inquiries, please call our support line.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div
                className={`flex items-start gap-4 p-6 rounded-2xl border ${theme.colors.border} ${theme.colors.surface} ${theme.utils.shadowSubtle} ${theme.utils.hoverTransition}`}
              >
                <div
                  className={`p-3 rounded-xl ${theme.colors.accentBg} ${theme.colors.textOnAccent}`}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h3
                    className={`font-bold text-sm uppercase tracking-wide mb-1 ${theme.colors.textMain}`}
                  >
                    Headquarters
                  </h3>
                  <p className={`text-sm ${theme.colors.textSecondary}`}>
                    123 Gaming Tower, Al Quoz
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className={`flex items-start gap-4 p-6 rounded-2xl border ${theme.colors.border} ${theme.colors.surface} ${theme.utils.shadowSubtle} ${theme.utils.hoverTransition}`}
              >
                <div
                  className={`p-3 rounded-xl ${theme.colors.accentBg} ${theme.colors.textOnAccent}`}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h3
                    className={`font-bold text-sm uppercase tracking-wide mb-1 ${theme.colors.textMain}`}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:support@xclusivemoon.com"
                    className={`text-sm ${theme.colors.textSecondary} hover:${theme.colors.textMain} underline decoration-zinc-300 underline-offset-4 transition-colors`}
                  >
                    support@xclusivemoon.com
                  </a>
                  <br />
                  <a
                    href="mailto:sales@xclusivemoon.com"
                    className={`text-sm ${theme.colors.textSecondary} hover:${theme.colors.textMain} underline decoration-zinc-300 underline-offset-4 transition-colors`}
                  >
                    sales@xclusivemoon.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                className={`flex items-start gap-4 p-6 rounded-2xl border ${theme.colors.border} ${theme.colors.surface} ${theme.utils.shadowSubtle} ${theme.utils.hoverTransition}`}
              >
                <div
                  className={`p-3 rounded-xl ${theme.colors.accentBg} ${theme.colors.textOnAccent}`}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h3
                    className={`font-bold text-sm uppercase tracking-wide mb-1 ${theme.colors.textMain}`}
                  >
                    Call Us
                  </h3>
                  <p className={`text-sm ${theme.colors.textSecondary}`}>
                    +971 50 123 4567{" "}
                    <span className={`text-xs ${theme.colors.textMuted} ml-2`}>
                      (Sales)
                    </span>
                  </p>
                  <p className={`text-sm ${theme.colors.textSecondary}`}>
                    +971 4 123 4567{" "}
                    <span className={`text-xs ${theme.colors.textMuted} ml-2`}>
                      (Support)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className={`p-6 border-l-2 ${theme.colors.accentBorder}`}>
              <h3
                className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wide mb-3 ${theme.colors.textMain}`}
              >
                <Clock size={16} /> Opening Hours
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span
                    className={`block font-semibold ${theme.colors.textMain}`}
                  >
                    Mon - Fri
                  </span>
                  <span className={theme.colors.textSecondary}>
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div>
                  <span
                    className={`block font-semibold ${theme.colors.textMain}`}
                  >
                    Sat - Sun
                  </span>
                  <span className={theme.colors.textSecondary}>
                    10:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 md:p-10 rounded-3xl border ${theme.colors.border} bg-white shadow-xl shadow-zinc-200/50`}
            >
              <h2
                className={`text-2xl font-bold mb-6 flex items-center gap-3 ${theme.colors.textMain}`}
              >
                <MessageSquare className={theme.colors.textSecondary} /> Send a
                Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`text-xs font-bold uppercase tracking-wider ${theme.colors.textSecondary}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${theme.colors.border} ${theme.colors.textMain} placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all`}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-xs font-bold uppercase tracking-wider ${theme.colors.textSecondary}`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${theme.colors.border} ${theme.colors.textMain} placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all`}
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className={`text-xs font-bold uppercase tracking-wider ${theme.colors.textSecondary}`}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${theme.colors.border} ${theme.colors.textMain} focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all appearance-none`}
                  >
                    <option value="" disabled>
                      Select a topic...
                    </option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={`text-xs font-bold uppercase tracking-wider ${theme.colors.textSecondary}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="How can we help you today?"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${theme.colors.border} ${theme.colors.textMain} placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all resize-none`}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`
                    w-full py-4 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2
                    ${theme.colors.accentBg} ${theme.colors.textOnAccent}
                    hover:opacity-90 active:scale-[0.98] transition-all duration-200
                  `}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
