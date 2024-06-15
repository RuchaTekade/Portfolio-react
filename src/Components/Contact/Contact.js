import React from "react";
import "./Contact.css";
import theme_pattern from "../../Assets/theme_pattern.svg";
import mail_icon from "../../Assets/mail_icon.svg";
import location_icon from "../../Assets/location_icon.svg";
import call_icon from "../../Assets/call_icon.svg";

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efe46c79-1104-4f0c-b679-bb4ab8617a34");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
     event.target.reset();
    }
  };


  return (
    <div  id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ruchatekade@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>+772-887-123</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>Maharashtra,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlfor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlfor="">Your Email</label>
          <input type="text" placeholder="Enter your name" name="email" />
          <label htmlfor="">Write your message here</label>
          <textarea name="messsage" rows="8" placeholder="Enter Your message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
