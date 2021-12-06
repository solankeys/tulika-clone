import React from 'react'
import { CategoriesData } from './CategoriesData'
import './Categoris.css'

const Categoris = () => {
  return (
    <div className='categories'>
      {CategoriesData.map((item, index) => {
        return (
          <div className='categories-wrapper'>
            <div className='categories__image-container' key={index}>
              <img
                src={item.image}
                alt='categories
                  '
              ></img>
            </div>
            <h2>{item.text}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Categoris
