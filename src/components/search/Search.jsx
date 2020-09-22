// @flow strict

import React from 'react';
import cx from 'classnames';
import * as InputModule from '../form-elements/Input';
import Icon from '../icons/Icon';
import Button from '../buttons/Button';

const {default: Input, COLOR, SIZE} = InputModule;

type InputSizeType = 'm' | 'l';

type InputColorType = 'default' | 'white';

type InputType =
  | 'button'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

type PropsType = {
  inputClassName?: string,
  withRoundButton?: boolean,
  /**
   * Optional specification for input type
   * @example <Input type="email" placeholder="placeholder" />
   */
  type?: ?InputType,
  /**
   * Optional specification for input value, which can be string or number
   * @example <Input type="email" value={2} />
   */
  value?: string | number,
  /**
   * There are two sizes options for most of the form elements
   * @example <Input size="normal" placeholder="placeholder" />
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#input
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#input
   */
  size?: ?InputSizeType,
  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Input color="white" placeholder="placeholder" />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#input
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#input
   */
  color?: ?InputColorType,
  /**
   * Optional boolean to specified if it's valid
   * @example <Input valid placeholder="placeholder" />
   */
  valid?: boolean,
  /**
   * Optional boolean to specified if it's invalid
   * @example <Input invalid placeholder="placeholder" />
   */
  invalid?: boolean,
  /**
   * Optional boolean to specified if it's full width
   * @example <Input fullWidth placeholder="placeholder" />
   */
  fullWidth?: boolean,
  /**
   * Optional boolean to specified if it's with icon, used in search component
   * @example <Input withIcon placeholder="placeholder" />
   */
  withIcon?: boolean,
  /**
   * Optional Node if there should be an error message displayed
   * @example <Input errorMessage="This is an error" />
   */
  errorMessage?: Node | string,
  /**
   * Additional class names
   */
  className?: string,
  /**
   * Additional function to set ref for input
   */
  setInputRef?:
    | {current: ?HTMLInputElement}
    | ((ref: ?HTMLElement | ?HTMLInputElement) => mixed),
  ...
};

const Search = ({
  /**
   * Additional class names
   */
  className,
  /**
   * Optional boolean for full width search
   * @example <Search fullWidth placeholder="Find all the answers..." />
   */
  fullWidth,
  /**
   * There are two sizes options for most of the form elements
   * @example <Search size="normal" placeholder="Find all the answers..." />
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#search
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#search
   */
  size,
  /**
   * Optional boolean for round button in search
   * @example <Search withRoundButton />
   */
  withRoundButton = false,
  /**
   * Optional classname for input in search
   * @example <Search inputClassName="sg-input--white" placeholder="Find all the answers..." />
   */
  inputClassName,
  /**
   * Additional classname for input in search, like color, which is pass directly to input
   * @example <Search color="white" placeholder="Find all the answers..." />
   */
  ...additionalProps
}: PropsType) => {
  const baseClassName = 'sg-search';

  const searchClassName = cx(
    baseClassName,
    {
      [`sg-search--${String(size)}`]: size,
      'sg-search--full-width': fullWidth,
    },
    className
  );

  return (
    <div className={searchClassName}>
      <Input
        {...additionalProps}
        type="search"
        withIcon
        size={size}
        className={cx(`${baseClassName}__input`, inputClassName)}
      />

      {withRoundButton ? (
        <div className={`${baseClassName}__icon`}>
          <Button
            type="solid"
            icon={
              <Icon
                type="search"
                size={size === 'l' ? 24 : 16}
                color="adaptive"
              />
            }
            iconOnly
            size={size === 'l' ? 'm' : 's'}
          />
        </div>
      ) : (
        <button className={`${baseClassName}__icon`}>
          <Icon
            type="search"
            color="gray-secondary"
            size={size === 'l' ? 24 : 18}
          />
        </button>
      )}
    </div>
  );
};

export default Search;
export {SIZE, COLOR};
