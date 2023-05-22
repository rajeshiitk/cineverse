import React from 'react';
import './header.scss'
import {BsMoonStars ,BsSearch } from "react-icons/bs"

const Header = () => {
    return (
        <div className='header'>
            <div className='searchBar'>
            <span className='searchIcon'>
                <BsSearch />
                </span>
                <input type="text"  placeholder='Search for movies and  TV shows'/>
                <button className='searchButton'>Search</button>
            </div>
            <div className="themeButton">
        <BsMoonStars />
            </div>

        </div>
    )
}

export default Header