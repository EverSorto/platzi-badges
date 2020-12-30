import React from "react";

import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from '../components/Badge'
import BadgeForm from "../components/BadgesForm"
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="badgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Ever"
                lastName="Sorto"
                twitter="EverSorto"
                inspiraion="fullStack developer"
              />
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
