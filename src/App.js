import logo from './logo.svg';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <p>Hello!</p>
        <Routes>
          <Route path="/" element={<Home/>}>
            {/* <Home /> */}
          </Route>
          <Route path="/" element={<about/>}>
            {/* <About /> */}
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
