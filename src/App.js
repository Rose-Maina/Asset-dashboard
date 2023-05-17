import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList";
import AssetList from "./components/AssetList";
import RequestAsset from "./components/RequestAsset";
import RequestRepair from "./components/RequestRepair";
import GrantRequest from "./components/GrantRequest";
import Admin from "./components/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/assets">
            <AssetList />
          </Route>
          <Route exact path="/request-asset">
            <RequestAsset />
          </Route>
          <Route exact path="/request-repair">
            <RequestRepair />
          </Route>
          <Route exact path="/grant-request">
            <GrantRequest />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
