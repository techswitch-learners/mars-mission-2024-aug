import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import Header from './Header/Header'
import { Quiz } from './Quiz/Quiz';
import Footer from './Footer/Footer';

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route path='/'
            element={<Home username={username} setUsername={setUsername}/>} />
          <Route path='/quiz'
            element={<Quiz username={username}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
