import React from 'react';

const VideoCard = ({ snippet, statistics }) => {
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img
        className='rounded-lg '
        src={thumbnails.medium.url}
        alt='card image'
      />
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
