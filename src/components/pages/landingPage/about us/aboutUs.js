import React from "react";
import "./aboutUs.scss";

export default function aboutUs() {
  return (
    <div id="aboutUs" className="about-us-container">
      <div className="about-us-heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-us-main">
        <div className="about-us-hr">
            <div></div>
        </div>
        <div className="about-us-content">
          <p>
            NASA is led by Administrator Jim Bridenstine, NASA's 13th
            administrator. Before joining NASA, Bridenstine served in the U.S.
            Congress, representing Oklahoma’s First Congressional District,
            serving on the Armed Services Committee and the Science, Space and
            Technology Committee. Bridenstine’s career in federal service began
            in the U.S. Navy, flying the E-2C Hawkeye off the USS Abraham
            Lincoln aircraft carrier. NASA is led by Administrator Jim
            Bridenstine, NASA's 13th administrator. Before joining NASA,
            Bridenstine served in the U.S. Congress, representing Oklahoma’s
            First Congressional District, serving on the Armed Services
            Committee and the Science, Space and Technology Committee.
            Bridenstine’s career in federal service began in the U.S. Navy,
            flying the E-2C Hawkeye off the USS Abraham Lincoln aircraft
            carrier.
          </p>
        </div>
        <div className="about-us-images">
            <img src="https://images.pexels.com/photos/2538107/pexels-photo-2538107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
      </div>
      <div className="about-us-footer">
        <div className="footer-elements">
          <h2>128,000</h2>
          <h4>People</h4>
        </div>
        <div className="footer-elements">
          <h2>128,000</h2>
          <h4>People</h4>
        </div>
        <div className="footer-elements">
          <h2>128,000</h2>
          <h4>People</h4>
        </div>
      </div>
    </div>
  );
}
