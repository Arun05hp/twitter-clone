import React from "react";
import Sidebar from "./components/sideNavBar/Sidebar";
import Feed from "./components/mainFeed/Feed";
import Widgets from "./components/widgets/Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
