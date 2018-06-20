import React, { Component } from 'react';
//import { Navbar, Button } from 'react-bootstrap';
import Home from './Home/Home';
//import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
/*  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }*/

  render() {
    const { isAuthenticated } = this.props.auth;
    //console.log('this.props.auth: ', isAuthenticated());

    return (
      <div>
        <Menu {...this.props} />
        {
          !isAuthenticated() && (
            <div>
              <Home {...this.props} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
