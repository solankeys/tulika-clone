import React from 'react'
import './NewMediaArt.css'
import { NewMediaArtData } from './NewMediaArtData'
import Carousel from 'react-elastic-carousel'
import Item from '../Printmaking/Item'
import lettinggo from '../../Images/letting go.JPG'
import uglytodd from '../../Images/uglytodd.JPG'
import evelyn from '../../Images/evelyn.JPG'
import transcendent from '../../Images/transcendent.JPG'
import dust from '../../Images/Dust.JPG'
import weightoftheworld from '../../Images/weightoftheworld.JPG'
import deforested from '../../Images/de-forested.JPG'

const NewMediaArt = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]
  return (
    <div className='newmediaart'>
      <Carousel breakPoints={breakPoints}>
        <Item className='house'>
          <img src={lettinggo} alt='lettinggo' />
        </Item>
        <Item className='land'>
          <img src={uglytodd} alt='uglytodd' />
        </Item>
        <Item className='flat'>
          <img src={evelyn} alt='evelyn' />
        </Item>
        <Item className='apartment'>
          <img src={transcendent} alt='transcendent' />
        </Item>
        <Item className='business'>
          <img src={dust} alt=' dust' />
        </Item>
        <Item className='office-space'>
          <img src={weightoftheworld} alt='weightoftheworld' />
        </Item>
        <Item className='hostel'>
          <img src={deforested} alt='deforested' />
        </Item>
      </Carousel>
    </div>
  )
}

export default NewMediaArt
