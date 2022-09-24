import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/LeftMEnu/NavBar';
import Message from './components/MainContent/Message';
import Profile from './components/MainContent/Profile';
import Header from './components/TopMenu/Header';
import Photos from './components/MainContent/Photos';
import Settings from './components/MainContent/Settings';
import './scss/app.scss';


let post = [
  { id: 1, name: 'Ben', message: 'Hi!' },
  { id: 2, name: 'Danila', message: 'By!' }
]


function App() {
  return (
    <div className='app _container'>
      <Header />
      <div className='app__content'>
        <NavBar />
        <div className='app__content-main'>
          <Routes>
            <Route path='/profile' element={<Profile post={post} />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/message' element={<Message />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
