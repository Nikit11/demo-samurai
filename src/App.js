import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import { Route, withRouter, HashRouter } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';
import store from './redux/store-redux';
import { withSuspense } from './hoc/withSuspense';
import ToDoList from './components/ToDo/ToDoList/ToDoList';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() =>import('./components/Profile/ProfileContainer'))
const Calculator = React.lazy(() =>import('./components/Calculator/Calculator'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        {
            if (!this.props.initialized) return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)} />
                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />
                    <Route path='/calculator/:userId?'
                        render={withSuspense(Calculator)} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <Login />} />
                    <Route path='/toDoList'
                        render={() => <ToDoList />} />
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)
const SamuraiJsApp = () => {
    return <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
}
export default SamuraiJsApp;