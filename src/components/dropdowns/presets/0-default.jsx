import React from 'react';
import Dropdown from '../Dropdown';

export default (
  <Dropdown
    uxpId="dropdown-1"
    name="Brainly.com"
    initiallyOpened
    links={[
      {label: 'Brainly.pl', url: 'http://www.brainly.pl'},
      {label: 'Brainly.com', url: 'http://www.brainly.com'},
    ]}
    color="white"
  />
);
