import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Nav from "./Nav";
import Services from "./Services";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Nav logoTitle="Andy's Web Services" />
        <Header title="Elite Web Developers" button="Find Out More" />
        <Services />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
