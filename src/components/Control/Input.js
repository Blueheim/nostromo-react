import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { suffixes } from '../data.js';

const Input = props => {
  const roundedClasses = {};
  const borderClasses = {};

  suffixes.forEach(suffix => {
    roundedClasses[`m-rounded-${suffix}`] = props[`rounded-${suffix}`];
    borderClasses[`m-border-${suffix}`] = props[`border-${suffix}`];
  });

  const classes = classNames(
    'control__input',
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

  return <input type={props.text} placeholder={props.placeholder} className={classes} />;
};

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
};

export default Input;
