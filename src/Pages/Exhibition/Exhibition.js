import React from 'react'
import './Exhibition.css'
import NavBar from '../../Components/NavBar/NavBar'
import Tab from '../../Components/Tab/Tab'

const Exhibition = () => {
  return (
    <div className='exhibition'>
      <NavBar />
      <div className='exhibition-page'>
        <h1>Exhibition</h1>
      </div>
      <Tab />
    </div>
  )
}

export default Exhibition
