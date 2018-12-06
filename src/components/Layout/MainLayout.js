import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MainLayout = props => {
  const classes = classNames(
    'l-main',
    {
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

MainLayout.displayName = 'MainLayout'

MainLayout.defaultProps = {}

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  info: PropTypes.bool,
  alert: PropTypes.bool
}

export default MainLayout
