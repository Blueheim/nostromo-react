import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BarLayout = props => {
  const classes = classNames(
    'l-bar',
    {
      'l-bar--left': props.left,
      'l-bar--right': props.right,
      'm-primary': props.primary,
      'm-secondary': props.secondary,
      'm-tertiary': props.tertiary,
      'm-valid': props.valid,
      'm-invalid': props.invalid,
      'm-info': props.info,
      'm-alert': props.alert
    },
    props.className
  )

  return <div className={classes}>{props.children}</div>
}

BarLayout.displayName = 'BarLayout'

BarLayout.defaultProps = {}

BarLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool
}

export default BarLayout
