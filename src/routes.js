import React from 'react';
import { Route, Router } from 'react-router-dom';
import Scheduler from './components/Scheduler/Scheduler';
import Application from './components/Scheduler/Application';
import Success from './components/Success/Success';
//import Navtest from './components/Menu/Navtest';
import Fail from './components/Fail/Fail';
import Screen from './components/Screen/Screen';
import App from './App';
import Home from './Home/Home';
//import Login from './Home/Login';
import Signup from './components/Signup/Signup';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/scheduler" render={(props) => <Scheduler auth={auth} {...props} />} />
          <Route path="/application" render={(props) => <Application auth={auth} {...props} />} />
          <Route path="/success" render={(props) => <Success auth={auth} {...props} />} />
          {/*<Route path="/navtest" render={(props) => <Navtest auth={auth} {...props} />} />*/}
          {/*<Route path="/login" render={(props) => <Login auth={auth} {...props} />} />*/}
          <Route path="/fail" render={(props) => <Fail auth={auth} {...props} />} />
          <Route path="/screen" render={(props) => <Screen auth={auth} {...props} />} />
          <Route path="/signup" render={(props) => <Signup auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
