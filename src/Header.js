import React, { Component } from "react";

import background from "./images/work2.jpeg";

import "./Header.css";

const newStyle = {
  backgroundImage: `url(${background} )`,
  height: "50vh",
  backgroundSize: "cover",
  opacity: 0.9,
};

export default class Header extends Component {
  render() {
    return (
      <header style={newStyle}>
        <h1>{this.props.title} </h1>
        <p>Let Us Build Your Website </p>
        <a href="button">{this.props.button} </a>
      </header>
    );
  }
}
