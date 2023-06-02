import React from 'react';
import "./details.scss";
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import Banner from './banner/Banner';
import MobileContent from './mobileContent/MobileContent';
import Upcoming  from "../home/upcoming/Upcoming"

const Details = () => {
    const { mediaType, id } = useParams();
    
  return (
    <div>
      <Banner mediaType={mediaType} id={id} />
      <MobileContent mediaType={mediaType} id={id} />
      <Upcoming />
    </div>
  )
}

export default Details