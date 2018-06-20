import React, { Component } from 'react';
//import { Navbar, Button } from 'react-bootstrap';
//import Home from './Home/Home';
import logo from './logo - faded.png';
//import Auth from './Auth/Auth';
//import history from './history';
//import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
    //if (this.state.seconds === 5) {
    if (Date.now() > localStorage.expires_at) {
      this.logout();
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
/*  goTo(route) {
    this.props.history.replace(`/${route}`)
  }*/

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          isAuthenticated() && (
            <div className="container">
              <Menu {...this.props} />
              Please{' '}
              <a
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={this.logout.bind(this)}
              >
                sign out
              </a>
              {' '}to leave
            </div>
          )
        }

        {
          !isAuthenticated() && (
            <div className="container">
              {

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
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
