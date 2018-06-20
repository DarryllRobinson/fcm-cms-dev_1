import React, { Component } from 'react';
//import Nav from '../Nav';
//import Upload from '../Upload/Upload';
import {Industry} from './Industry';
import { Category } from './Category';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import history from '../../history';

import './react-datepicker.css';
import './Scheduler.css';

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auto: false,
      name: '',
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
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.myColour = this.myColour.bind(this);
    this.handleAuto = this.handleAuto.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value} );
    console.log('e.target.name: ', e.target.name);
    console.log('e.target.value: ', e.target.value);
    console.log('logging: ',
    [
      this.state.auto.toString(),
      this.state.name.toString(),
      this.state.flightings.toString(),
      this.state.startDate.format(),
      this.state.endDate.format(),
      this.state.industry.toString(),
      this.state.category.toString(),
      'TBM'
    ]);
  }

  handleAuto(e) {
    //const currentState = this.state.auto;
    //this.setState({ this.state.auto: !currentState });
  }

  handleChangeStart(date) {
    this.setState({ startDate: date })
  }

  handleChangeEnd(date) {
    this.setState({ endDate: date })
  }

  handleToggle(e) {
    const currentState = this.state[e.target.getAttribute("name")];
    this.setState({ [e.target.getAttribute("name")]: !currentState });
  }

