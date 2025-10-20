import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "13095912-aa55-4f4f-a5e5-78069af01443");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      
      alert("Form submitted successfully");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact_title">
        <h1>Get in touch 📞</h1>
      </div>
      <div className="contact_section">
        <div className="contact_left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to talk, currently looking for job with
            skills and efforts.
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <img src={mail_icon} alt="" />
              <p>admin@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img src={call_icon} alt="" />
              <p>+91 9892041266</p>
            </div>
            <div className="contact_detail">
              <img src={location_icon} alt="" />
              <p>Mumabi, Maharashtra, India.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact_right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="2"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact_submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
