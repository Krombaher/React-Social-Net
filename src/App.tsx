import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Profile from './components/MainContent/Profile';
import Header from './components/TopMenu/Header';
import Photos from './components/MainContent/Photos';
import Settings from './components/MainContent/Settings';
import './scss/app.scss';
import {MessageContainer} from "./components/MainContent/MessageBlock/MessageContainer";
import {UsersContainer} from "./components/MainContent/UsersBlock/UsersContainer";

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className='app__content _container'>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/photos' element={<Photos/>}/>
                    <Route path='/message' element={<MessageContainer/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
