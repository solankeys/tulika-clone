import React, { useState } from 'react'
import './FeedSideBar.css'
import { Link } from 'react-router-dom'
import { FeedSideBarData } from './FeedSideBarData'
import { AiOutlineRight } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const FeedSideBar = () => {
  const [opensidebar, setOpensidebar] = useState(false)
  const [click, setClick] = useState(true)

  const openSideBarHandler = () => {
    setOpensidebar(!opensidebar)
    setClick(!click)
  }

  return (
    <div className='feeds'>
      <div className={opensidebar ? 'feedsidebar active ' : 'feedsidebar'}>
        <h4 className='sortby'>Sort By</h4>
        <hr />
        <Link to='#' className='feeds__link'>
          <p className='allfeed'>All Feed</p>
        </Link>
        <p className='feeds__topStudios'>Top Studios</p>
        <hr />
        <ul className='feeds-ul'>
          {FeedSideBarData.map((item, index) => {
            return (
              <li key={index} className='feeds__ulLi'>
                <p>{item.Text} </p>
              </li>
            )
          })}
        </ul>
      </div>
      <button
        className={click ? 'dragbtn  active' : 'dragbtn'}
        onClick={openSideBarHandler}
      >
        {' '}
        <IconContext.Provider value={{ size: '20px' }}>
          <AiOutlineRight />{' '}
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default FeedSideBar
