import React, { Component } from 'react';

class Budget extends Component {

  render() {

    return (
      <div className="campaignBudget">
        <input
          type="number"
          name="budget"
          placeholder="Budget amount"
          onChange={this.props.updateState}
        />
      </div>
    )
  }
}

export default Budget;
