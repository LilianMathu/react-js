import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome parent",
    };
  }

  greetParent = (childName) => {
    alert(`${this.state.message} from ${"Lilian"}`);
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
