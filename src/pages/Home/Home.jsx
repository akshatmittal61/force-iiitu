import React from 'react'
import man from '../../images/man.svg'
import './home.css'

const Home = () => {
  return (
    <main className='home'>
      <section className='home-hero'>
        <div className='home-hero-image' style={{backgroundImage: `url(${man})`}}></div>
		<div className='home-hero-content'>
			<span className='home-hero-content__h1'>FORCE</span>
			<span className='home-hero-content__h2'>Forum of computer engineers</span>
		</div>
      </section>
    </main>
  )
}

export default Home