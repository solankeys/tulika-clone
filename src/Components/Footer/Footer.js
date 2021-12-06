import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import tulikalogo from '../../Images/tulika-logo.JPG'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__image-container'>
        <img src={tulikalogo} alt='tulika' />
      </div>
      <div className='footer__socul-link'>
        <ul className='footer__socul-link-ul'>
          <Link to='#'>
            <li>
              {' '}
              <FaFacebookF />
            </li>
          </Link>
          <Link to='#'>
            <li>
              <FaInstagram />
            </li>
          </Link>
          <Link to='#'>
            <li>
              <FaYoutubeSquare />
            </li>
          </Link>
        </ul>
      </div>
      <div className='footer__termsandcondition'>
        <ul className='footer__termsandcondition-ul'>
          <Link to='#'>
            <li>Terms of Use</li>
          </Link>
          <Link to='#'>
            <li>Priacy Policy</li>
          </Link>
          <Link to='#'>
            <li>Security</li>
          </Link>
          <Link to='#'>
            <li>Conditions of Sale</li>
          </Link>
          <li className='footer__termsandcondition-ul-lastli'>
            <AiOutlineCopyright />
            2019 Tilicho Kala
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
