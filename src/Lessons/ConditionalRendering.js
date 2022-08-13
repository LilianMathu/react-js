import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Hi Lilian</div>;
  }
}

export default ConditionalRendering;
