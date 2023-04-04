import { useState } from 'react';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div className='App'>
      <>
        <h1 className='text-3xl font-bold'> React + Vite</h1>
        {/* 
            Header
              Hamburger button 
              search Bar
              voice button
              video button
              Notification
              user

            Body
              Sidebar
              MainContainer
              Button List
              Card
                video
                title
                channel name
                171 k views upload time
*/}
        <Header />
      </>
    </div>
  );
}

export default App;
