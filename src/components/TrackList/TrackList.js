import React from "react";
import Track from "../Track";

import "./TrackList.css";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <Track />
        <Track />
        <Track />
      </div>
    );
  }
}

export default TrackList;
