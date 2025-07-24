import React from 'react'
import './BioPage.css'
import pfp from '../assets/pfp.jpeg'

const BioPage = () => {
  return (
    <div className='main-box'>
      <div className='pfp-slot'>
        <img src={pfp} alt="pfp" />
      </div>
    </div>
  )
}

export default BioPage