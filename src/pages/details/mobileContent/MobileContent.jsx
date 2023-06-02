import React from 'react';
import "./mobileContent.scss";
import useFetch from '../../../hooks/useFetch';

const MobileContent = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}`);
    // console.log(data);
  return (
    <div className='mobileContent'>
     <p>{data?.overview}</p>
    </div>
  )
}

export default MobileContent