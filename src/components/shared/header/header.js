import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';


const  header =() => {
    return (
        <div className="header-container">
           <div className="logo-container">
               <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo"/>
           </div>
           <div className="nav-container">
               <ul>
                   <li><Link to="/home">Home</Link></li>
                   <li><Link to="/people">Poeple</Link></li>
                   <li><Link to="/gallery">Gallery</Link></li>
                   <li><Link to="/publication">Publications</Link></li>
                   <li><Link to="/missions">missions</Link></li>
               </ul>
           </div>
        </div>
    )
}
export default header; 

