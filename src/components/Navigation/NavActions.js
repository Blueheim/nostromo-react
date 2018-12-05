import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavActions = props => {
  const classes = classNames('nav__actions', {}, props.className);

  return <ul className={classes}>{props.children}</ul>;
};

NavActions.displayName = 'NavActions';

NavActions.defaultProps = {};

export default NavActions;
