import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer/MainContainer';

const Body = () => {
  return (
    <>
      <div className='flex p-2 m-2 '>
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
};

export default Body;
