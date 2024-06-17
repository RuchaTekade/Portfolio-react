import React, { useState } from "react";
import "./Footer.css";
import footer_logo from "../../Assets/logo.png";
import user_icon from "../../Assets/user_icon.svg";

const Footer = () => {
  // State to manage email input value and subscription status
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle subscription submission
  const handleSubscribe = () => {
    // Implement your subscription logic here, e.g., send email to backend
    // For demo purposes, we'll just show an alert and mark as subscribed
    alert(`Subscribing with email: ${email}`);
    setSubscribed(true);
    setEmail(""); // Clear input after submission if needed
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>
            Ready to discuss your project? Reach out to me for inquiries,
            collaborations, or just to say hello. Let's connect and turn your
            web development vision into reality.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Rucha Tekade. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      {subscribed && <div className="subscribe-alert"></div>}
    </div>
  );
};

export default Footer;
