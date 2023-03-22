import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Weather from "./components/Weather";
import Nav from "./components/Nav";

//pages
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

//other
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Weather></Weather>
        <Routes>
          <Route path="/" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
