import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getFullClassObject } from '../util'

const Select = props => {
  const classes = classNames('control__select', { ...getFullClassObject(props) }, props.className)

  return (
    <div className={classes}>
      <select {...props.attributes} {...props.eventHandlers}>
        {props.children}
      </select>
    </div>
  )
}

Select.displayName = 'Select'

Select.defaultProps = {}

Select.propTypes = {
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

export default Select
