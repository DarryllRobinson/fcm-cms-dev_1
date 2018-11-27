import React, { Component } from 'react';

class Name extends Component {

  render() {

    return (
      <div className="campaignName">
        <input
          type="text"
          name="name"
          placeholder="Campaign name"
          onChange={this.props.updateState}
        />
      </div>
    )
  }
}

export default Name;
