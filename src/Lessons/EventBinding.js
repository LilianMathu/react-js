import { Component } from "react";

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  handleClick() {
    this.setState({
      message: "Goodbye!",
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleClick.bind(this)}>Click!</button>
      </div>
    );
  }
}

export default EventBinding;
