import { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Karibu",
    };
  }

  handleClick = () => {
    this.setState({
      message: "Asante kwa kujiandikisha",
    });
  };

  render() {
    return (
      <div>
        <h6>{this.state.message}</h6>
        <button onClick={this.handleClick}>Subscribe</button>
      </div>
    );
  }
}

export default Welcome;
