import React, { Component } from 'react';
import Auth from '../../Auth/Auth';

var userProfile;

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: 'fff'
    }
  }

  getProfile() {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      console.log('Access token must exist to fetch profile');
    }

    const webAuth = new Auth();

    webAuth.client.userInfo(accessToken, function(err, profile) {
      if (profile) {
        userProfile = profile;
        //this.displayProfile();
        this.setState({ nickname: userProfile.nickname });
      }
    });
  }

  displayProfile() {
    // display the profile
    document.querySelector('#profile-view .nickname').innerHTML =
      userProfile.nickname;
    document.querySelector(
      '#profile-view .full-profile'
    ).innerHTML = JSON.stringify(userProfile, null, 2);
    document.querySelector('#profile-view img').src = userProfile.picture;
  }

  render() {

    return (

      <div id="profile-view" className="panel panel-default profile-area">
        <div className="panel-heading">
          <h3>Profile</h3>
        </div>
          <div className="panel-body">
            <img className="avatar" alt="avatar" />
            <div>
              <label><i className="glyphicon glyphicon-user"></i> Nickname</label>
              <h3 className="nickname">{this.state.nickname}</h3>
            </div>
            <pre className="full-profile"></pre>
          </div>
      </div>
    )
  }
}

export default User;
