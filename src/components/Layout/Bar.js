import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Bar = props => {
  const classes = classNames(
    'l-bar',
    {
      'l-bar--left': props.left,
      'l-bar--right': props.right,
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      'm-grey-1': props.grey1,
      'm-grey-2': props.grey2,
      'm-grey-3': props.grey3,
    },
    props.className
  );

  return <div className={classes}>{props.children}</div>;
};

Bar.displayName = 'Bar';

Bar.defaultProps = {};

export default Bar;
