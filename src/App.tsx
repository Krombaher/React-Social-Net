import React from 'react';
import './scss/app.scss';
import {HeaderContainer} from "./components/TopMenu/HeaderContainer";
import {RouteBlock} from "./components/Route/RouteBlock";

function App() {
    return (
        <div className='app'>
            <HeaderContainer/>
            <div className='app__content _container'>
                <RouteBlock/>
            </div>
        </div>
    );
}

export default App;
