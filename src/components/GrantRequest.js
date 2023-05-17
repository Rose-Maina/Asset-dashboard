// GrantRequest.js
import React, { Component } from "react";

class GrantRequest extends Component {
  render() {
    return (
      <ul>
        {this.state.requests.map((request) => (
          <li key={request.id}>
            <h3>{request.assetName}</h3>
            <p>{request.description}</p>
            <button onClick={this.handleGrantRequest}>Grant Request</button>
          </li>
        ))}
      </ul>
    );
  }

  state = {
    requests: []
  };

  componentDidMount() {
    // TODO: Get requests from server
  }

  handleGrantRequest = (id) => {
    // TODO: Grant request
  };
}

export default GrantRequest;