import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import Header from './Header/header';
import { Quiz } from './Quiz/Quiz';
import Footer from './Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <h1>MarsioKart</h1>
        <Header/>
        <Routes>
          <Route path='/'
          element={<Home/>}/>
          <Route path='/quiz'
          element={<Quiz/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
