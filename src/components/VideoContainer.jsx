import React, { useEffect, useState } from 'react';
import { youtube_API } from '../utils/constants';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { loading, offLoading } from '../utils/sidebarSlice';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const isLoading = useSelector((state) => state.sidebar.isLoading);
  const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    dispatch(loading());
    const resp = await fetch(youtube_API);
    const data = await resp.json();
    console.log(data);
    setVideos(data.items);
    dispatch(offLoading());
  };
  useEffect(() => {
    getVideos();
  }, []);

  return isLoading ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div className='flex flex-wrap justify-evenly'>
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard {...video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
