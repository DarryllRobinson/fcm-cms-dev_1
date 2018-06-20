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
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
              <Navbar.Text>
                Flying Crow Media Content Management System
              </Navbar.Text>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'home')} >Home
          </Button>

          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'scheduler')} >Scheduler
          </Button>

          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'screen')} >Screen
          </Button>

          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'logout')} >Log Out
          </Button>

          </Navbar.Collapse>
        </Navbar>
      )}
      </div>
    );
  }
}

export default Nav;
