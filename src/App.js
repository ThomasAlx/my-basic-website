import logo from './logo.svg';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

import styles from './styles/General.module.css'

class App extends React.Component {
  render() {
    return (
        <body>
        <nav class={styles.nav}>
          <div>
            <Link to="/">
              <button class={styles.button_nav}>Home</button>
            </Link>
            <Link to="/about">
              <button class={styles.button_nav}>About</button>
            </Link>
            <Link to="/contact">
              <button class={styles.button_nav}>Contact</button>
            </Link>
          </div>
        </nav>
        <main class={styles.page_container}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
        <footer className={styles.foot}>
          <p>This is the footer</p>
        </footer>
        
      </body>
      
    );
  }
}

export default App;
