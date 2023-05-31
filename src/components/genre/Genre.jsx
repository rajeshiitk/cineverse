import React from 'react';
import "./genre.scss";

const Genre = ({ genre}) => {
  return (
    <div  className='genre'>
        <p>{genre}</p>
    </div>
  )
}

export default Genre