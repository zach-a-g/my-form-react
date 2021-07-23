import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showMessage: false
    };
  }

  _handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showMessage: true
    });
  };

  render() {
    const { message, showMessage } = this.state;
    return (
      <>
        <p>{!!showMessage ? message : "Enter a Message in the form below."}</p>
        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={this._handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </>
    );
  }
}

export default MyForm;
