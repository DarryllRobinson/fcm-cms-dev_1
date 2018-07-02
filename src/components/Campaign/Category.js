import React from 'react';

export const Category  = (props) => (
  <select name={props.name} value={props.value} onChange={props.handleChange}>
    <option value="0"> - Select a category - </option>
    <option value="1">Health & Wellness</option>
    <option value="2">Fashion</option>
    <option value="3">Lifestyle</option>
    <option value="4">Sport</option>
  </select>
)
