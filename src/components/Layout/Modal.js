import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = props => {
  const classes = classNames('modal', {}, props.className);

  return <div className={classes}>{props.children}</div>;
};

Modal.displayName = 'Modal';

Modal.defaultProps = {};

export default Modal;
