import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <div className='main-nav'>
            <h2>Category Shirt</h2>

            <nav className='navbar'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>

            </nav>

        </div>
    );
};

export default Header;