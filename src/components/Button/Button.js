import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { suffixes } from '../data.js';

const Button = props => {
  const roundedClasses = {};
  const borderClasses = {};

  suffixes.forEach(suffix => {
    roundedClasses[`m-rounded-${suffix}`] = props[`rounded-${suffix}`];
    borderClasses[`m-border-${suffix}`] = props[`border-${suffix}`];
  });

  const classes = classNames(
    'btn',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      'm-valid': props.valid,
      'm-invalid': props.invalid,
      'm-info': props.info,
      'm-alert': props.alert,
      ...roundedClasses,
      ...borderClasses,
    },
    props.className
  );

  return <button className={classes}>{props.children}</button>;
};

Button.displayName = 'Button';

Button.defaultProps = {};

export default Button;
