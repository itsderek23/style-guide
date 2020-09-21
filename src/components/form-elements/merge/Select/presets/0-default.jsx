import React from 'react';
import Select from '../Select';

const exampleOptions = [
  {value: 'option1', text: 'Option 1'},
  {value: 'option2', text: 'Option 2'},
  {value: 'option3', text: 'Option 3'},
];

export default (
  <Select uxpId="select-1" options={exampleOptions} size="m" color="white" />
);
