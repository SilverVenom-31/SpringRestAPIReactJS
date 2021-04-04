import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import CandidateReg from "../service/CandidateReg";

class Registration extends Component {
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

      message: null,
    };
    this.addCandidate = this.addCandidate.bind(this);
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  addCandidate = (e) => {
    e.preventDefault();

    let candidate = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phono: this.state.phono,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      zipcode: this.state.zipcode,
      state: this.state.state,
      country: this.state.country,
    };
    CandidateReg.registerCandidate(candidate).then((res) => {
      // localStorage.setItem("msg","Candidate Registered successfully");

      localStorage.setItem("email", this.state.email);
      localStorage.setItem("session_msg", "successfully Registered");
      this.props.history.push("/details");
    });
  };
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
                  <h4 id="hf">CANDIDATE REGISTRATION</h4>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br />
        <h3>REGISTER CANDIDATE</h3>
        <form className="form">
          <div className="form-group">
            <label>Firstname</label>
            <div className="col-md-4">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="enter firstname"
                className="form-control"
                value={this.state.firstname}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>Lastname</label>
            <div className="col-md-4">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="enter lastname"
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>Email</label>
            <div className="col-md-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>Phone No</label>
            <div class="col-md-4">
              <input
                type="phono"
                name="phono"
                id="phono"
                placeholder="enter phoNo"
                className="form-control"
                value={this.state.phono}
                onChange={this.onChange}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label>Address</label>
            <div className="col-md-4">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="enter address"
                className="form-control"
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>City</label>
            <div className="col-md-4">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="enter city"
                className="form-control"
                value={this.state.city}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>Zipcode</label>
            <div className="col-md-4">
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="enter zipcode"
                className="form-control"
                value={this.state.zipcode}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>State</label>
            <div className="col-md-4">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="enter state"
                className="form-control"
                value={this.state.state}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group">
            <label>Country</label>
            <div className="col-md-4">
              <input
                type="text"
                name="country"
                id="country"
                placeholder="enter country"
                className="form-control"
                value={this.state.country}
                onChange={this.onChange}
              />
            </div>
          </div>{" "}
          <br />
          <div className="form-group col-md-4 text-center">
            <button
              onClick={this.addCandidate}
              className=" btn btn-primary"
              name="btn-register"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);
