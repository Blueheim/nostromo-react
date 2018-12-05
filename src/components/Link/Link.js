import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { suffixes } from '../../data.js';

const Link = props => {
  const radiusClasses = {};
  const borderClasses = {};

  suffixes.forEach(suffix => {
    radiusClasses[`m-radius-${suffix}`] = props[`rounded-${suffix}`];
    borderClasses[`m-border-${suffix}`] = props[`border-${suffix}`];
  });

  const classes = classNames(
    'link',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      ...radiusClasses,
      ...borderClasses,
    },
    props.className
  );

  return (
    <a href={props.href} className={classes}>
      {props.children}
    </a>
  );
};

Link.displayName = 'Link';

Link.defaultProps = {};

export default Link;
