import React, { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState(
      (prevState, props) => ({
        count: prevState.count + props.example,
      }),
      () => console.log(`Callback value: ${this.state.count}`)
    );
  };
  render() {
    return (
      <div>
        <h6>Count = {this.state.count}</h6>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default SetState;
