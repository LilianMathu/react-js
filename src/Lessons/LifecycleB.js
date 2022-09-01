import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("Lifecylce B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("Lifecycle B componenetDidMount");
  }

  render() {
    console.log("Lifecycle B render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
