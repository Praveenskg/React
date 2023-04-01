import React, { Component } from "react";

export default class StateClass extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  render() {
    return (
      <div>
        State In Class
        <h1>{this.state.data}</h1>
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          {" "}
          Update Data{" "}
        </button>
      </div>
    );
  }
}
