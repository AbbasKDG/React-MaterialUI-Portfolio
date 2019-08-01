import React from "react";
import "./App.css";
import "typeface-roboto";
import Banner from "./components/Banner/banner.js";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import About from "./components/about.js";
// import Projects from "./components/projects.js";

const App = () => {
  return (
    <div>
      <Banner />

      <br />
    </div>
  );
};

export default App;

// Ask Name of visitor and pass it in as a prop // kind of like a pop up on top of website that blurs website beneath it
// Route to a AskName Component -Blurred background
// <Banner />
