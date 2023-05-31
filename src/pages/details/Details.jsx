import React from 'react';
import "./details.scss";
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import Banner from './banner/Banner';

const Details = () => {
    const { mediaType, id } = useParams();
    
  return (
    <div>
      <Banner mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details