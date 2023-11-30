import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";
import "./index.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearState = () => {
    setFormData({ ...initialState });
    setIsEmailSent(false);
  };

  useEffect(() => {
    if (isEmailSent) {
      const timeout = setTimeout(() => {
        setIsEmailSent(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isEmailSent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xgihpil", "template_vurq2x9", e.target, "ahG5sqQcK4TxfqPIV")
      .then((result) => {
        clearState();
        setIsEmailSent(true);
      });
  };

  return (
    <div id="contact">
      <div className="containers">
        <div className="get-in-touch">
          <div className="section-title">
            <h3>GET IN TOUCH</h3>
            <p>
              Please fill out the form below to send us an email, and we will
              get back to you as soon as possible.
            </p>
          </div>
          <form name="sentMessage" validate onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="inputs">
                <div className="name-input">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="email-input">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn-custom">
                Send
              </button>
            </div>
            {isEmailSent && (
              <p className="text-success">Email sent successfully!</p>
            )}
          </form>
        </div>
        <div className="contact-info">
          <h3>CONTACT INFO</h3>
          <div className="contact-info-content">
            <p>
              <span>
                <FaMapMarker /> Address
              </span>
              616, Korongo Road, Nairobi Kenya
            </p>
            <br />
            <p>
              <span>
                <FaPhone /> Phone
              </span>{" "}
              +254757770427
            </p>
            <br />
            <p>
              <span>
                <FaEnvelope /> Email
              </span>{" "}
              info@Nova.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
