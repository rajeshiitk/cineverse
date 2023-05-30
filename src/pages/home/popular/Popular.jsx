import React, { useState } from 'react';
import "./popular.scss";
import useFetch from '../../../hooks/useFetch';
import Switch from '../../../components/switch/Switch';
import Carousel from '../../../components/carousel/Carousel';

const Popular = () => {
const [endpoint, setEndpoint] = useState("movie");
const {data, loading} = useFetch(`/${endpoint}/popular`);

console.log(data);

const onTabChange = ()=>{
   setEndpoint(endpoint ==="movie" ? "tv" : "movie");
}

  return (
    
    <div className='popular'>
    <div className="top">
        <span className="carouselTitle">Popular</span>
        <Switch data={["Movies", "TV"]} onTabChange={onTabChange} />
    </div>
    { data &&
    <Carousel  data={data} loading={loading} endpoint={endpoint} />
    }
</div>
  )
}

export default Popular