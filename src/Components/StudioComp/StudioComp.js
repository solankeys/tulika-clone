import React from 'react'
import './StudioComp.css'
import { StudioCompData } from './StudioCompData'
import { ExhibitionData } from '../../Pages/Exhibition/ExhibitionData'
import Slider from 'react-slick'
import photography from '../../Images/photography.JPG'

const StudioComp = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='studiocomp'>
      <ul className='studiocomp__ul'>
        {StudioCompData.map((item, index) => {
          return (
            <li key={index} className='studiocomp__ulLi'>
              <div className='studiocomp__ulLiUser'>
                <div className='studio__image'>
                  <div className='studiocomp__ulImageContainer'>
                    <img src={item.src} alt='profile' />
                  </div>
                </div>
                <div className='studioComp__userInfo'>
                  <h4>{item.name}</h4>
                  <span>{item.profession}</span>
                  <div className='studioComp__userInfoBtn'>
                    <button className='studioComp__userInfoBtnFlw'>
                      Follow
                    </button>
                    <button className='studioComp__userInfoBtnPfl'>
                      Profile
                    </button>
                  </div>
                  <p className='studioComp__paragraph'>{item.description} </p>
                </div>
              </div>
              <div className='studiofilter__works'>
                <Slider {...settings}>
                  {ExhibitionData.map((item, index) => {
                    return (
                      <div
                        className='studiofilter__worksImageContainer'
                        key={index}
                      >
                        <img src={item.image} alt={item.text} />
                      </div>
                    )
                  })}
                  {/* <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                  <div>
                    <h3>7</h3>
                  </div>
                  <div>
                    <h3>8</h3>
                  </div>
                  <div>
                    <h3>9</h3>
                  </div> */}
                </Slider>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StudioComp
