import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <h2>Hi Lilian</h2>;
    } else {
      message = <h2>Hi Guest</h2>;
    }
    return <div>{message}</div>;
  }
}

export default ConditionalRendering;
