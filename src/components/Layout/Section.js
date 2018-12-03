import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Section = props => {
  const TagName = props.tagName;

  const classes = classNames(
    'l-section',
    {
      'l-section--simple': props.simple,
      'l-section--auto': props.auto,
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
    },
    props.className
  );

  return <TagName className={classes}>{props.children}</TagName>;
};

Section.displayName = 'Section';

Section.defaultProps = {
  tagName: 'section',
};

export default Section;
