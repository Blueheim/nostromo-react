import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { suffixes } from '../data.js';

const Select = props => {
  const roundedClasses = {};
  const borderClasses = {};

  suffixes.forEach(suffix => {
    roundedClasses[`m-rounded-${suffix}`] = props[`rounded-${suffix}`];
    borderClasses[`m-border-${suffix}`] = props[`border-${suffix}`];
  });

  const classes = classNames(
    'control__select',
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

  return (
    <select type={props.text} placeholder={props.placeholder} className={classes}>
      {props.children}
    </select>
  );
};

Select.displayName = 'Select';

Select.defaultProps = {
  type: 'text',
};

export default Select;
