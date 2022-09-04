import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert, Breadcrumb} from 'react-bootstrap'

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
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>Test
        </Breadcrumb>
        <Alert variant="danger">This is a Button</Alert>
        <Button>Test Button</Button>
        <Navbar />;
        <Home />;
        <About />;
        <Portfolio />;
        <Contact />;
        <Resume />;
       
      </div> 
  );
}


export default App;