import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PhotoOftheDay from '../photo of th e day/photoOFtheDay';
import './intro.scss';

export default class intro extends Component {
    render() {
        return (
            <div className="intro-container">
           {/*  <div className="social-media-container">

            </div>
            <div className="welcome-main-container">
                <div className="welcome-text">
               <h4> HELLO ASTRONAUT!</h4>
               <h2> WELCOME TO NASA</h2>
                </div>
                
                <div className="button-card">
                <Link to="/gallery"></Link>

                    <div className="gallery button"><a href="#aboutUs">aboutUs</a></div>
                    <div className="people button"><a href="#currentNews">currentNews</a></div>
                    <div className="patent button"><a href="#newsLetter">newsLetter</a></div>
                </div>
            </div>
            <div className="photoOftheDay-wrapper">
            <PhotoOftheDay/>
            </div> */}
           
            </div>
        )
    }
}
