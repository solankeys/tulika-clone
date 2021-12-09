import React from 'react'
import './Banner.css'
import banner from '../../Images/banner.jpg'

const Banner = ({ text }) => {
  return (
    <div className='banner'>
      <div className='banner__imageContainer'>
        <img src={banner} alt='banner' />
      </div>
      <h1 className='banner__text'>{text}</h1>
    </div>
  )
}

export default Banner
