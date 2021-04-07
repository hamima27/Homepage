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
            <body>
              <header className="App-header">
                {/*Contains the search bar and takes input from the user*/}
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
              </header>
            </body>
            <div>
              <img
                className="pic"
                src="https://cdn.dribbble.com/users/1387417/screenshots/6614987/image.png?compress=1&resize=900x712"
                alt="pic"
              />
            </div>
          </Router>
        </main>
      </div>
    </>
  );
}

export default App;
