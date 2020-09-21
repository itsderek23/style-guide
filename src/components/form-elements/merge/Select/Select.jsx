// @flow strict

import React from 'react';
import SelectM from '../../Select';

export type OptionsPropsType = {
  value: string,
  text: string,
  ...
};

export type SelectSizeType = 'm' | 'l';

export type SelectColorType = 'default' | 'white';

export type SelectPropsType = {
  /**
   * Optional specification for select value
   * @example <Select value="Option1" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  value?: string,
  /**
   * Optional boolean to specified if it's valid
   * @example <Select valid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  valid?: boolean,
  /**
   * Optional boolean to specified if it's invalid
   * @example <Select invalid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  invalid?: boolean,
  /**
   * Optional boolean to specified if it's capitalized
   * @example <Select capitalized options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  capitalized?: boolean,
  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Select color="white" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#select
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#select
   */
  color?: ?SelectColorType,
  /**
   * There are two sizes options for most of the form elements
   * @example <Select size="m" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   * @see size="m" https://styleguide.brainly.com/latest/docs/interactive.html?size="m"#select
   * @see size="l" https://styleguide.brainly.com/latest/docs/interactive.html?size="l"#select
   */
  size?: ?SelectSizeType,
  /**
   * Optional boolean to specified if it's full width
   * @example <Select fullWidth placeholder="placeholder" />
   */
  fullWidth?: boolean,
  /**
   * Optional array of options of the select
   * @example <Select size="m" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
   */
  options?: Array<OptionsPropsType>,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

function Select(props: SelectPropsType) {
  return <SelectM {...props} />;
}

export default Select;
