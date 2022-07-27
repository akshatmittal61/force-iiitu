import React from 'react'
import './home.css'
import logo from '../../images/logo.png'
import headerImage from '../../images/Untitled-1.png'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {


  function menu() {
    const humbuerger = document.querySelector('.humburger');
    const humbuergerLine = document.querySelectorAll('.humburger-line');

    humbuergerLine.forEach((element) => {
      element.classList.toggle('menu');
    });

    const navbar = document.querySelector('.nav__list__container')
    navbar.classList.toggle('nav__list__container-menu');
    humbuerger.classList.toggle('humburger-menu');;


  }


  return (
    <>
      <header class="home__header">
        <nav>
          <div class="nav__logo__container">
            <img src={logo} alt="" />
          </div>

          <div class="nav__list__container">
            <ul>
              <li><a href="index.html">Home</a> <div className='active'></div></li>
              <li><a href="about.html">About Us</a><div></div></li>
              <li><a href="gallery.html">Our Team</a><div></div></li>
              <li><a href="contact-us.html">Events</a><div></div></li>
              <li><a href="contact-us.html">Contact Us</a><div></div></li>
            </ul>
          </div>

        </nav>

        <div className='header__container'>
          <div className='header__image__container'>
            <img src={headerImage} alt="" />
          </div>

          <div className='header__data__container'>
            <h1>WE STRIVE TO <br /> SUCCESS</h1>
            <p>In Association with IIIT UNA</p>
            <div> 
              <button className='btn-primary'>Know More</button>
              <button className='btn-secondary'>Contact Us</button>
            </div>
          </div> 
        </div>

        <div class='humburger' onClick={menu}>
          <div class='humburger-line'></div>
          <div class='humburger-line'></div>
          <div class='humburger-line'></div>
        </div>
        
      </header>

      <AboutUs/>
    </>
  )
}

export default Home