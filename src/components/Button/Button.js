import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getFullClassObject } from '../util'

const Button = props => {
  const classes = classNames('btn', { ...getFullClassObject(props) }, props.className)

  return (
    <button className={classes} {...props.attributes} {...props.eventHandlers}>
      {props.children}
    </button>
  )
}

Button.displayName = 'Button'

Button.defaultProps = {}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool,
  attributes: PropTypes.shape({ type: PropTypes.string }),
  eventHandlers: PropTypes.objectOf(PropTypes.func)
}

export default Button
