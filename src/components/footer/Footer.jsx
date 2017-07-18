import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({children}) => <div className="sg-footer">
  <div className="sg-footer__container">
    {children}
  </div>
</div>;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
