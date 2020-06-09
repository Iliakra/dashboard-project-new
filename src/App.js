import React from "react";
import "./App.css";
import { data } from "./report.js";
import BannerList from "./components/BannerList";

function App() {
  return (
    <div className="App">
      <BannerList data={data} />
    </div>
  );
}

export default App;
