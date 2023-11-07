import React from "react";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import Header from "./Header";

function Dashboard() {
  return (
    <div className="main-container">
      <Header />
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
}

export default Dashboard;
