import React from "react";
import "./Services.css";
import img1 from "../../assets/img.1.jpg"
import img2 from "../../assets/img.2.jpg"
import img3 from "../../assets/img.3.jpg"
import img4 from "../../assets/img.4.jpg"
import img5 from "../../assets/img.5.png"
import img6 from "../../assets/img.6.jpg"

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services_title">
        <h1>My Works 🤵</h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <img src={img1} alt="" />
          <div className="info">
            <h1>Retail Trend </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              temporibus...
            </p>
            <button className="btn">Read More...</button>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <div className="info">
            <h1>Store Layout</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              temporibus...
            </p>
            <button className="btn">Read More...</button>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <div className="info">
            <h1>Floor Set</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              temporibus...
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <div className="info">
            <h1>Retail Photography</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              temporibus...
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="card">
          <img src={img5} alt="" />
          <div className="info">
            <h1>Retail Analysis</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              temporibus...
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="card">
          <img src={img6} alt="" />
          <div className="info">
            <h1>Team Cordination</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              temporibus...
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
