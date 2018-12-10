import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getThemeClassObject } from '../util'

const Radio = props => {
  const radioClasses = classNames('control__radio', { ...getThemeClassObject(props) }, props.className)

  const elementClasses = classNames('control__radio-element', { 'control__radio-element--rounded': props.rounded })

  return (
    <div className='control__radio-group'>
      <input type='radio' className='control__radio-input' {...props.attributes} {...props.eventHandlers} />
      <label htmlFor={props.attributes.id} className={radioClasses}>
        <span className={elementClasses} />
        <span className='control__radio-text m-text-grey-dark-1'>{props.children}</span>
      </label>
    </div>
  )
}

Radio.displayName = 'Radio'

Radio.defaultProps = {}

Radio.propTypes = {
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
