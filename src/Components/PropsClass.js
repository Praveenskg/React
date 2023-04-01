import React, { Component } from "react";

export default class PropsClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Pranjal",
    };
  }
  render() {
    return (
      <div>
        <h2>name:{this.props.name}</h2>
      </div>
    );
  }
}
