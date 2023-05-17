import React, { Component } from "react";
import { getStorageData } from "../utils/Storage";

class UserList extends Component {
  render() {
    const users = getStorageData("users");
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserList;
