import React from 'react'
import Banner from '../../Components/Banner/Banner'
import FilterContainer from '../../Components/FilterContainer/FilterContainer'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import StudioFilter from '../../Components/Studiofilter/StudioFilter'

const Studios = () => {
  return (
    <div className='studios'>
      <NavBar></NavBar>
      <Banner text='Studios' />
      <StudioFilter />
      <Footer />
    </div>
  )
}

export default Studios
