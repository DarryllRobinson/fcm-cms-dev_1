import React from 'react';

export const Industry  = (props) => (
  <select name={props.name} value={props.value} onChange={props.handleChange}>
    <option value="0"> - Select an industry - </option>
    <option value="1">Banking</option>
    <option value="2">Broadcasting</option>
    <option value="3">Debt Recovery</option>
    <option value="4">Entertainment</option>
    <option value="5">Insurance</option>
    <option value="6">Micro Lenders</option>
    <option value="7">Retail Apparel</option>
    <option value="8">Retail Furnitute</option>
    <option value="9">Retail General</option>
    <option value="10">Security</option>
    <option value="11">Telecommunications</option>
  </select>
)
