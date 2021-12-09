import React from 'react'
import Banner from '../../Components/Banner/Banner'
import FilterContainer from '../../Components/FilterContainer/FilterContainer'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

const Feed = () => {
  return (
    <div className='feed'>
      <NavBar></NavBar>
      <FilterContainer />
      <Footer />
    </div>
  )
}

export default Feed
