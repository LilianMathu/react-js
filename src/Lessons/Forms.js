import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleNameChange = (event) => {
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
            onChange={this.handleNameChange}
          />
        </div>
      </form>
    );
  }
}

export default Forms;
