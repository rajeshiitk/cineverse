import React, { useEffect, useState } from 'react'
import fetchDataFromApi from '../../utils/api';
import './sidebar.scss'

const Sidebar = () => {

  const [genres, setGenres] = useState([]);


  useEffect(() => {
    fetchDataFromApi("/genre/movie/list").then((res) => {
      // console.log(res.genres);
      setGenres(res.genres)
    })
  }, [])




  return (
    <div  className='sidebar'>
      <div className='logo'>Cineverse</div>
      {
        genres.map((genre) => (
          <div key={genre.id} className='genre'> {genre.name}</div>
        ))
      }

    </div>
  )

}

export default Sidebar;