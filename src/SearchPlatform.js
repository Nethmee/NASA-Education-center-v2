import React from "react";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { fas-fa- } from '@fortawesome/free-solid-svg-icons';
import searchIcon from "./Assets/search4.png";
import headerSection from "./headerSection";
import "./SearchPlaform.css";

class SearchPlatform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      results: [],
    };
  }

  getResults = () => {
    let term = this.state.searchQuery;

    axios
      .get(`https://images-api.nasa.gov/search?q=${term}&media_type=image`)
      .then((res) => {
        let results = res.data.collection.items;
        console.log("result " + results);
        this.setState({
          results: results,
        });
      });
  };

  renderimages = () => {
    this.state.results.map((item) => {
      console.log("x  koji:  " + JSON.stringify(item));
      return <p>hii</p>;
    });
  };

  renderSearch(e) {
    console.log(e.target.value);
    let searchQuery = e.target.value;
    this.setState({
      searchQuery: searchQuery,
    });
  }

  render() {
    console.log(this.state.results);

    return (
      <div className="App">
        <div class="header">
          <h1>NASA</h1>
          <h6>Hello, Nethmee</h6>
        </div>

        <div className="search-bar">
          <input
            className="search-placeholder"
            type="text"
            onChange={(e) => {
              this.renderSearch(e);
            }}
            placeholder="Search"
          />

          <button className="search-btn" onClick={this.getResults}>
            <img src={searchIcon} />
          </button>
          {/*  <input type="submit"  value="Search" onClick={this.getResults}/> */}
        </div>

        <div className="result">
          {this.state.results.length > 0 ? (
            <p>Search results for the term {this.state.searchQuery}</p>
          ) : (
            ""
          )}
          {this.state.results.map((x) => {
            console.log("x  koji:  " + JSON.stringify(x));

            return (
              <img
                src={x.links[0].href}
                style={{ width: "20%", height: "200px", position: "relative" }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchPlatform;
