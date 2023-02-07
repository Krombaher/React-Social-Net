import React from 'react';
import './scss/app.scss';
import {HeaderContainer} from "./components/TopMenu/HeaderContainer";
import {RouteBlock} from "./components/Route/RouteBlock";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializedTC} from "./redux/reducers/AppReducer";
import {AppStateType} from "./redux/Redux-store";
import CircularIndeterminate from "./components/Progress/CircularIndeterminate";

export type AppPropsType = {
    initializedTC: () => void
    initialized: boolean
}

export type MapStatePropsType = {
    initialized: boolean
}

class App extends React.Component<AppPropsType, any> {
    componentDidMount() {
        this.props.initializedTC()
    }

    render() {

        if(!this.props.initialized) {
            return <CircularIndeterminate/>
        }

        return (
            <div className='app'>
                <HeaderContainer/>
                <div className='app__content _container'>
                    <RouteBlock/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,
        {
            initializedTC
        })
)(App)
