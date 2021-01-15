import React, { Component } from 'react';
import Header from '../../shared/header/header';
import './home.scss';
import Footer from '../../shared/footer/footer';
import Intro from '../landingPage/introduction/intro/intro';
import AboutUs from '../landingPage/about us/aboutUs';
import CurrentNews from './current news/currentNews';
import NewsLetter from './news letter/newsLetter';

import Mission from './mission/mission';

 class home extends Component {
     test;;;
    render() {
        return (
            <> 
           
            <div className="home-container"> 
            
               <Header/>
               <Intro/>
               
            </div>
             {/*  <AboutUs/> 
            <CurrentNews/>
            <Mission/>
            <NewsLetter/>  */}
            <Footer/>  
            </>
        )
    }
}

export default  home; 