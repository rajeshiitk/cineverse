import React from 'react';
import "./carousel.scss";

const Carousel = ({heading , params}) => {
  return (
    <div>Carousel
    {heading}
    {/* {
    params.map((index,para)=>(<div>{index}</div>))
    } */}
    </div>
  )
}

export default Carousel