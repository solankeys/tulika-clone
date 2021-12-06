import React from 'react'
import './Home.css'
import Categoris from '../../Components/Categories/Categoris'
import NavBar from '../../Components/NavBar/NavBar'
import NewMediaArt from '../../Components/NewMediaArt/NewMediaArt'
import Printmaking from '../../Components/Printmaking/Printmaking'
import { PrintMakingData } from '../../Components/Printmaking/PrintmakingData'
import ImageSlider from '../../Components/Slider/ImageSlider'
import { SliderData } from '../../Components/Slider/SliderData'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <ImageSlider slides={SliderData} />
      </div>
      <div className='print'>
        <h2>Categories </h2>
        <Categoris />
      </div>
      <div className='print'>
        <h2>Print Making </h2>
        <Printmaking slider={PrintMakingData} />
      </div>
      <div className='print'>
        <h2>New Media Art</h2>
        <NewMediaArt />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
