import React from 'react'
import './Feed.css'
import Banner from '../../Components/Banner/Banner'
import FeedComp from '../../Components/FeedComp/FeedComp'
import FeedSideBar from '../../Components/FeedSideBar/FeedSideBar'
import FilterContainer from '../../Components/FilterContainer/FilterContainer'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

const Feed = () => {
  return (
    <div className='feed'>
      <NavBar></NavBar>
      <div className='feedcontainer'>
        <FeedSideBar />
        <FeedComp />
      </div>

      <Footer />
    </div>
  )
}

export default Feed
