import React, { Component } from 'react';

class Checkbox extends Component {

  state = {
    isChecked: false
  }

  toggleCheckboxChange = () => {

    this.props.updateState;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ), function() {
      console.log('isChecked: ', this.state.isChecked);
      this.props.updateState;
    });
  }

  componentDidMount() {
    console.log('mounting isChecked: ', this.props.checked);
  }

  render() {

    return (
      <div className="checkbox">
        <input
          type="checkbox"
          name="auto"
          checked={this.props.checked}
          onChange={this.toggleCheckboxChange}
        />
      </div>
    );
  }
}

export default Checkbox;
