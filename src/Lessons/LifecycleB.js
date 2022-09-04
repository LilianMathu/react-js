import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "I am B",
    };
    console.log("Lifecylce B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle B componenetDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component B - ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Component B - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.log("Component B - componentDidUpdate");
  }

  render() {
    console.log("Lifecycle B render");
    return <div>{this.state.message}</div>;
  }
}

export default LifecycleB;
