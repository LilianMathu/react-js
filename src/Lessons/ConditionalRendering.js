import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <div>Hello Lilian</div>;
    } else {
      return <div>Hello Guest</div>;
    }
  }
}

export default ConditionalRendering;
