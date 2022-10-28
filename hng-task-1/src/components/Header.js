import React from 'react'
import profilePic from '../images/image.png'
import share from '../images/share.png'
import mobile from '../images/mobile-share.png'
const Header = () => {
  return (
    <section className='profile-section'>
      <div className='content'>
        <div className='img-container'>
          <img src={profilePic} alt='profile ' id='profile_img' />
        </div>
        <button className='share'>
          <img className='desktop' src={share} alt='' />
          <img className='mobile' src={mobile} alt='' />
        </button>
      </div>
      <p id='twitter'>Kalu Divine</p>
      <p id='slack'>Anonymous</p>
    </section>
  )
}
export default Header
