import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default Forms;
