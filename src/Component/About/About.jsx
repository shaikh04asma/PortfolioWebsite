import React from "react";
import "./About.css";
import about_profile from "../../assets/mati_profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about_title">
        <h1>About Me 😎</h1>
     
      </div>
      <div className="about_section">
        <div className="about_left">
          <img
            src={about_profile}
            style={{ width: "300px", height: "400px", borderRadius: "20px" }}
            alt=""
          />
        </div>
        <div className="about_right">
          <div className="about_para">
            <p>
              Results-driven Visual Merchandiser with 6+ years of experience in visual strategy, store layout design, and brand presentation to maximize sales and customer engagement.Proficient in visual guideline implementation, product display optimization, and maintaining brand consistency.
            </p>
            <p>
              Skilled in transforming concepts into compelling displays that
              elevate the customer experience.
            </p>
          </div>
          <div className="about_skills">
            <div className="about_skill">
              <p>Visual Merchandising</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>Store Layout</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>Floor Set</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>Retail Insights</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>Multi-Store Oops</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about_skill">
              <p>Trend Analysis</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about_skill">
              <p>Retail photography</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about_achievements">
        <div className="about_achievement">
          <h1>9+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about_achievement">
          <h1>3+</h1>
          <p>YEARS AS SALES ADVISOR</p>
        </div>
        <hr />
        <div className="about_achievement">
          <h1>2+</h1>
          <p>YEARS AS SALES CHAMP</p>
        </div>
      </div>
    </div>
  );
};

export default About;
