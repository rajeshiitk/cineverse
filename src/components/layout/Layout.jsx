import React from 'react';
import "./layout.scss";
import Header from '../header/Header';
import Container from '../container/Container';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <Container >
            <div  className='layout'>
                <Sidebar  />
                <div  id='scrollableDiv'  className='main' >
                    <Header />
                    <Outlet />
                </div>
            </div>
        </Container>

    )
}

export default Layout