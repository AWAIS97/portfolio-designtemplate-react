import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
  <Router>
    <Navbar/>
    <Main/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
