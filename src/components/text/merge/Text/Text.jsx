// @flow strict

import * as React from 'react';
import TextM from '../../Text';

export type TextTypeType =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'a';

export type TextSizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type TextColorType =
  | 'default'
  | 'white'
  | 'gray'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'mint-dark'
  | 'peach-dark'
  | 'mustard-dark'
  | 'lavender-dark'
  | 'blue-dark';

export type TextWeightType = 'regular' | 'bold';

export type TextTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type TextAlignType = 'to-left' | 'to-center' | 'to-right' | 'justify';
export type TextWhiteSpaceType = 'pre-wrap' | 'pre-line';

export type TextPropsType = {
  children?: React$Node,
  size?: TextSizeType,
  type?: TextTypeType,
  color?: ?TextColorType,
  weight?: TextWeightType,
  transform?: ?TextTransformType,
  align?: ?TextAlignType,
  noWrap?: ?boolean,
  asContainer?: ?boolean,
  full?: ?boolean,
  breakWords?: ?boolean,
  whiteSpace?: TextWhiteSpaceType,
  className?: ?string,
  ...
};

const Text = (props: TextPropsType) => {
  return <TextM {...props} />;
};

export default Text;
