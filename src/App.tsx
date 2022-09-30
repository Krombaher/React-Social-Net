import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Message from './components/MainContent/Message';
import Profile from './components/MainContent/Profile';
import Header from './components/TopMenu/Header';
import Photos from './components/MainContent/Photos';
import Settings from './components/MainContent/Settings';
import './scss/app.scss';
import { v1 } from 'uuid';

function App() {

  const [post, setPost] = useState([
    {id: v1(), message: 'Hello' }
  ])

  const addPost = (newMessage: string) => {
    const newPost = {id: v1(), message: newMessage}
    setPost([...post, newPost])
  }

  const removePost = (id:string) => {
    setPost(post.filter(p => p.id !== id))
  }

  return (
    <div className='app'>
      <Header />
      <div className='app__content _container'>
        <Routes>
          <Route path='/profile' element={<Profile post={post} addPost={addPost} removePost={removePost}/>} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/message' element={<Message />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
