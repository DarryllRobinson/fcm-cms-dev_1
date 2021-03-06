import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile',
    leeway: 60
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    //this.displayProfile = this.displayProfile.bind(this);
  }

/*
  login(e) {
    alert('login');
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
  */

  getProfile() {
    //console.log('Auth.js Auth: ', auth0);
  }

  /*displayProfile() {
    // display the profile
    document.querySelector('#profile-view .nickname').innerHTML =
      userProfile.nickname;
    document.querySelector(
      '#profile-view .full-profile'
    ).innerHTML = JSON.stringify(userProfile, null, 2);
    document.querySelector('#profile-view img').src = userProfile.picture;
  }*/


  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        /*console.log('authResult: ', authResult);
        console.log('authResult.accessToken: ', authResult.accessToken);
        console.log('authResult.idToken: ', authResult.idToken);*/
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
        /*console.log('authResult: ', authResult);
        console.log('authResult.accessToken: ', authResult.accessToken);
        console.log('authResult.idToken: ', authResult.idToken);*/
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the app route instead of home, we call that instead
    history.replace('/home');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the app route instead of home, we call that instead
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
