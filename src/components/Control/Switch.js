import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getThemeClassObject, getRoundedClassObject } from '../util'

const Switch = props => {
  const classes = classNames(
    'control__switch',
    {
      ...getThemeClassObject(props),
      ...getRoundedClassObject(props)
    },
    props.className
  )

  return (
    <div className={classes}>
      <input type='checkbox' className='switch-box' {...props.attributes} {...props.eventHandlers} />
      <label htmlFor={props.attributes.id} className='switch-handler' />
    </div>
  )
}

Switch.displayName = 'Switch'

Switch.defaultProps = {}

Switch.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool,
  attributes: PropTypes.shape({ id: PropTypes.string.isRequired }),
  eventHandlers: PropTypes.objectOf(PropTypes.func)
}

export default Switch
