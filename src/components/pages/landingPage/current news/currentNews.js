import React, { Component } from "react";
import "./currentNews.scss";

export default class currentNews extends Component {
  render() {
    return (
      <div id="currentNews" className="current-news-container">
        <div className="overlay">
          <div className="current-news-content">
            <div className="current-news-heading">
              <h2>CURRENT NEWS</h2>
            </div>
            <div className="current-news-body">
                <div className="body-left"></div>
                <div className="body-right"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
