
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';





function App(){
  return ( 
      <div>
        <About />;
        <Navbar />;
        <Portfolio />;
        <Contact />;
        <Resume />;
       
      </div> 
  );
}


export default App;