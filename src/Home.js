import React from "react";
import Create from "./Create";
import Navbar from "./Navbar";
import Feed from "./Feed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/signin">
            <Navbar />
            <Create />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
