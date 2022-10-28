import React from 'react'
import zuri from '../images/zuri.png'
import ingressive from '../images/I4G.png'
const Footer = () => {
  return (
    <footer>
      <div className='section-footer'>
        <div className='img-footer'>
          <img src={zuri} alt='' />
        </div>
        <div className='img-footer'>
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className='img-footer'>
          <img src={ingressive} alt='' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
