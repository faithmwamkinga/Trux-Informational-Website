import React from "react";
import { FaUsers, FaHeart } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";

import "./style.css";

const Values = () => {
  return (
    <div id="features" className="values-container">
      <div className="section-title">
        <h2 className="values">Our Values</h2>
      </div>
      <div className="values-grid">
        <div className="value">
          <div>
          <FaUsers />
          </div>
          <h3>Team Work</h3>
          <p>
          We embrace collaboration, harnessing diverse talents to achieve common goals and create impact solution
          </p>
        </div>
        <div className="value">
          <div>
          <FaHeart />
          </div>
          <div>
          <h3>Empathy</h3>
          <p>
          We prioritize understanding and connecting with the needs and experiences of others
          </p>
          </div>
        </div>
        <div className="value">
          <div className="value-sg">  <IoTrendingUp  /></div>
          <div className="growth">
          <h3 >Growth</h3>
          <p className="growth-p">
          We embrace continous learning adapting to challenges and evolving our solutions with a growth mindset we strive to create lasting positive impact
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
