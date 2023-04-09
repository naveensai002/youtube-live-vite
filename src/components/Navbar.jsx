import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import YouTubeIcon from '@mui/icons-material/YouTube';
import hamburger from '../assets/hamburger.png';
import menubar from '../assets/menu-bar.png';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { toggleSidebar } from '../utils/sidebarSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState(' ');

  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-3'>
        <img
          src={menubar}
          className='h-8 cursor-pointer'
          alt='menu'
          onClick={() => toggleSidebarHandler()}
        />
        <img src={logo} className='h-12 mx-5  ' alt='youtube-logo' />
      </div>

      <div className='col-span-5'>
        <input
          type='text'
          className='w-1/2 border border-grey-500 p-1 rounded-l-full'
          placeholder='Search'
        />
        <button className='border border-grey-400 p-1 rounded-r-full bg-grey -900'>
          🔍
        </button>
      </div>
      {/* user icon */}
      <div>
        <NotificationsActiveIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Navbar;
