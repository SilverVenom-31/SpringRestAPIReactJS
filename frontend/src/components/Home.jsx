import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top py-lg-0">
            <div>
              <Link class="navbar-brand" to="/">
                <img
                  id="im"
                  src="https://www.townscript.com/v2/assets/images/ts-bms-logo.svg"
                  alt="TimingIndia"
                  width="10%"
                />
              </Link>
            </div>
            <div>
              <ul class="navbar-nav ml-auto">
                <li>
                  <h4 id="hf">SAFE CHECKOUT</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br></br>
        <br></br>
        <div id="na">
          &nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-left"></i>{" "}
          <strong> New Gurugram HM</strong>
          <br></br>
          <span class="sp"></span> 28 Mar 2021 | 5:30 AM IST Onwards | Karma
          Lakelands
        </div>
        <br />
        <br />
        <br />
        <hr />
        &nbsp;&nbsp;&nbsp;
        <Button id="na" class="btn btn-primary btn-outline-info btn-sm mt-2 ">
          <Link to="/register">Register Candidate</Link>
        </Button>
      </div>
    );
  }
}
export default Home;
