import React, { Component } from "react";
import "./photoOftheDay.scss";

export default class photoOFtheDay extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="title-container">
            <div className="date-section"><p></p></div>
            <div className="title-section">Astronomy Picture of the Day</div>


        </div>
        <div className="body">
              <div>
                <img src="https://apod.nasa.gov/apod/image/2012/ConjunctionPanorama1-S2.jpg"/>
              </div>
            <p>Astronomy Picture of the Day is a website provided by NASA and Michigan Technological University. According to the website, "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer.</p>
        </div>
      </div>
    );
  }
}
