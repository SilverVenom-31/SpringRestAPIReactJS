import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Registration from "./components/Registration";
import RegDetails from "./components/RegDetails";

class App extends Component {
  render(){
  return (
    <div className="App">
       <Router>
        
        
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/register" exact component={() => <Registration />} />
          <Route path="/details" exact component={() => <RegDetails />} />
          </Switch>
       
      </Router>
    </div>
  );
}
}

export default App;
