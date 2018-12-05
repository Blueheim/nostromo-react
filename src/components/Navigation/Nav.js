import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nav = props => {
  const classes = classNames(
    'nav',
    {
      'nav--vertical': props.vertical,
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
    },
    props.className
  );

  return <nav className={classes}>{props.children}</nav>;
};

Nav.displayName = 'Nav';

Nav.defaultProps = {
  vertical: false,
};

export default Nav;
