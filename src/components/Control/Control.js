import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Control = props => {
  const classes = classNames('control', {}, props.className);

  return <div className={classes}>{props.children}</div>;
};

Control.displayName = 'Control';

Control.defaultProps = {};

export default Control;
