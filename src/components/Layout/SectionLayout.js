import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SectionLayout = props => {
  const TagName = props.tagName

  const classes = classNames(
    'l-section',
    {
      'l-section--simple': props.simple,
      'l-section--auto': props.auto,
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

  return <TagName className={classes}>{props.children}</TagName>
}

SectionLayout.displayName = 'SectionLayout'

SectionLayout.defaultProps = {
  tagName: 'section'
}

SectionLayout.propTypes = {
  tagName: PropTypes.bool,
  simple: PropTypes.bool,
  auto: PropTypes.bool,
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

export default SectionLayout
