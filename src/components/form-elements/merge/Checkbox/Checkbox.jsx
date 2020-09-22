// @flow strict

import React from 'react';
import CheckboxM from '../../Checkbox';

export type CheckboxPropsType = {
  checked?: boolean,
  id?: string,
  className?: string,
  ...
};

const Checkbox = (props: CheckboxPropsType) => {
  return <CheckboxM {...props} />;
};

export default Checkbox;
