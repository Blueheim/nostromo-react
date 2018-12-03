import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const TagName = props.tagName;

  const classes = classNames(
    'btn',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      '': props.tiny,
    },
    props.className
  );

  return <TagName className={classes}>{props.children}</TagName>;
};

Button.displayName = 'Button';

Button.defaultProps = {
  tagName: 'button',
};

export default Button;
