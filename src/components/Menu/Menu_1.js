import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Nav.css';

class Nav extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

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
      {console.log('isAuthenticated: ', isAuthenticated())};
      {
        isAuthenticated() && (
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Flying Crow Media Content Management System</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'scheduler')}
                >
                Scheduler
                </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'Screen')}
                >
                Screen
                </Button>
              )
            }
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      )}
      </div>
    );
  }
}

export default Nav;
