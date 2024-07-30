import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>MarsioKart</h1>
        <div><Header/></div>
        <Routes>
          <Route path='/'
          element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
