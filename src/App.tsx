import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import Header from './header';
import { Quiz } from './Quiz/Quiz';


function App() {
  return (
    <div className="App">
      <Router>
        <h1>MarsioKart</h1>
        <div><Header/></div>
        <Routes>
          <Route path='/'
          element={<Home/>}/>
          <Route path='/quiz'
          element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
