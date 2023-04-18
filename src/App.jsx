import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import './index.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import { Link } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import Shimmer from './components/Shimmer';

const WatchPage = React.lazy(() => import('../src/components/WatchPage'));
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router> 
      <Header />
      <Routes> 
        <Route exact path='/' element ={<Body />}/> 
         <Route exact path='watch' element ={<WatchPage />}/> 
      </Routes>
    </Router>
  );
}

export default App;
