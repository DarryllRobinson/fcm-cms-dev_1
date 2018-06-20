import React, { Component } from 'react';
import Entry from './Entry';
import axios from 'axios';

class Signup extends Component {

  componentDidMount() {
    this.getIPstack();
  }

  getIPstack() {
    axios.get('http://api.ipstack.com/check?access_key=416692c0c41decfa8027d5604496e3bf')
      .then(res => {
        console.log('res: ', res);
    });
  }

  render() {

    return (
      <div>
        <Entry />
      </div>
    );
  }
}

export default Signup;
