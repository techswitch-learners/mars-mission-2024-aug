import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>MarsioKart</h1>
        <Routes>
          <Route path='/'
          element={<Home/>}/>
        </Routes>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
