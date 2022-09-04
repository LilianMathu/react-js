import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "I am A",
    };
    console.log("Component A - constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Component A - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Component A - componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component A - ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Component A - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.log("Component A - componentDidUpdate");
  }

  handleClick = () => {
    this.setState({
      message: "I have changed",
    });
  };

  render() {
    console.log("Component A - render");
    return (
      <div>
        {this.state.message}
        <button onClick={this.handleClick}>Click!</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
