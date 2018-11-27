import React, { Component } from 'react';

class Flightings extends Component {

  render() {

    return (
      <div className="campaignBudget">
        <input
          type="number"
          name="flightings"
          placeholder="No. of flightings"
          onChange={this.props.updateState}
        />
      </div>
    )
  }
}

export default Flightings;
