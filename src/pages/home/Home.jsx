import React from 'react';
import "./home.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Carousel from '../../components/carousel/Carousel';
import useFetch from '../../hooks/useFetch';
import Container from '../../components/container/Container';
import Trending from './trending/Trending';
const Home = () => {
 
  // const { data, loading } = useFetch("/movie/upcoming");
// console.log(data);




  return (
    <>
    <div className='home'>
   <HeroBanner />
   <Trending />
   {/* <Carousel heading={"Trending"} parameters={[{id: 1, name:'Movies'}, {id: 2, name:'TV'}]} /> */}
   </div>
    
   </>
  )
}

export default Home