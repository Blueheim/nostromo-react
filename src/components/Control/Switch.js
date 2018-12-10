import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { suffixes } from '../data.js'

const Switch = props => {
  const roundedClasses = {}

  suffixes.forEach(suffix => {
    roundedClasses[`m-rounded-${suffix}`] = props[`rounded-${suffix}`]
  })

  const classes = classNames(
    'control__switch',
    {
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      'm-valid': props.valid,
      'm-invalid': props.invalid,
      'm-info': props.info,
      'm-alert': props.alert,
      ...roundedClasses
    },
    props.className
  )

  return (
    <div className={classes}>
      <input type={props.type} id={props.id} name={props.name} value={props.value} className='switch-box' />
      <label htmlFor={props.id} className='switch-handler' />
    </div>
  )
}

Switch.displayName = 'Switch'

Switch.defaultProps = {
  type: 'checkbox'
}

Switch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool
}

export default Switch
