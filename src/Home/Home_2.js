import React, { Component } from 'react';
//import logo from './logo - faded.png';
import Main from '../components/Main/Main';
//import Login from './Login';
import './Home.css';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log('this.props.auth home: ', isAuthenticated());
    return (
      <div className="container">

        {
          isAuthenticated() && (
            <Main  />
          )
        }
      </div>
    );
  }
}

export default Home;
