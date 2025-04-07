"use client";

import React, { useState } from "react";
import { translations } from "../constents/index";

const Contact = ({ theme, language }) => {
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'SUCCESS', 'ERROR', or null
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mldjpogj", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form on success
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(true);
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setStatus("ERROR");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


   // Reset form to send a new message
   const handleSendAnother = () => {
    setSubmitted(false);
    setStatus(null); // Clear status message
  };

  // Display message based on status
  const getStatusMessage = () => {
    if (!status) return null;
    
    if (status === "SUCCESS") {
      return language === "ar" ? "تم الإرسال بنجاح!" : "Message sent successfully!";
    } else if (status === "ERROR") {
      return language === "ar" ? "حدث خطأ أثناء الإرسال." : "Error sending message.";
    } else if (isSubmitting) {
      return language === "ar" ? "جاري الإرسال..." : "Sending...";
    }
    
    return null;
  };

  return (
    <div>
      <section
        id="contact"
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.contact.subtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center flex flex-col gap-3">
                <p> {language === "ar" ? "تم الإرسال بنجاح!" : "Message sent successfully!"} </p>
                <button
                  className={`mt-4 px-4 py-2 rounded-lg ${
                    theme === "dark" ? "bg-indigo-600" : "bg-indigo-600"
                  } text-white`}
                  onClick={handleSendAnother}
                >
                  {language === "ar" ? "إرسال رسالة أخرى" : "Send another message"}
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium"
                    >
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "border border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "border border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium"
                  >
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "border border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "border border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full ${
                    theme === "dark"
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } text-white px-6 py-3 rounded-lg transition-colors`}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? language === "ar"
                      ? "جاري الإرسال..."
                      : "Sending..."
                    : t.contact.submit}
                </button>
              </form>
            )}

            {status && !submitted && (
              <div
                className={`mt-4 p-4 rounded-lg text-center ${
                  status === "SUCCESS"
                    ? "bg-green-100 text-green-800"
                    : status === "ERROR"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {getStatusMessage()}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;