myColour(hour) {
  if (this.state[hour] === false) {
    return "";
  }
  return "grey";
}

  uploadWidget = () => {
    /*let myTags = [
      this.state.auto.toString(),
      this.state.name.toString(),
      this.state.flightings.toString(),
      this.state.startDate.format(),
      this.state.endDate.format(),
      this.state.industry.toString(),
      this.state.category.toString(),
      'TBM'
    ];*/

    let myTags = JSON.stringify(this.state);

    window.cloudinary.openUploadWidget( {
      cloud_name: 'flycrow',
      upload_preset: 'ubx3ytwg',
      tags: myTags,
      sources: ['local', 'url']
    },
      function(error, result) {
        if (result) {
          //console.log("This is the result of the last upload", result);
          history.push(`/success`);
        } else {
          history.push('/fail');
        }
      });
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      {
        isAuthenticated() && (
          <div>
        <h3 className="text-center">Scheduler</h3>
        <hr/>
{console.log('state: ', JSON.stringify(this.state))}
        <div className="container justify-content-xs-center"
          id="campaign"
          onChange={this.handleChange}>

          {/*<h4>Campaign Details</h4>*/}
          <div className="row justify-content-xs-center pl-1">
            <div className="col col-xs-12">
              <input type="text" name="name" placeholder="Campaign Name" />
            </div>
          </div>

          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-4 col-md-3 pt-1"
            onChange={this.handleToggle}>
              Auto Schedule
            </div>

            <div className="col col-xs-1 col-md-2 pt-1">
              <input type="checkbox"
                name="auto" />
            </div>

            <div className="col col-xs-5 col-md-4 pt-1">
              Number of flightings
            </div>

            <div className="col col-xs-2 col-md-3 pt-1">
              <input type="number"
                id="flight"
                name="flightings"
                placeholder="0"
                onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-6 col-md-6 mb-2 pt-1">
              <Industry
                name="industry"
                value={this.state.industry}
                onChange={this.handleChange} />
            </div>

            <div className="col col-xs-6 col-md-6 mb-2 pt-1">
              <Category
                name="category"
                value={this.state.category}
                onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-12 col-md-6 mb-2 pt-1">
              Start Date
              <DatePicker
                dateFormat="YYYY/MM/DD"
                name="startDate"
                todayButton={"Today"}
                selected={this.state.startDate}
                onChange={this.handleChangeStart}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                showWeekNumbers
                selectsStart />
            </div>
            <div className="col col-xs-12 col-md-6 mb-2 pt-1">
              End Date
              <DatePicker
                dateFormat="YYYY/MM/DD"
                name="endDate"
                todayButton={"Today"}
                selected={this.state.endDate}
                onChange={this.handleChangeEnd}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                showWeekNumbers
                selectsEnd />
            </div>
          </div>

          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-12 mb-2 pt-1">
              Choose the hours you would like your content to be shown
            </div>
          </div>

          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-2"
              id="campaign"
              name="one"
              style={{ background: this.myColour("one") }}
              onClick={this.handleToggle}>
              00:00 - 01:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="two"
              style={{ background: this.myColour("two") }}
              onClick={this.handleToggle}>
              01:00 - 02:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="three"
              style={{ background: this.myColour("three") }}
              onClick={this.handleToggle}>
              02:00 - 03:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="four"
              style={{ background: this.myColour("four") }}
              onClick={this.handleToggle}>
              03:00 - 04:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="five"
              style={{ background: this.myColour("five") }}
              onClick={this.handleToggle}>
              04:00 - 05:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="six"
              style={{ background: this.myColour("six") }}
              onClick={this.handleToggle}>
              05:00 - 06:00
            </div>
          </div>
          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-2"
              id="campaign"
              name="seven"
              style={{ background: this.myColour("seven") }}
              onClick={this.handleToggle}>
              06:00 - 07:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="eight"
              style={{ background: this.myColour("eight") }}
              onClick={this.handleToggle}>
              07:00 - 08:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="nine"
              style={{ background: this.myColour("nine") }}
              onClick={this.handleToggle}>
              08:00 - 09:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="ten"
              style={{ background: this.myColour("ten") }}
              onClick={this.handleToggle}>
              09:00 - 10:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="eleven"
              style={{ background: this.myColour("eleven") }}
              onClick={this.handleToggle}>
              10:00 - 11:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="twelve"
              style={{ background: this.myColour("twelve") }}
              onClick={this.handleToggle}>
              11:00 - 12:00
            </div>
          </div>

          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-2"
              id="campaign"
              name="thirteen"
              style={{ background: this.myColour("thirteen") }}
              onClick={this.handleToggle}>
              12:00 - 13:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="fourteen"
              style={{ background: this.myColour("fourteen") }}
              onClick={this.handleToggle}>
              13:00 - 14:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="fifteen"
              style={{ background: this.myColour("fifteen") }}
              onClick={this.handleToggle}>
              14:00 - 15:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="sixteen"
              style={{ background: this.myColour("sixteen") }}
              onClick={this.handleToggle}>
              15:00 - 16:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="seventeen"
              style={{ background: this.myColour("seventeen") }}
              onClick={this.handleToggle}>
              16:00 - 17:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="eighteen"
              style={{ background: this.myColour("eighteen") }}
              onClick={this.handleToggle}>
              17:00 - 18:00
            </div>
          </div>
          <div className="row justify-content-xs-center pt-2 pl-1">
            <div className="col col-xs-2"
              id="campaign"
              name="nineteen"
              style={{ background: this.myColour("nineteen") }}
              onClick={this.handleToggle}>
              18:00 - 19:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="twenty"
              style={{ background: this.myColour("twenty") }}
              onClick={this.handleToggle}>
              19:00 - 20:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="twentyone"
              style={{ background: this.myColour("twentyone") }}
              onClick={this.handleToggle}>
              20:00 - 21:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="twentytwo"
              style={{ background: this.myColour("twentytwo") }}
              onClick={this.handleToggle}>
              21:00 - 22:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="twentythree"
              style={{ background: this.myColour("twentythree") }}
              onClick={this.handleToggle}>
              22:00 - 23:00
            </div>
            <div className="col col-xs-2"
              id="campaign"
              name="twentyfour"
              style={{ background: this.myColour("twentyfour") }}
              onClick={this.handleToggle}>
              23:00 - 00:00
            </div>
          </div>

          <div className="text-center">{/*<input placeholder="Content Tag" onChange={this.handleTagChange}></input>*/}
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info m-3">Upload Content</button>
          </div>
        </div>
        </div>
      )}
      </div>
    );
  }
}

export default Scheduler;
