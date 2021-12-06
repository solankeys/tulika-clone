import React, { useEffect, useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import './ImageSlider.css'

const ImageSlider = ({ slides }) => {
  console.log(slides)
  const [current, setCurrent] = useState(0)
  const length = slides.length
  console.log(length)
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  console.log(current)

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <AiFillCaretLeft className='slider__leftArrow' onClick={prevSlide} />
      <AiFillCaretRight className='slider__rightArrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='image' className='slider__image' />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
