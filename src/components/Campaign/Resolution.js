import React from 'react';

export const Resolution  = (props) => (
  <select name={props.name} value={props.value} onChange={props.handleChange}>
    <option value="0"> - Select a resolution - </option>
    <option value="1">1366 x 768 (16:9)</option>
    <option value="2">1920 x 1080 (16:9)</option>

  </select>
)
