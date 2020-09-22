// @flow strict

import React from 'react';
import TextAreaM from '../../Textarea';

type TextareaSizeType = 'short' | 'normal' | 'tall' | 'xtall';

type TextareaColorType = 'default' | 'white';

export const SIZE = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall',
};

export const TEXTAREA_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
};

export type TextareaPropsType = {
  // $FlowFixMe any generic prop types here broke autocomplete, so let's leave it as is for now
  type?: string | (any => React$Node),
  /**
   * Additional function to set ref for textarea
   */
  textareaRef?: (ref: ?HTMLElement) => mixed,
  /**
   * Optional specification for input value
   * @example <Textarea value="some example value" />
   */
  value?: React$Node,
  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Textarea color="white" placeholder="placeholder" />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#textarea
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#textarea
   */
  color?: ?TextareaColorType,
  /**
   * Specify size of the textarea
   * @example <Textarea size="short" placeholder="example placeholder" />
   * @see size="short" https://styleguide.brainly.com/latest/docs/interactive.html?size="short"#textarea
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#textarea
   * @see size="tall" https://styleguide.brainly.com/latest/docs/interactive.html?size="tall"#textarea
   * @see size="xtall" https://styleguide.brainly.com/latest/docs/interactive.html?size="xtall"#textarea
   */
  size?: ?TextareaSizeType,
  /**
   * Optional boolean to specified if it's valid
   * @example <Textarea valid placeholder="example placeholder" />
   */
  valid?: boolean,
  /**
   * Optional boolean to specified if it's valid
   * @example <Textarea valid placeholder="example placeholder" />
   */
  invalid?: boolean,
  /**
   * Optional boolean to specified if it's full width
   * @example <Textarea fullWidth placeholder="example placeholder" />
   */
  fullWidth?: boolean,
  /**
   * Optional boolean for simple variant (does not have border radius)
   * @example <Textarea simple placeholder="example placeholder" />
   */
  simple?: boolean,
  /**
   * Optional boolean for variant with no padding
   * @example <Textarea noPadding placeholder="example placeholder" />
   */
  noPadding?: boolean,
  /**
   * Optional boolean for variant with height auto
   * @example <Textarea autoHeight placeholder="example placeholder" />
   */
  autoHeight?: boolean,
  /**
   * Optional Node if there should be an error message displayed
   * @example <Textarea errorMessage="This is an error" />
   */
  errorMessage?: React$Node | string,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

function TextArea(props: TextareaPropsType) {
  return <TextAreaM {...props} />;
}

export default TextArea;
