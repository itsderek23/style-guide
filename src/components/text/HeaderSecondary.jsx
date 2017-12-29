import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HEADER_TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6'
};

const HEADER_SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  XSMALL: 'xsmall'
};

const HEADER_COLOR = {
  LIGHT: 'light'
};

const HeaderSecondary = ({children, type = HEADER_TYPE.H1, size = HEADER_SIZE.NORMAL, color, className, ...props}) => {
  const Type = type;
  const headerClass = classNames('sg-header-secondary', {
    [`sg-header-secondary--${size}`]: size !== HEADER_SIZE.NORMAL,
    [`sg-header-secondary--${color}`]: color
  }, className);

  return (
    <Type {...props} className={headerClass}>
      {children}
    </Type>
  );
};

HeaderSecondary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(HEADER_TYPE)),
  size: PropTypes.oneOf(Object.values(HEADER_SIZE)),
  color: PropTypes.oneOf(Object.values(HEADER_COLOR)),
  className: PropTypes.string
};

export default HeaderSecondary;
export {HEADER_TYPE, HEADER_SIZE, HEADER_COLOR};
