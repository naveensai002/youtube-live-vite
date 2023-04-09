import React, { useState, useEffect } from 'react';
import { VIDEO_CATEGORIES_LIST } from '../utils/constants';
import GlidingButtons from './GlidingButtons';

const ButtonList = () => {
  const [categories, setCatgories] = useState([]);

  const getCategories = async () => {
    const resp = await fetch(VIDEO_CATEGORIES_LIST);
    const json = await resp.json();
    setCatgories(json.items);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className='w-[85vw] flex flex-row bg-white overflow-x-scroll'>
      {categories.map((item) => {
        return <GlidingButtons key={item.id} name={item.snippet.title} />;
      })}
    </div>
  );
};

//if we want to make button scrollable
{
  /* <div class='bg-white w-screen overflow-auto whitespace-no-wrap py-3 px-4 text-center'>
  <button class='inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4'>
    Button 1
  </button>
  
</div>; */
}
export default ButtonList;
