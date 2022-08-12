import { Component } from "react";

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitors",
    };
    this.handleClick = this.handleClick.bind(this);
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
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
}

export default EventBinding;
