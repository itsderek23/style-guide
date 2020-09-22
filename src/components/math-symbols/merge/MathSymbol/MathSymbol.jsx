// @flow strict

import React from 'react';
import MathSymbolM from '../../MathSymbol';

export type IconColorType =
  | 'adaptive'
  | 'blue'
  | 'dark'
  | 'gray'
  | 'gray-light'
  | 'gray-secondary'
  | 'lavender'
  | 'light'
  | 'mint'
  | 'mustard'
  | 'navy-blue'
  | 'peach';

export type MathSymbolTypeType =
  | 'squere-root'
  | 'nth-root'
  | 'power'
  | 'subscript'
  | 'less-then-or-equal'
  | 'greater-then-or-equal'
  | 'inequality'
  | 'division'
  | 'pi'
  | 'alpha'
  | 'beta'
  | 'line'
  | 'limit'
  | 'matrix'
  | 'integral'
  | 'equation-system';

export const MATH_SYMBOL_TYPE = {
  SQUERE_ROOT: 'squere-root',
  NTH_ROOT: 'nth-root',
  POWER: 'power',
  SUBSCRIPT: 'subscript',
  LESSEQUAL: 'less-then-or-equal',
  GREATEREQUAL: 'greater-then-or-equal',
  INEQUALITY: 'inequality',
  DIVISION: 'division',
  PI: 'pi',
  ALPHA: 'alpha',
  BETA: 'beta',
  LINE: 'line',
  LIMIT: 'limit',
  MATRIX: 'matrix',
  INTEGRAL: 'integral',
  EQUATION_SYSTEM: 'equation-system',
};

export type MathSymbolSizeType = 'small' | 'medium' | 'normal';

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal',
};

type PropsType = {
  type: MathSymbolTypeType,
  size?: MathSymbolSizeType,
  color?: IconColorType,
  className?: string,
  ...
};

const MathSymbol = (props: PropsType) => {
  return <MathSymbolM {...props} />;
};

export default MathSymbol;
