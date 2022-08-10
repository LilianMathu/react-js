import React, { Component } from "react";

class DestructuringInClass extends Component {
  render() {
    const { name, heroName } = this.props;
    const { state1, state2 } = this.state;
    return (
      <div>
        <h3>
          Welcome to my {name} a.k.a {heroName} channel
        </h3>
      </div>
    );
  }
}

export default DestructuringInClass;
