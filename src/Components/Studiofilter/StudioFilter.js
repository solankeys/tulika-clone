import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineDown } from 'react-icons/ai'
import { IoReorderTwo } from 'react-icons/io5'
import { BsBoxSeam } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { FilterContainerData } from '../FilterContainer/FilterContainerData'
import './StudioFilter.css'

const StudioFilter = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className='studiofilter'>
      <div className='studiofilter__mobile'>
        <ul className='studiofilter__mobileUl'>
          <li onClick={showSidebar} className='studiofilter__category'>
            Categories <AiOutlineDown className='studiofilter__mobileUlLi' />
          </li>
          <li className='studiofilter__mobileUlMost'>
            <span>Most Followers</span>
            <br />
            <span>Most works</span>
          </li>
          <li className='studiofilter__mobileUlIcons'>
            <IconContext.Provider value={{ size: '30px' }}>
              <IoReorderTwo />
              <BsBoxSeam />
            </IconContext.Provider>
          </li>
        </ul>
        <div
          className={
            sidebar
              ? 'studiofilter__mobileModal active'
              : 'studiofilter__mobileModal'
          }
        >
          <ul onClick={showSidebar}>
            <li className='studiofilter__ulheader'>
              <span className='category'>Category</span>
              {/* <span className='borderright'>|</span> */}
              <IconContext.Provider value={{ size: '18px' }}>
                <AiOutlineClose
                  onClick={showSidebar}
                  className='filterContainer__ulheaderIcon'
                />
              </IconContext.Provider>
            </li>
            {FilterContainerData.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </div>
      <ul className='studiofilter__desktop'>
        <li className='studiofilter__desktopCategory'>Category</li>
        {FilterContainerData.map((item, index) => {
          return (
            <>
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.text}</span>
                </Link>
              </li>
            </>
          )
        })}
        <div className='studiofilter__desktopMost'>
          <li className='studiofilter__desktopMostLi'>
            <span>Most Followers</span>
            <AiOutlineDown />
          </li>
          <li>
            <span>Most Works</span>
            <AiOutlineDown />
          </li>
        </div>
      </ul>
    </div>
  )
}

export default StudioFilter
