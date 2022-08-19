import React from 'react';
import '../styles/About.css';
import coverImage from '../assets/portpic.png';



function About() {
  return (
    <section name='about' className="mytag">
      <h1 className="about-me">About Me</h1>
      <div className="bgC">
        <h2 className='me'>Hi, my name is </h2>
        <h1 className='me'>Mayra Ibarra</h1>
        <div>
          <img src={coverImage}/>
        </div>
        
        <p className='myName'>
          I provide digital products that are creative and user-friendly.
          My services are perfect for small businesses and for personal use.
          I design and create realiable websites that will strengthen your standards
          and online visibility.
        </p>
      </div>
    </section>
  );
}

export default About;
