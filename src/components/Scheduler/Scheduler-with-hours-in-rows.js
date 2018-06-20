import React, { Component } from 'react';
import Nav from '../Nav';
import './Scheduler_stylish.css';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class Scheduler extends Component {


  render() {
    let rows = [];
    for (var i = 0; i < 24; i++){ // setting number of rows
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < 20; idx++){ // setting number of columns
        let cellID = `cell${i}-${idx}`
        //console.log('cell${i}-${idx}: ', cell[i]-[idx]);
        cell.push(<td key={cellID} id={cellID}>Content</td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }

    // Trying something

    //console.log('cell${i}-${idx}: ', cell[i]-[idx]);

    return (
      <div>
        <Nav />
        <h3 className="text-center">Scheduler</h3>
        <hr/>

        <table id="scheduler">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
               <tbody>
                <tr>
                  <th>00:00 - 00:03</th>
                  <th>00:03 - 00:06</th>
                  <th>00:06 - 00:09</th>
                  <th>00:09 - 00:12</th>
                  <th>00:12 - 00:15</th>
                  <th>00:15 - 00:18</th>
                  <th>00:18 - 00:21</th>
                  <th>00:21 - 00:24</th>
                  <th>00:24 - 00:27</th>
                  <th>00:27 - 00:30</th>
                  <th>00:30 - 00:33</th>
                  <th>00:33 - 00:36</th>
                  <th>00:36 - 00:39</th>
                  <th>00:39 - 00:42</th>
                  <th>00:42 - 00:45</th>
                  <th>00:45 - 00:48</th>
                  <th>00:48 - 00:51</th>
                  <th>00:51 - 00:54</th>
                  <th>00:54 - 00:57</th>
                  <th>00:57 - 01:00</th>
                </tr>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </table>

      </div>
    );
  }
}

export default Scheduler;
/*
const yourData = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];*/
