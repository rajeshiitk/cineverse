import React from 'react';
import "./home.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Carousel from '../../components/carousel/Carousel';
import useFetch from '../../hooks/useFetch';
const Home = () => {
 
  // const { data, loading } = useFetch("/movie/upcoming");
// console.log(data);




  return (
    <>
   <div>Home</div>
   <HeroBanner />
   <Carousel heading={"Trending"} params={['Movies', 'TV']} />
    
   </>
  )
}

export default Home