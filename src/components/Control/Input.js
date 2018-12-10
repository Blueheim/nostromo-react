import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getFullClassObject } from '../util'

const Input = props => {
  const classes = classNames('control__input', { ...getFullClassObject(props) }, props.className)

  return <input className={classes} {...props.attributes} {...props.eventHandlers} />
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool,
  attributes: PropTypes.shape({ type: PropTypes.string.isRequired, placeholder: PropTypes.string }),
  eventHandlers: PropTypes.objectOf(PropTypes.func)
}

export default Input
