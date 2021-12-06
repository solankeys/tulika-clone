import React, { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import './Printmaking.css'
import { PrintMakingData } from './PrintmakingData'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import youandme from '../../Images/youandme.JPG'
import womananddevil from '../../Images/womananddevil.JPG'
import kholasagar from '../../Images/kholasagar.JPG'
import sonyrai from '../../Images/sonyrai.JPG'
import sonyrai1 from '../../Images/sonyrai1.JPG'
import memoriesofgrandma from '../../Images/memoriesofgrandma.JPG'
import timepassby from '../../Images/timepassby.JPG'
import bidhyamantamang from '../../Images/bidhyamantamang.JPG'
import sonyrai3 from '../../Images/sonyrai3.JPG'
import bidhyamantamang1 from '../../Images/bidhyamantamang1.JPG'
import flow from '../../Images/flow.JPG'

const Printmaking = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]
  return (
    <div className='Printmaking'>
      <Carousel breakPoints={breakPoints}>
        <Item className='item'>
          <div>
            <img src={youandme} alt='you and me' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={womananddevil} alt='womananddevil' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={kholasagar} alt='kholasagar' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={sonyrai} alt='sonyrai' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={sonyrai1} alt='sonyrai1' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={memoriesofgrandma} alt='memoriesofgrandma' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={timepassby} alt='timepassby' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={bidhyamantamang} alt='bidhyamantamang' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={sonyrai3} alt='sonyrai3' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={bidhyamantamang1} alt='bidhyamantamang1' />
            <h2>You and me</h2>
          </div>
        </Item>
        <Item className='item'>
          <div>
            <img src={flow} alt='flow' />
            <h2>You and me</h2>
          </div>
        </Item>
      </Carousel>
    </div>
  )
}

export default Printmaking
