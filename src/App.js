import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/assets" element={<AssetList />} />
          <Route path="/request-asset" element={<RequestAsset />} />
          <Route path="/request-repair" element={<RequestRepair />} />
          <Route path="/grant-request" element={<GrantRequest />} />
          <Route path="/admin" element={<Admin />} />
    
        </Routes>
      </Router>
    );
  }
}

export default App;
