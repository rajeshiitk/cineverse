import React from 'react';
import "./genre.scss";

const Genre = ({ genre}) => {
  return (
    <div  className='genretag'>
        <p>{genre}</p>
    </div>
  )
}

export default Genre