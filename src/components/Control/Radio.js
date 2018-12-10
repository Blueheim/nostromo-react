import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Radio = props => {
  const radioClasses = classNames(
    'control__radio',
    {
      'm-primary': props.primary,
      'm-primary--reverse': props.primaryReverse,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      'm-valid': props.valid,
      'm-invalid': props.invalid,
      'm-info': props.info,
      'm-alert': props.alert
    },
    props.className
  )

  const elementClasses = classNames('control__radio-element', { 'control__radio-element--rounded': props.rounded })

  return (
    <div className='control__radio-group'>
      <input type='radio' className='control__radio-input' id={props.id} name={props.name} value={props.value} />
      <label htmlFor={props.id} className={radioClasses}>
        <span className={elementClasses} />
        <span className='control__radio-text m-text-grey-dark-1'>{props.children}</span>
      </label>
    </div>
  )
}

Radio.displayName = 'Radio'

Radio.defaultProps = {}

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  primary: PropTypes.bool,
  primaryReverse: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool
}

export default Radio
