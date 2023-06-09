import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './commentsContainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('v'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='flex flex-col w-full m-2 p-2'>
      <div className='flex '>
        <div>
          <iframe
            className='pt-5 pl-3'
            width='940'
            height='560'
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title='RESIDENT EVIL 4 REMAKE CHAINSAW DEMO PS5 Full Walkthrough Gameplay Part 1 &amp; ENDING (RE4 REMAKE)'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <div className='w-full pr-4'>{/* <LiveChat /> */}</div>
      </div>
      {/* <CommentsContainer /> */}
      <div className='m-2 p-2'>
        <CommentsContainer />
      </div>
    </div>
  );
};
export default WatchPage;
