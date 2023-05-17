import React, { Component } from "react";

import UserList from "./UserList";
import AssetList from "./AssetList";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <h2>Dashboard</h2>
          <p>This is the dashboard.</p>
        </div>
        <nav>
          <ul>
            <li><a href="/users">Users</a></li>
            <li><a href="/assets">Assets</a></li>
            <li><a href="/requests">Requests</a></li>
          </ul>
        </nav>
        <UserList />
        <AssetList />
      </div>
    );
  }
}

export default Home;
