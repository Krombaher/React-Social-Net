import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Photos from './components/MainContent/Photos';
import Settings from './components/MainContent/Settings';
import './scss/app.scss';
import {MessageContainer} from "./components/MainContent/MessageBlock/MessageContainer";
import {UsersContainer} from "./components/MainContent/UsersBlock/UsersContainer";
import {ProfileContainer} from "./components/MainContent/ProfileBlock/ProfileBlockContainer";
import {HeaderContainer} from "./components/TopMenu/HeaderContainer";

function App() {
    return (
        <div className='app'>
            <HeaderContainer/>
            <div className='app__content _container'>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/photos' render={() => <Photos/>}/>
                    <Route path='/message' render={() => <MessageContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
