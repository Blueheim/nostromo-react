import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = props => {
  const classes = classNames(
    'l-footer',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
    },
    props.className
  );

  return <div className={classes}>{props.children}</div>;
};

Footer.displayName = 'Footer';

Footer.defaultProps = {};

export default Footer;
