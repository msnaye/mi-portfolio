import React from 'react';
import './App.css';

//import components
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Home from './components/Home';





function App(){
  return ( 
      <div>
        <Home />;
        <About />;
        <Navbar />;
        <Portfolio />;
        <Contact />;
        <Resume />;
       
      </div> 
  );
}


export default App;