"use client";

import React, { useState, FormEvent } from "react";
import { useForm, ValidationError } from '@formspree/react';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Formspree hook for form submission
  const [state, handleSubmit] = useForm("mpwzppzr");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Step navigation handlers
  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  // Handle form submission to Formspree
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formData); // Send formData to Formspree
  };

  return (
    <section className="py-24 mt-12 rounded-2xl mx-4 sm:mx-8 text-center bg-white">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(0 ,31 ,51] leading-[45px] font-bold sm:leading-[57px] [text-shadow:0px_0px_7.2px_#00000030] inter-jost text-gray-800 mb-2">
          Contact us!
        </h2>
        <p className="text-md text-gray-500 poppins mt-4 mb-6">
          It’s time to stop overpaying for your services. Fill out the form below to get started.
        </p>

        <div className="flex items-center justify-center py-12">
          {["Form Filled", "Book a Meeting", "Visit Our Website"].map((label, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center ${step === index + 1 ? "bg-[black] text-white" : "bg-white text-black border border-gray-800"} transition-all duration-300`}
              >
                {index + 1}
              </div>
              {index < 2 && <span className="w-10 border-t border-gray-800"></span>}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
          {step === 1 && (
            <div>
              <h3 className="text-xl inter-jost [text-shadow:0px_0px_7.2px_#00000030] text-gray-800 font-semibold mb-4">
                Fill Out Your Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-gray-300 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-gray-300 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-b border-gray-300 py-2"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-4 border-b border-gray-300 py-2"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Book a Meeting</h3>
              <p className="text-gray-500 mb-6">Click below to proceed.</p>
              <button
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                }}
                type="button"
                onClick={nextStep}
                className="text-white px-6 py-3 rounded-full"
              >
                Click Here
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Visit Our Website</h3>
              <p className="text-gray-500 mb-6">Thank you for your interest! Please visit our main website for more information.</p>
              <a
                href="https://springairns.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#08e1dd] underline"
              >
                Go to Springairns.com
              </a>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,147,90,1) 0%, rgba(3,88,48,1) 100%)',
                }}
                className="text-white px-6 py-3 rounded-full"
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                }}
                type="button"
                onClick={nextStep}
                className="text-white px-6 py-3 rounded-full"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                }}
                disabled={state.submitting}
                className="text-white px-6 py-3 rounded-full"
              >
                Submit
              </button>
            )}
          </div>
        </form>

        {state.succeeded && <p className="text-center text-green-500 mt-4">Thanks for joining!</p>}
      </div>
    </section>
  );
};

export default MultiStepForm;
