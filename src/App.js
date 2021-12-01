import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import dpLogo from "./DP-Logo-Full.svg";
import reactLogo from "./react-logo.svg";
import "./App.css";

const App = function AppRoot() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Splash />
    </div>
  );
};

const About = function About() {
  return (
    <div>
      <h2>About</h2>
      <Splash />
    </div>
  );
};

const Dashboard = function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Splash />
    </div>
  );
};

const Splash = function Splash() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logos">
          <img src={dpLogo} className="App-logo" alt="dp" />
          <img src={reactLogo} className="App-logo" alt="react" />
        </div>
        <p>DP React</p>{" "}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
