// RequestAsset.js
import React, { Component } from "react";

class RequestAsset extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="assetName" placeholder="Asset Name" />
        <input type="submit" value="Request Asset" />
      </form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send request to server
  };
}

export default RequestAsset;