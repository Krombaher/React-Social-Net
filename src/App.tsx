import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Photo from './components/MainContent/Photo/Photo';
import Settings from './components/MainContent/Settings Component/Settings';
import './scss/app.scss';
import MessageContainer from "./components/MainContent/MessageBlock/MessageContainer";
import UsersContainer from "./components/MainContent/UsersBlock/UsersContainer";
import ProfileContainer from "./components/MainContent/ProfileBlock/ProfileBlockContainer";
import {HeaderContainer} from "./components/TopMenu/HeaderContainer";
import {Login} from "./components/Login/Login";

function App() {
    return (
        <div className='app'>
            <HeaderContainer/>
            <div className='app__content _container'>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/photo' render={() => <Photo/>}/>
                    <Route path='/message' render={() => <MessageContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
