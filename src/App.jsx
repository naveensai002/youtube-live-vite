import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import './index.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import Shimmer from './components/Shimmer';

const WatchPage = React.lazy(() => import('../src/components/WatchPage'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: (
          <Suspense fallback={<Shimmer />}>
            <WatchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
