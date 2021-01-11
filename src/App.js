import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import "./App.scss";
import axios from "axios";
import SearchPlatform from "./SearchPlatform";
import LandingPage  from './components/pages/landingPage/home';
import Gallery from './components/pages/gallery/gallery';
import People from './components/pages/people/people';
import Publications from './components/pages/publications/publications';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import BasicLayout from './components/shared/basic Layout/basicLayout';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    console.log(this.state.results);

    return (
      <div className="app-container">
      
      <BrowserRouter>
      <BasicLayout>
      <Header/>

      <Switch>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={LandingPage}/>
      <Route path="/landing" exact component={LandingPage}/>
      <Route path="/gallery" exact component={Gallery}/> 
      <Route path="/people" exact component={People}/>
      <Route path="/publications" exact component={Publications}/> 

      </Switch>
      </BasicLayout>
      <Footer/>
      
      </BrowserRouter>


        {/* <SearchPlatform /> */}

      
      </div>
    );
  }
}

export default App;
