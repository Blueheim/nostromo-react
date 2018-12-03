import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Main = props => {
  const classes = classNames(
    'l-main',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
    },
    props.className
  );

  return <div className={classes}>{props.children}</div>;
};

Main.displayName = 'Main';

Main.defaultProps = {};

export default Main;
