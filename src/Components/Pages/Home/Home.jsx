import React from 'react'
import { HeroSlider } from './Carousel/Carousel'
import { ReactComponent as SiteHeader } from "../../../Assets/SVG/Site Headers.svg";
import './Home.scss'

const Home = () => {
  return (
    <div className='hero-header'>
    <div className='title'>
      <h1>VELKOMMEN TIL HOTEL OVERLOOK ONLINE</h1>
     <SiteHeader /> 
    </div>
    <HeroSlider />
    </div>
  )
}

export default Home