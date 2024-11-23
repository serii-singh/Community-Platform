import React, { useState } from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";

export default function GettingStarted() {
  // State to track which FAQ is currently open
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Toggle function to open/close an FAQ answer
  const toggleFAQ = (index) => {
    if (activeFAQ === index) {
      setActiveFAQ(null); // Close if it's already open
    } else {
      setActiveFAQ(index); // Open the clicked FAQ
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the sign-up button on the homepage to create a new account.",
    },
    {
      question: "How can I reset my password?",
      answer: "Go to the Profile page, click on 'Forgot Password', and follow the instructions.",
    },
    {
      question: "Where can I find tutorials?",
      answer: "Check out the 'Tutorial Videos' section under the 'Resources' tab.",
    },
    {
      question: "How do I contact support?",
      answer: "Visit the 'Contact Us' page to send an inquiry or use the live chat.",
    },
  ];

  return (
    <>
      <NavBar /> {/* Your navigation bar */}
      <Sidebar
        content={
          <>
            <div className="p-6">
              <h1 className="text-3xl font-semibold mb-4">Welcome to Our Platform!</h1>
              <p className="text-lg mb-4">
                We're excited to have you on board. Here's a quick guide to get you started and explore the platform.
              </p>

              {/* Getting Started Steps */}
              <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
                <ul className="list-decimal pl-5">
                  <li className="mb-2">Step 1: Sign up or log in to your account.</li>
                  <li className="mb-2">Step 2: Complete your profile setup.</li>
                  <li className="mb-2">Step 3: Explore the platform features, including resources, events, and tools.</li>
                  <li className="mb-2">Step 4: Connect with other users and start using the platform.</li>
                </ul>
              </div>

              {/* Collapsible FAQ Section */}
              <div className="bg-white p-4 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b py-2">
                      {/* FAQ Question Button */}
                      <button
                        className="w-full text-left text-lg font-semibold text-blue-600"
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                      </button>

                      {/* FAQ Answer (Visible when activeFAQ matches the index) */}
                      {activeFAQ === index && (
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Helpful Links or Buttons */}
              <div className="bg-gray-100 p-4 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Additional Resources</h2>
                <p>Check out our help center, tutorials, and community discussions to get the most out of the platform:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    <a href="/help-center" className="text-blue-500 hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/tutorials" className="text-blue-500 hover:underline">
                      Tutorial Videos
                    </a>
                  </li>
                  <li>
                    <a href="/community" className="text-blue-500 hover:underline">
                      Join our Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
