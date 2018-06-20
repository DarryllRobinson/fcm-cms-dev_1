import React, { Component } from 'react';
import Auth from '../Auth/Auth';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from '../Auth/auth0-variables';
const databaseConnection = 'Username-Password-Authentication';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login(e) {
    alert('login(e): ', e);
    e.preventDefault();
    console.log('document.getElementById(email).value: ', document.getElementById('email').value);
    let username = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    auth0.login( {
      realm: databaseConnection,
      username: username,
      password: password
    }, function(err) {
      console.log('err: ', err);
      //if (err) displayError(err);
    });
  }

  handleSubmit() {
    return false
  }

  componentDidMount() {
    /*const config = JSON.parse(decodeURIComponent(escape(window.atob('@@config@@'))));
    console.log(config);
    const params = Object.assign( {
      d
    })*/

  }

  render() {
    return (
      <div>
        <div className="login-container">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4 login-box">
            <div className="login-header">
              <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="fcm logo"/>
              <h3>Welcome</h3>
              <h5>PLEASE LOG IN</h5>
            </div>
            <div id="error-message" className="alert alert-danger"></div>
            <form onSubmit={this.login.bind(this)} >

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password" />
            </div>

            <button
              type="submit"
              id="btn-login"
              className="btn btn-primary btn-block">
              Log In
            </button>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
