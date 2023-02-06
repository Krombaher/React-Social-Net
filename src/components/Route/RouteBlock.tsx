import React from "react";
import ProfileContainer from "../MainContent/ProfileBlock/ProfileBlockContainer";
import Photo from "../MainContent/Photo/Photo";
import MessageContainer from "../MainContent/MessageBlock/MessageContainer";
import Settings from "../MainContent/Settings Component/Settings";
import UsersContainer from "../MainContent/UsersBlock/UsersContainer";
import {Route, Switch} from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";

export const RouteBlock = () => {
    return (
        <>
            <Switch>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/photo' render={() => <Photo/>}/>
                <Route path='/message' render={() => <MessageContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </Switch>
        </>
    )
}