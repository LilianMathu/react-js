import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Lilian</div>;
    } else {
      message = <div>Welcome guest</div>;
    }
    return <div>{message}</div>;
  }
}

export default ConditionalRendering;
