import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor() {
    super();
    console.log("Lifecycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }

  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <h2>Lifecycle A render</h2>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
