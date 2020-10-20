import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
  <Router>
  <ScrollToTop/>
    <Navbar/>
    <Switch> 
      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={AboutPage}/>
      <Route path='/services' exact component={ServicesPage}/>
      <Route path='/portfolio' exact component={PortfolioPage}/>
      <Route path='/contact' exact component={ContactPage}/>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
