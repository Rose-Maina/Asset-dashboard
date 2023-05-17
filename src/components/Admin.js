// Admin.js
import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <ul>
          <li><a href="/users">Users</a></li>
          <li><a href="/assets">Assets</a></li>
          <li><a href="/request-asset">Request Asset</a></li>
          <li><a href="/request-repair">Request Repair</a></li>
          <li><a href="/grant-request">Grant Request</a></li>
        </ul>
      </div>
    );
  }
}

export default Admin;