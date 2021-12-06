import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ExhibitionData } from '../../Pages/Exhibition/ExhibitionData'
import './Tab.css'

function Tab() {
  const [toggleState, setToggleState] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(4)

  const pages = []
  for (let i = 1; i <= Math.ceil(ExhibitionData.length / itemPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentItems = ExhibitionData.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id))
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage == number ? 'currrentPageActive' : null}
      >
        {number}
      </li>
    )
  })

  const toggleTab = (index) => {
    setToggleState(index)
  }
  const handelNextBtn = () => {
    // setCurrentPage(currentPage + 1)
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1)
    } else {
      setCurrentPage(currentPage)
      alert('You are in last page')
    }
  }
  const handlePrevBtn = () => {
    // setCurrentPage(currentPage - 1)
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    } else {
      setCurrentPage(currentPage)
      alert('You are in first page')
    }
  }
  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Previous
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Upcoming
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={
            toggleState === 1 ? 'tab-content  active-content' : 'tab-content'
          }
        >
          <div className='exhibition__container'>
            {currentItems.map((item, index) => {
              return (
                <div key={index} className='exhibition__containerWrapper'>
                  <div className='exhibition__image-container'>
                    <img src={item.image} alt='background image' />
                  </div>
                  <div className='exhibition__description'>
                    <h2>{item.text}</h2>
                    <span>Contemporary: {item.country}</span>
                    <br />
                    <span>Music by:{item.music}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='pagination'>
            <div className='next-prev'>
              <AiOutlineArrowLeft onClick={handlePrevBtn} />
              <span>|</span>
              <AiOutlineArrowRight onClick={handelNextBtn} />
            </div>
            <ul className='tab__pageNumber'>{renderPageNumbers}</ul>
          </div>
        </div>
        <div
          className={
            toggleState === 2 ? 'tab-content  active-content' : 'tab-content'
          }
        >
          {ExhibitionData.slice(0, 1).map((item, index) => {
            return (
              <div key={index}>
                <div className='exhibition__image-container'>
                  <img src={item.image} alt='background image' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tab
