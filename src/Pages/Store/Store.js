import React from 'react'
import Banner from '../../Components/Banner/Banner'
import FilterContainer from '../../Components/FilterContainer/FilterContainer'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

const Store = () => {
  return (
    <div className='store'>
      <NavBar />
      <Banner text='Store' />
      <FilterContainer />
      <Footer />
    </div>
  )
}

export default Store
