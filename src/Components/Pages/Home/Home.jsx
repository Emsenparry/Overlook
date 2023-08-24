import React from 'react'
import { HeroSlider } from './Carousel/Carousel'
import { ReactComponent as SiteHeader } from "../../../Assets/SVG/Site Headers.svg";
import './Home.scss'
import {ContentWrapper} from '../../ContentWrapper/ContentWrapper';
import { Gallery, GalleryRooms } from './Gallery/Gallery';

const Home = () => {
  return (
    <ContentWrapper title="Forside">
    <div className='hero-header'>
    <div className='title'>
      <h1>VELKOMMEN TIL HOTEL OVERLOOK ONLINE</h1>
     <SiteHeader /> 
    </div>
    <HeroSlider />
    </div>
    <p className='lastnews'>Sidste nyt</p>
      <Gallery />
      <p className='lastnews'>Se vores udvalg af værelser</p>
      <GalleryRooms />
    </ContentWrapper>
  )
}

export default Home