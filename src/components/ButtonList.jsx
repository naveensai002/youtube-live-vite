import React from 'react';

const ButtonList = () => {
  const buttons = [
    'All',
    'Comdey',
    'Jaat',
    'Haryana',
    'Gaming',
    'Music',
    'Live',
    'Programming',
    'Vlogs',
    'Gadgets',
    // 'Desi',
    // 'Rajasthni Songs',
    // 'Ragni',
    // 'Haryanvi Dance',
    // 'Haryanvi Music',
    // 'Punjabi Music',
  ];
  return (
    <>
      {buttons.map((button, index) => (
        <button
          className='hover:bg-yellow-500 p-3 m-3 bg-yellow-300 curser-pointer rounded-lg '
          key={index}
        >
          {button}
        </button>
      ))}
    </>
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
