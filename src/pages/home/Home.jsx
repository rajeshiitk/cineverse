import React from 'react';
import "./home.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Carousel from '../../components/carousel/Carousel';

const Home = () => {
  return (
    <>
   <div>Home</div>
   <HeroBanner />
   <Carousel heading={"Trending"} params={['Movies', 'TV']} />
    
   </>
  )
}

export default Home