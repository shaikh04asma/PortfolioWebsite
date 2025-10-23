import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/mati_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Matiur Rehman,</span> Visual Merchandiser Based in India</h1>
      <p>I am a visual merchandiser from Mumbai India, with 9 years of 
        experience in H&M Comapny. </p>
        <div className="hero_action">
            <div className="hero_connect"><AnchorLink className="anchor_link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero_resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
