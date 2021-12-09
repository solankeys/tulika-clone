import React from 'react'
import Banner from '../../Components/Banner/Banner'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import FilterContainer from '../../Components/FilterContainer/FilterContainer'

const Gallary = () => {
  return (
    <div className='gallary'>
      <NavBar />
      <Banner text='Gallery' />
      <FilterContainer />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Gallary
