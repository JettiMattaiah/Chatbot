import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to send messages to the chatbot
  function sendMessage(message) {
    setMessages([...messages, { text: message, fromUser: true }]);
    // Call an API to get the chatbot's response
    // and add it to the messages list
  }

  // Function to handle OTP authentication
  function sendOTP(mobileNumber) {
    // Call an API to send OTP to the given mobile number
  }

  function verifyOTP(otp) {
    // Call an API to verify the OTP and authenticate the user
    setIsAuthenticated(true);
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Programming Q&A Chatbot</h3>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.fromUser ? "from-user" : ""}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message here..." />
            <button className="send-btn">Send</button>
          </div>
        </div>
      ) : (
        <div className="otp-container">
          <div className="otp-header">
            <h3>OTP Authentication</h3>
          </div>
          <div className="otp-form">
            <input type="text" placeholder="Enter your mobile number" />
            <button className="send-otp-btn">Send OTP</button>
            <input type="text" placeholder="Enter OTP" />
            <button className="verify-otp-btn">Verify OTP</button>
          </div>
        </div>
      )}
    </div>
  );
}
