import React, { Component } from "react";
import "./Services.css";

export default class Servies extends Component {
  render() {
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>what we offer</h2>
        <div className="row">
          <Icons
            newIcon={icon[0].icon}
            newTitle={icon[0].title}
            newDesc={icon[0].description}
          />
          <Icons
            newIcon={icon[1].icon}
            newTitle={icon[1].title}
            newDesc={icon[1].description}
          />
          <Icons
            newIcon={icon[2].icon}
            newTitle={icon[2].title}
            newDesc={icon[2].description}
          />
          <Icons
            newIcon={icon[3].icon}
            newTitle={icon[3].title}
            newDesc={icon[3].description}
          />
        </div>
      </div>
    );
  }
}

const icon = [
  {
    icon: <i class="fas fa-mobile-alt"></i>,
    title: "Responsive",
    description: "Looks great on any screen",
  },
  {
    icon: <i class="fas fa-pencil-alt"></i>,
    title: "Redesigned",
    description: "Bold Fresh New Look",
  },
  {
    icon: <i class="far fa-thumbs-up"></i>,
    title: "Favorite",
    description: " Millions Like Our Products",
  },
  {
    icon: <i class="fas fa-question-circle"></i>,
    title: "Question",
    description: "Simply Ask a Question",
  },
];

class Icons extends Component {
  render() {
    return (
      <div>
        <span>{this.props.newIcon}</span>
        <h4>{this.props.newTitle} </h4>
        <p>{this.props.newDesc} </p>
      </div>
    );
  }
}
