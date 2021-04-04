import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import CandidateReg from "../service/CandidateReg";

class RegDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phono: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
      country: "",
      msg: "",
    };
  }

  componentDidMount() {
    this.loadSummary();
  }

  loadSummary() {
    let email = localStorage.getItem("email");

    CandidateReg.getCandidateDets(email).then((res) => {
      this.setState({
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        address: res.data.address,
        city: res.data.city,
        zipcode: res.data.zipcode,
        state: res.data.state,
        country: res.data.country,
        phono: res.data.phono,
        email: res.data.email,
        msg: localStorage.getItem("session_msg"),
      });

      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="container">
        <div>
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
                  <h4 id="hf">CANDIDATE DETAILS</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br />
        <h2>{this.state.msg}</h2>
        <h3>Candidate Details</h3>
        <div>
          <div className="col-md-4">Firstname: {this.state.firstname}</div>
        </div>{" "}
        <br />
        <div>
          <div className="col-md-4">Lastname: {this.state.lastname}</div>
        </div>{" "}
        <br />
        <div>
          <div className="col-md-4">Email: {this.state.email}</div>
        </div>{" "}
        <br />
        <div>
          <div class="col-md-4">Phone No: {this.state.phono}</div>
        </div>
        <br />
        <div>
          <div className="col-md-4">Address: {this.state.address}</div>
        </div>{" "}
        <br />
        <div>
          <div className="col-md-4">City: {this.state.city}</div>
        </div>{" "}
        <br />
        <div>
          <div className="col-md-4">Zipcode: {this.state.zipcode}</div>
        </div>{" "}
        <br />
        <div>
          <div className="col-md-4">State: {this.state.state}</div>
        </div>{" "}
        <br />
        <div>
          <div className="col-md-4">Country: {this.state.country}</div>
        </div>{" "}
        <br />
        <Button class="btn btn-success" data-abc="true" type="submit">
          <Link to="/">Go to Main menu</Link>
        </Button>
      </div>
    );
  }
}
export default withRouter(RegDetails);
