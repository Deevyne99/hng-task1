import React from 'react'
import zuri from '../images/zuri.png'
import ingressive from '../images/I4G.png'
const Footer = () => {
  return (
    <footer>
      <div className='section-footer'>
        <div className='img-footer'>
          <img className='zuri-logo' src={zuri} alt='' />
        </div>
        <div className='img-footer'>
          <p className='hng-text'>HNG Internship 9 Frontend Task</p>
        </div>
        <div className='img-footer'>
          <img src={ingressive} alt='ingressive logo' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
