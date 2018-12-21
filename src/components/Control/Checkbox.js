import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getThemeClassObject } from '../util'

const Checkbox = props => {
  const checkboxClasses = classNames('control__checkbox', { ...getThemeClassObject(props) }, props.className)

  const elementClasses = classNames('control__checkbox-element')

  return (
    <div className='control__checkbox-group'>
      <input type='checkbox' className='control__checkbox-input' {...props.attributes} {...props.eventHandlers} />
      <label htmlFor={props.attributes.id} className={checkboxClasses}>
        <span className={elementClasses} />
        <span className='control__checkbox-text'>{props.children}</span>
      </label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {}

Checkbox.propTypes = {
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

export default Checkbox
