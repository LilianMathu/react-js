import { Component } from "react";

class EventHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 20,
    };
  }

  handleClick = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>
          My name is {this.props.name}. I am {this.state.age} years
        </h3>
        <button onClick={this.handleClick}>Add year!</button>
      </div>
    );
  }
}

export default EventHandling;
