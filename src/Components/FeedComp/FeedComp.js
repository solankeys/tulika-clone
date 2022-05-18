import React from 'react'
import './FeedComp.css'
import { FeedCompData } from './FeeCompData'
import { BsSuitHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const FeedComp = () => {
  return (
    <div className='feedcomp'>
      {FeedCompData.map((item, index) => {
        const { src, name, time, feedsrc } = item
        return (
          <section key={index} className='postedfeeds'>
            <div className='feedcomp__userDetails'>
              <div className='feedcomp__imageContainer'>
                <img src={src} alt='decription' />
              </div>
              <div className='feedcomp__details'>
                <h3>{name}</h3>
                <p>21{time}</p>
              </div>
            </div>
            <div className='feedcomp__feedImageContainer'>
              <img src={feedsrc} slt='decription' />
            </div>
            <div className='feedcomp__icons'>
              <IconContext.Provider value={{ size: '24px' }}>
                <BsSuitHeart />
                <FaRegComment />
              </IconContext.Provider>
            </div>
            <div className='feedcomp__comments'>
              <p>Write Comments</p>
              <input type='text' placeholder='Write Comment' />
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default FeedComp
