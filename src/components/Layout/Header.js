import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Header = props => {
  const classes = classNames(
    'l-header',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
    },
    props.className
  );

  return <div className={classes}>{props.children}</div>;
};

Header.displayName = 'Header';

Header.defaultProps = {};

export default Header;
