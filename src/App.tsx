import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
// line below is just an example of what to import to use the DisplayPictureOfDay function
// import { DisplayPictureOfDay } from './images/Fetch
import { Quiz } from './Quiz/Quiz';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">

      {/* line below is just an example of what to import to use the DisplayPictureOfDay function */}
      <DisplayPicture />

      <Router>
        <h1>MarsioKart</h1>
          {/* line below is just an example of what to import to use the DisplayPictureOfDay function */}
          {/* <DisplayPictureOfDay /> */}
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
