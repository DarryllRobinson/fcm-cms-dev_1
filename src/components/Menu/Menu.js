import React, { Component } from 'react';
//import { Nav, Navbar, Button, NavItem} from 'react-bootstrap';
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './Menu.css';

class Menu extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
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
      {
        isAuthenticated() && (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"
              onClick={this.goTo.bind(this, 'home')}
              style={{ cursor: "pointer" }}
            >
              Flying Crow Media CMS
            </a>
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span  className="navbar-toggler-icon"></span>
            </button>

            <div  className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul  className="navbar-nav mr-auto">
                <li  className="nav-item active">
                  <a  className="nav-link"
                    onClick={this.goTo.bind(this, 'scheduler')}
                    style={{ cursor: "pointer" }}
                  >
                    Schedule
                  <span  className="sr-only">
                  </span>
                  </a>
                </li>
                <li  className="nav-item active">
                  <a  className="nav-link"
                    onClick={this.goTo.bind(this, 'screen')}
                    style={{ cursor: "pointer" }}
                  >
                    Screen
                  <span  className="sr-only">
                  </span>
                  </a>
                </li>
                <li  className="nav-item active">
                  <a  className="nav-link"
                    onClick={this.logout.bind(this)}
                    style={{ cursor: "pointer" }}
                  >
                    Log Out
                  <span  className="sr-only">
                  </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
      )}
      </div>
    );
  }
}

export default Menu;
