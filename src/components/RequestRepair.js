// RequestRepair.js
import React, { Component } from "react";

class RequestRepair extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="assetName" placeholder="Asset Name" />
        <input type="text" name="description" placeholder="Description of Repair" />
        <input type="submit" value="Request Repair" />
      </form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send request to server
  };
}

export default RequestRepair;