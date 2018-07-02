import React, { Component } from 'react';
import Name from './Name';
import User from './User';
import Budget from './Budget';
import Flightings from './Flightings';
import Auto from './Auto';
import { Resolution } from './Resolution';
import { Industry } from './Industry';
import { Category } from './Category';
import moment from 'moment';
import history from '../../history';
import Auth from '../../Auth/Auth';
import './react-datepicker.css';
//import './Scheduler.css';
import auth0 from 'auth0-js';

var userProfile;
var AUTH0_CLIENT_ID = 'W9w3YzgENsp1zkT40TAUr7VxYVcyj6iN';
var AUTH0_DOMAIN = 'fcmcms.eu.auth0.com';
var AUTH0_CALLBACK_URL = window.location.href;

class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auto: false,            // for auto-scheduling
      name: '',               // campaign name
      nickname: '',           // user nickname
      budget: 0,
      lsm_low: false,
      lsm_med: false,
      lsm_hi: false,
      flightings: 0,
      startDate: moment(),
      endDate: moment(),
      industry: '',
      category: '',
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      seventeen: false,
      eighteen: false,
      nineteen: false,
      twenty: false,
      twentyone: false,
      twentytwo: false,
      twentythree: false,
      twentyfour: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log('e.target.name: ', e.target.name);
    console.log('e.target.value: ', e.target.value);
  }

  getProfile() {
    if (!userProfile) {
      const accessToken = localStorage.getItem('access_token');

      if (!accessToken) {
        console.log('Access token must exist to fetch profile');
      }

      var webAuth = new auth0.WebAuth({
        domain: AUTH0_DOMAIN,
        clientID: AUTH0_CLIENT_ID,
        redirectUri: AUTH0_CALLBACK_URL,
        audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile',
        leeway: 60
      });
      console.log('webAuth: ', webAuth.client);

      webAuth.client.userInfo(accessToken, function(err, profile) {
        if (profile) {
          userProfile = profile;
          console.log('userProfile: ', userProfile);
          //this.displayProfile();
          /*this.setState({ nickname: userProfile.nickname }, function() {
            console.log('Nickname inside: ', this.state.nickname);
          });*/
        }
      });
    }



  }

  componentDidMount() {
    window.scrollTo(0, 0);    // this doesn't seem to work
    this.props.auth.getProfile();
    //console.log('Campaign Auth: ', auth0.webAuth);
    //console.log('Nickname: ', this.state.nickname);
    //console.log('mounting isChecked: ', this.state.auto);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      {
        isAuthenticated() && (
          <div className="container justify-content-xs-center"
            id="campaign"
          >
            Please complete the form below to schedule your campaign
            <Name updateState={this.handleChange} />
            <br/>
            <User {...this.props} />
            <br/>
            <Budget updateState={this.handleChange} />
            <br/>
            Auto schedule <Auto
              checked={this.state.auto}
              updateState={this.handleChange}/>
            <br/>
            <Flightings updateState={this.handleChange} />
            <br/>
            Location
            <br/>
            GPS Long range
            <br/>
            GPS Lat range
            <br/>
            <Resolution updateState={this.handleChange} />
            <br/>
            Camera
            <br/>
            Sound
            <br/>
            Touch
            <br/>
            Orientation
            <br/>
            Format
            <br/>
            Country
            <br/>
            Province
            <br/>
            Region
            <br/>
            Town
            <br/>
            Suburb
            <br/>
            Squadron
            <br/>
            LSM
            <br/>
            Demographic
            <br/>

            <Industry />
            <Category />
            <br/>
            Start date
            <br/>
            End date
            <br/>
            Hours
            <br/>
            Upload
            <br/>
          </div>
        )
      }
      </div>
    );
  }
}

export default Campaign;
