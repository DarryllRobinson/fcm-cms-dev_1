import React, { Component } from 'react';
import logo from './logo - faded.png';
import Main from '../components/Main/Main';
//import Login from './Login';
import './Home.css';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          !isAuthenticated() && (
            <div className="loggedOut">
            <img src={ logo } alt="fcm logo" />
              <h5>
                Please{' '}
                <a
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={this.login.bind(this)}
                >
                  sign in
                </a>
                {' '}to start your session.
              </h5>
              </div>
            )
        }
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
