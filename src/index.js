import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css"
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer';

const App = () => {
    return (
      <div className="app">
        <Header />
        <Route exact path="/"><Welcome/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/projects"><Projects/></Route>
        <Footer/>
      </div>
    );
  }
  
  ReactDOM.render(
    <Router>  
    <App />
    </Router>,
    document.getElementById('app'),
  );
