import React, { useState } from 'react'
import './NavBar.css'
import tulika from '../../Images/tulika-logo.JPG'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <nav className='header'>
      <div className='header__mobile-view'>
        <div className='header__menuBbar'>
          <Link to='#' onClick={showSidebar}>
            <FaBars />
          </Link>
          <span className='header-span'></span>
        </div>
        <div className='header__mobile-imageContainer'>
          <img src={tulika} alt='logo of tulika' />
          <span className='header-span'></span>
        </div>
        <div className='header__mobilesearchBar'>
          <input type='search' placeholder='Type to search' />
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul class='header__menu-ul' onClick={showSidebar}>
            <Link to='#'>
              <li>
                <AiOutlineClose onClick={showSidebar} />
              </li>
            </Link>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='header__desktop-view'>
        <div className='header__imageContainer'>
          <Link to='/'>
            <img src={tulika} alt='logo of tulika' />
          </Link>
        </div>
        <div className='header__searchBar'>
          <input type='search' placeholder='Type to search' />
        </div>
        <ul className='header__lists'>
          <Link to='/Exhibition'>
            <li className='header-list'>Exhibition</li>
          </Link>
          <Link to='#'>
            <li className='header-list'>Gallary</li>
          </Link>
          <Link to='#'>
            <li className='header-list'>Store</li>
          </Link>
          <Link to='#'>
            <li className='header-list'>Studios</li>
          </Link>
          <Link to='#'>
            <li className='header-list'>Feed</li>
          </Link>
          <Link to='#' className='login-button'>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
