import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="app">
        <main>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact />
            </Switch>
            <div className="container">
              <span id="box-holder">
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
              </span>
            </div>
            <body>
              {/*<header className="App-header">
                <div className="column">
                 <div className="container">
                   <span id="box-holder">
                     <input
                        className="search-bar"
                        type="search"
                        placeholder="Search"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                     />
                   </span>
                  </div>
                </div>
            </header>*/}
            </body>
            <div className="row">
              <div className="column">
                <img
                  className="pic"
                  src="https://static.wixstatic.com/media/74f558_10aab65e4bad4b5b9a168ee1695f4e03~mv2.jpg/v1/fill/w_1744,h_1192,al_c,q_90,usm_0.66_1.00_0.01/aaron-huber-oMOx_wV6mLQ-unsplash.jpg"
                  alt="pic"
                />
              </div>
              <br></br>
              <br></br>
            </div>
            <div className="google-map-container">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="map-header">MAP VIEW</h1>
              <p className="map-header-2">
                <em>here is the view of the flats near you</em>
              </p>
              <img
                className="map"
                src="https://static.wixstatic.com/media/8c09aa_71a0c15ac5604d3f8fbc3277b3f47549~mv2.png/v1/fill/w_1200,h_954,al_c,usm_0.66_1.00_0.01/Screenshot%202021-04-06%20at%2018_54_21.png"
                alt="pic"
              />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </Router>
        </main>
        <footer>
          <p className="footer-container">
            <em>Contact Us</em>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
