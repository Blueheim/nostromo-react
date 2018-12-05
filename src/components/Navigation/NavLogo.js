import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavLogo = props => {
  const classes = classNames('nav__logo', {}, props.className);

  return (
    <a title={props.title} className={classes}>
      {props.children}
    </a>
  );
};

NavLogo.displayName = 'NavLogo';

NavLogo.defaultProps = {};

export default NavLogo;
