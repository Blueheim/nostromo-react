import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = props => {
  const classes = classNames('image', {}, props.className);

  return <img src={props.src} alt={props.alt} className={classes} />;
};

Image.displayName = 'Image';

Image.defaultProps = {};

export default Image;
