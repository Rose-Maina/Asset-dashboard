import React, { Component } from "react";
import { getStorageData } from "../utils/Storage";

class AssetList extends Component {
  render() {
    const assets = getStorageData("assets");
    return (
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>{asset.name}</li>
        ))}
      </ul>
    );
  }
}

export default AssetList;