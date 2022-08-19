import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/"><Welcome/></Route>
    </div>
  );
}

ReactDOM.render(
  <Router>
    
  <App />
  
  </Router>,
  document.getElementById('app'),
);
