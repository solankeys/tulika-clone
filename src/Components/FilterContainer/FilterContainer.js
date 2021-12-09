import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineDown } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { ExhibitionData } from '../../Pages/Exhibition/ExhibitionData'
import './FilterContainer.css'
import { FilterContainerData } from './FilterContainerData'
import { BsSuitHeartFill } from 'react-icons/bs'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const FilterContainer = () => {
  const [sidebar, setSidebar] = useState(false)
  const [liked, setLiked] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const likeHandler = () => setLiked(!liked)

  return (
    <div className='filterContainer'>
      <div className='filterContainer__mobile'>
        <ul className='filterContainer__mobileUl'>
          <li onClick={showSidebar}>
            Categories <AiOutlineDown className='filterContainer__mobileUlLi' />
          </li>
          <li>
            Filter <AiOutlineDown className='filterContainer__mobileUlLi' />
          </li>
        </ul>
        <div
          className={
            sidebar
              ? 'filterContainer__mobileModal active'
              : 'filterContainer__mobileModal'
          }
        >
          <ul onClick={showSidebar}>
            <li className='filterContainer__ulheader'>
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
      <ul className='filterContainer__desktop'>
        <li className='filterContainer__desktopCategory'>Category</li>
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
        <div className='filterContainer__desktopPriceSortBy'>
          <li>
            <span>Price</span>
            <AiOutlineDown />
          </li>
          <li>
            <span>Sort By</span>
            <AiOutlineDown />
          </li>
        </div>
      </ul>
      <div className='filterContainer__body'>
        <ResponsiveMasonry
          columnsColumnBreakPoints={{ 320: 1, 768: 2, 900: 3 }}
        >
          <Masonry>
            {ExhibitionData.map((item, index) => {
              return (
                <div className='filterContainer__bodyContainer' key={index}>
                  <div className='filterContainer__imageContainer'>
                    <img src={item.image} alt='decription' />
                  </div>

                  {/* <button
                onClick={likeHandler}
                className={
                  liked
                    ? 'filterContainer__heart active'
                    : 'filterContainer__heart'
                }
              >
                <BsSuitHeartFill />
              </button> */}
                  <button className='add-btn' onClick={() => likeHandler(item)}>
                    <BsSuitHeartFill />
                  </button>
                  <h3>{item.text}</h3>
                  <span>NPR 120 </span>
                  <br />
                  <span className='filterContainer__bodySpan'>
                    {item.music}
                  </span>
                </div>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default FilterContainer
