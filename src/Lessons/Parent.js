import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome parent",
    };
  }

  greetParent = () => {
    alert(`${this.state.message}`);
  };

  render() {
    return (
      <div>
        <Child handleClick={this.greetParent} />
      </div>
    );
  }
}

export default Parent;
