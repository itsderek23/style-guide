// @flow strict

import React from 'react';
import RadioM from '../../Radio';

type RadioSizeType = 'xxs' | 's';

export const RADIO_SIZE = {
  xxs: 'xxs',
  s: 's',
};

export type RadioPropsType = {
  checked?: boolean,
  name?: string,
  id?: string,
  size?: ?RadioSizeType,
  className?: string,
  ...
};

const Radio = (props: RadioPropsType) => {
  return <RadioM {...props} />;
};

export default Radio;
