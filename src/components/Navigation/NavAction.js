import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavAction = props => {
  const classes = classNames(
    'nav__action',
    {
      'nav__action--1': props.type === '1',
      'nav__action--2': props.type === '2',
    },
    props.className
  );

  return <li className={classes}>{props.children}</li>;
};

NavAction.displayName = 'NavAction';

NavAction.defaultProps = {
  type: '1',
};

export default NavAction;
