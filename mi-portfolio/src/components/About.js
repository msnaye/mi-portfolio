import React from 'react';
import '../styles/About.css';
import coverImage from '../assets/portpic.png';



function About() {
  return (
    <section name='about' className="mytag">
      <h1 className="about-me">About Me</h1>
      <div className="bgC">
        
        <div>
          <img src={coverImage}/>
        <p>Hi, I am Mayra, it's very nice to meet you. Please checkout my portfolio.</p>
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
