import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState(' ');
  return (
    <>
      <div className='flex p-2 space-y-10'>
        <div className='flex p-2 space-x-10'>
          {/* <img
            className='h-20 color-black '
            src={hamburger}
            alt='hamburger menu'
          /> */}
          <MenuIcon />
          <img className='h-20' src={logo} alt='logo' />
        </div>

        <div>
          <input
            className='space-y-10 h-5 m-2'
            type='text'
            placeholder='Search'
          />
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
