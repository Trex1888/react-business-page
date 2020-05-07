import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  render() {
    const items = ["Home", "About", "Services", "Portfolio", "Contact"];
    const nav = items.map((section) => {
      return (
        <li>
          <a href={"#" + section}>{section} </a>
        </li>
      );
    });
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle} </h2>
        <ul>{nav}</ul>
      </nav>
    );
  }
}

export default Nav;
