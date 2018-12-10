import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Control = props => {
  const classes = classNames('control', { 'control--center': props.center }, props.className)

  return <div className={classes}>{props.children}</div>
}

Control.displayName = 'Control'

Control.defaultProps = {}

Control.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Control
